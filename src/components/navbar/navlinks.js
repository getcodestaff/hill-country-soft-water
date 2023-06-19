import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
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
              dropdown1 {
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
  const dropdown1 = data.menu.dropdown1

  //todo when all the products are assigned, remove the index from the key and use the link as the key.

  return (
    <div className={props.styles}>
      <Nav className="menuWrapper">
        <Nav.Item
          href={topLevelMenu[0].link}
          className="lg:mx-2 menu-item font-semibold"
        >
          {topLevelMenu[0].label}
        </Nav.Item>

        <Nav.Item
          href={topLevelMenu[1].link}
          className="lg:mx-4 menu-item font-semibold"
        >
          {topLevelMenu[1].label}
        </Nav.Item>

        {/* dropdown 1*/}
        <Nav.Menu
          title={topLevelMenu[2].label}
          noCaret={false}
          className="lg:pl-3 menu-item font-semibold relative"
        >
          <div className="dropdownWrapper lg:absolute" >
            {dropdown1.map((item, index) => {
              const link = `${item.link}`
              const key = `${item.link}${index}`

              return (
                <Nav.Item
                  key={key}
                  className="leading-loose mb-0 font-medium"
                  >
                  <Link to={link} className="menu-item whitespace-nowrap">
                    {item.label}
                  </Link>
                </Nav.Item>
              )
            })}
          </div>
        </Nav.Menu>

        <Nav.Item
          href={topLevelMenu[3].link}
          className="lg:mx-4 menu-item font-semibold"
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
