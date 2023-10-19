import React from "react"
import { Link } from "gatsby"
import MenuQuery from "../services/menu-query"

export const ServicesLinks = ({ classline }) => {
  let classes = `links ${classline}`

  const services = MenuQuery().menu.servicesMenu

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
      
      {services.map((item) => {
        return (
          <Link key={item.link} className={classes} to={item.link}>
            {item.label}
          </Link>
        )
      })}
    </div>
  )
}
