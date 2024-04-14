import { LOGIN_ROUTE } from "@/app/login/login_routes";
import { useAuthState } from "@/logic/auth/auth-state";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export function MustBeLoggedIn(props: { children: ReactNode }) {
  const { authState } = useAuthState()
  const router = useRouter()

  useEffect(() => {
    if(authState.data === null) {
      router.push(LOGIN_ROUTE.getHref(`${window.location.pathname}?${window.location.search}`))
    }
  }, [authState, router])

  if(!authState.data) {
    return <></>
  }

  return <>{props.children}</>
}