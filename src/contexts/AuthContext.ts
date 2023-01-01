import { createContext } from 'react'

// TODO: modify return options from signIn, signOut, signUp and add sendPasswordResetEmail and confirmPasswordReset functions
export type AuthContextType =
  | {
      isSignedIn: boolean | null
      signIn: (email: string, password: string) => void
      signOut: () => void
      signUp: () => void
      userData: UserDataType
    }
  | undefined

export type UserDataType = {
  api_token: string
  customerRegisterStatusId: string
  device_token: string
  document: string
  email: string
  idCustomer: string
  idUser: string
  nameUser: string
  nickname: string
  phone: string
  profileImage: string
  profileImageLink: string
}
export const AuthContext = createContext<AuthContextType>({} as AuthContextType)
