import React from "react"
import { Link } from "gatsby"

export const ServicesLinks = ({ classline, data }) => {
  let classes = `links ${classline}`

  const services = data.column2labels.split("|")
  const links = data.column2links.split("|")

//   console.log('links: ', links)

//   services.map((item, index) => {
//     console.log(index, links[index])
//   })


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
      {services.map((item, index) => {
        const itemLink = `/${links[index].trim()}`
        return (
          <Link key={itemLink} className={classes} to={itemLink}>
            {item}
          </Link>
        )
      })}
    </div>
  )
}
