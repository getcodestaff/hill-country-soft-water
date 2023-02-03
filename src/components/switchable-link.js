import { Link } from "gatsby"
import React from "react"

export const SwitchableLink = ({ lnk, children }) => {
  const externalLink = lnk.includes("http")
  return (
    <React.Fragment>
      {externalLink ? (
        <a href={lnk}>{children}</a>
      ) : (
        <Link to={lnk}>{children}</Link>
      )}
    </React.Fragment>
  )
}
