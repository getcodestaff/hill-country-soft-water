import { Link } from "gatsby"
import React from "react"

export const SwitchableLink = ({ lnk, children }) => {
  const externalLink = lnk.includes("http")
  // console.log({ lnk })
  // console.log('externalLink: ', externalLink)
  return (
    <div>
      {externalLink ? (
        <a href={lnk}>{children}</a>
      ) : (
        <Link to={lnk}>{children}</Link>
      )}
    </div>
  )
}
