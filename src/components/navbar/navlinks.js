import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Social } from "./social"
import { Nav } from "rsuite"

export const NavLinks = props => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { component: { eq: "header" } }) {
          frontmatter {
            mainMenu
            mainMenuLinks
            dropdown
            dropdownLinks
          }
        }
      }
    `
  )

  const data = queryResult.markdownRemark.frontmatter

  const topLevelMenu = data.mainMenu.split("|")
  const topLevelLinks = data.mainMenuLinks.split("|")
  const dropdownLabels = data.dropdown.split("|")
  const dropdownLinks = data.dropdownLinks.split("|")

  const dropdown = []
  dropdownLabels.forEach((item, index) => {
    let obj = {}
    obj.label = item
    obj.link = `/${dropdownLinks[index].trim()}/`
    dropdown[index] = obj
  })

  let navclasses = "text-black flex"
  if (props.mobile) {
    navclasses = "text-black font-extrabold uppercase flex flex-col"
  }

  return (
    <div className={props.styles}>
      <Nav className={navclasses}>
        <Nav.Item href={topLevelLinks[0]} className="mx-2 menu-item font-semibold">
          {topLevelMenu[0]}
        </Nav.Item>
        <Nav.Item href={topLevelLinks[1]} className="mx-4 menu-item font-semibold">
          {topLevelMenu[1]}
        </Nav.Item>
        <Nav.Menu
          title={topLevelMenu[2]}
          className="pl-3 menu-item font-semibold"
        >
          <div
            className="absolute m-2 ml-8 p-2 text-white md:text-black bg-chsltblue
                    text-xl text-left leading-relaxed z-40 rounded-md"
          >
            {dropdown.map(item => {
              return (
                <Nav.Item key={item.link}>
                  <Link to={item.link} className="menu-item font-medium">
                    {item.label}
                  </Link>
                </Nav.Item>
              )
            })}
          </div>
        </Nav.Menu>
        <Nav.Item href="/contact/" className="mx-4 menu-item font-semibold">
          Contact
        </Nav.Item>
      </Nav>

      <div className="mx-2 my-3 md:hidden">
        <Social />
      </div>
    </div>
  )
}
