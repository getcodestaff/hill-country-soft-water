import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
// import { Social } from "./social"
import { Nav } from "rsuite"

export const NavLinks = props => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { component: { eq: "header" } }) {
          frontmatter {
            menu {
              mainMenu {
                label
                link
              }
              dropdown {
                label
                link
              }
            }
          }
        }
      }
    `
  )

  const data = queryResult.markdownRemark.frontmatter
  const topLevelMenu = data.menu.mainMenu
  const dropdown = data.menu.dropdown

  let navclasses = "text-black flex whitespace-nowrap"
  if (props.mobile) {
    navclasses = "text-black font-extrabold uppercase flex flex-col"
  }

  return (
    <div className={props.styles}>
      <Nav className={navclasses}>
        <Nav.Item
          href={topLevelMenu[0].link}
          className="mx-2 menu-item font-semibold"
        >
          {topLevelMenu[0].label}
        </Nav.Item>

        <Nav.Item
          href={topLevelMenu[1].link}
          className="mx-4 menu-item font-semibold"
        >
          {topLevelMenu[1].label}
        </Nav.Item>

        {/* dropdown */}
        <Nav.Menu
          title={topLevelMenu[2].label}
          noCaret={true}
          className="pl-3 menu-item font-semibold"
        >
          <div
            className="absolute right-0 m-2 ml-8 p-2 text-white lg:text-black bg-chsltblue
                    text-xl text-left leading-relaxed z-40 rounded-md"
          >
            {dropdown.map(item => {
              const link = `${item.link}`
              return (
                <Nav.Item key={link} style={{ marginBottom: "0" }}>
                  <Link
                    to={link}
                    className="menu-item font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                </Nav.Item>
              )
            })}
          </div>
        </Nav.Menu>

        <Nav.Item
          href={topLevelMenu[3].link}
          className="mx-4 menu-item font-semibold"
        >
          {topLevelMenu[3].label}
        </Nav.Item>

        <Nav.Item
          href={topLevelMenu[4].link}
          className="mx-4 menu-item font-semibold"
        >
          {topLevelMenu[4].label}
        </Nav.Item>
      </Nav>
    </div>
  )
}
