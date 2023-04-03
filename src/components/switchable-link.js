import { Link } from "gatsby"
import React from "react"

export const SwitchableLink = ({ lnk, children }) => {
  const externalLink = lnk.includes("http")
  const link = externalLink ? lnk : `/${lnk}/`
  
  return (
    <React.Fragment>
      {externalLink ? (
        <a href={link}>{children}</a>
      ) : (
        <Link to={link}>{children}</Link>
      )}
    </React.Fragment>
  )
}
