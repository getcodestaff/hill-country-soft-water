import React from "react"
import { Link } from "gatsby"

export const ServicesLinks = ({ classline, data }) => {
  let classes = `links ${classline}`

  const services = data.column2labels.split("|")

  return (
    <div>
      <style>
        {`
            .links {
                display: block;
                color:#9999a0;
                text-decoration: none;
            }
        `}
      </style>
      {services.map(item => {
        return (
            // todo change key to itemlinks to avoid spaces in key
          <Link key={item} className={classes} to="/">
            {item}
          </Link>
        )
      })}
    </div>
  )
}
