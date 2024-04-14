import { theme } from "antd";
import { useState } from "react"
import { v4 } from "uuid";

export function Container({
  children,
}: {
  children: React.ReactNode
}){
  const [id] = useState(v4());
  const { token } = theme.useToken()

  return(
    <>
    <div
    style={{
      width: "100%",
      margin: "0 auto",
      maxWidth: "1024px",
      paddingRight: `${token.padding}px`,
      paddingLeft: `${token.padding}px`,
      paddingTop: `${token.padding}px`
    }}
    >
        {children}
    </div>
    </>
  )
}