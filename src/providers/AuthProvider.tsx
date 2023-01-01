import * as SecureStore from 'expo-secure-store'
import { FC, useCallback, useEffect, useMemo, useState } from 'react'

import { AuthContext } from '~contexts'
import { api } from '~services/api'
import Push from '~services/push'

// TODO: move to constants
const TOKEN_KEY = 'token'

export const AuthProvider = ({ children }: any) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null)
  const [userData, setUserData] = useState<any>({})
  const [deviceToken, setDeviceToken] = useState<string>('1234')
  useEffect(() => {
    const loadingStorageData = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY)
      const storageUser = await SecureStore.getItemAsync('user')
      setIsSignedIn(!!token)
      if (storageUser) {
        setUserData(JSON.parse(storageUser)?.data)
        setHeaders(JSON.parse(storageUser)?.data)
      }
      Push.init().then((token) => {
        setDeviceToken(token || 'dG9rZW5EZWZhdWx0')

        if (
          storageUser &&
          JSON.parse(storageUser)?.device_token !== token &&
          token?.substring(17, 0) === 'ExponentPushToken'
        ) {
          api.post('Customer/EditProfile', { deviceToken: token })
        }
      })
    }

    loadingStorageData()
  }, [])

  const signIn = useCallback(
    async (email: string, password: string) => {
      const { data } = await api.post('Customer/login', {
        email: email,
        password: password,
        deviceToken,
        generateToken: false,
      })

      if (!data.status) {
        alert(data.message)
        return
      }
      setHeaders(data.data)
      await SecureStore.setItemAsync(TOKEN_KEY, data.data.api_token)
      await SecureStore.setItemAsync('user', JSON.stringify(data))
      setUserData(data.data)
      setIsSignedIn(true)
    },
    [api, deviceToken]
  )

  const setHeaders = (userData: any) => {
    api.defaults.headers.common.token = userData?.api_token
    api.defaults.headers.common.userid = userData?.idUser
  }

  const signOut = useCallback(async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY)
    await SecureStore.deleteItemAsync('user')

    delete api.defaults.headers.common.token
    delete api.defaults.headers.common.userid
    setIsSignedIn(false)
  }, [])

  const signUp = useCallback(() => {
    // TODO: implement sign up here
  }, [])

  const value = useMemo(() => {
    return {
      isSignedIn,
      signIn,
      signOut,
      signUp,
      userData,
    }
  }, [isSignedIn, signIn, signOut, signUp, userData])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
