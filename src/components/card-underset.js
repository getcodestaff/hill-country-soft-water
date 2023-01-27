import React from "react"

export const CardUnderset = ({ children, title, anchor }) => {
  let titleBlock
  if (anchor) {
    titleBlock = <h2 className="underset-title">{title}</h2>
  } else if (title) {
    titleBlock = <h2 className="font-semibold w-full">{title}</h2>
  } else {
    titleBlock = null
  }

  return (
    <React.Fragment>
      {titleBlock}
      {children}
    </React.Fragment>
  )
}
