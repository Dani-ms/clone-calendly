import { ReactNode, useEffect } from "react";
import { useAuthState } from "./auth-state";
import { supabase } from "../supabase/supabase-client";




export function AuthEffects(props: { children: ReactNode }) {
  const { setAuthState } = useAuthState()
  
  useEffect(() => {
    setAuthState({ isLoading: true })

    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuthState({ data: session })
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthState({ data: session })
    })

    return () => subscription.unsubscribe()
  }, [setAuthState])

  return <>{props.children}</>
}
