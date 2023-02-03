import React from "react"
import Seo from "../../seo"
import { WindowsBanner } from "./windows-banner"

export const Windows = () => {
  return (
    <React.Fragment>
      <WindowsBanner />
    </React.Fragment>
  )
}

export const Head = ({ location }) => {
  return <Seo url={location.href} />
}
