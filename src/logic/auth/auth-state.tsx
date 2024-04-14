import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"
import { throwError } from "../internals/throw-error"
import { Session } from "@supabase/supabase-js"


type AuthState = {
  data?: null | Session
  isLoading?: boolean
}

type AuthStateContext = {
  authState: AuthState,
  setAuthState:  Dispatch<SetStateAction<AuthState>>
}

const AuthStateContext = createContext<AuthStateContext | null>(null)

export function AuthStateProvider(props: { children: ReactNode }){
  const [authState, setAuthState] = useState<AuthState>({}); 

  return <AuthStateContext.Provider value={{ authState, setAuthState}}>
    {props.children}
  </AuthStateContext.Provider>
} 

export function useAuthState() {
  return useContext(AuthStateContext) || throwError()
}
