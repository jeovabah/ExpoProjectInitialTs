import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import * as Location from 'expo-location'
import { LocalContextType } from '~contexts/LocalContext'
const LocalProviderContext = createContext({} as LocalContextType)
export const LocalProviderProvider = ({ children }: any) => {
  const [location, setLocation] = useState<any>(null)
  const [errorMsg, setErrorMsg] = useState('')
  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [])

  const getLocation = useCallback(async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied')
      return
    }

    let location = await Location.getCurrentPositionAsync({})
    setLocation(location)
  }, [])

  const value = useMemo(() => {
    return {
      location,
      getLocation,
    }
  }, [location])

  return <LocalProviderContext.Provider value={value}>{children}</LocalProviderContext.Provider>
}
export const useLocalProvider = () => {
  const context = useContext(LocalProviderContext)
  return context
}
