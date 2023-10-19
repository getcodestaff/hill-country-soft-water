import { Link } from "gatsby"
import React from "react"

export const SwitchableLink = ({ link, children }) => {
  const externalLink = link.includes("http")
  
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
