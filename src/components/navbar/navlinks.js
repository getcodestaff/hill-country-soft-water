import React from "react"
import { Link } from "gatsby"
import { Nav } from "rsuite"
import MenuQuery from "../services/menu-query"

export const NavLinks = props => {
  const data = MenuQuery()
  const mainMenu = data.menu.mainMenu
  const servicesSubmenu = data.menu.servicesMenu

  return (
    <div className={props.styles}>
      <Nav className="menuWrapper">
        <Nav.Item
          href={mainMenu[0].link}
          className="lg:mx-2 menu-item font-semibold"
        >
          {mainMenu[0].label}
        </Nav.Item>

        {/* services-dropdown */}
        <Nav.Menu
          title={mainMenu[1].label}
          noCaret={false}
          className="lg:pl-3 menu-item font-semibold relative"
        >
          <div className="dropdownWrapper lg:absolute" >
            {servicesSubmenu.map((item, index) => {
              const link = `${item.link}`
              // add index to key in case more than one link is the same
              const key = `${item.link}${index}`

              return (
                <Nav.Item key={key} className="leading-loose mb-0 font-medium">
                  <Link to={link} className="menu-item whitespace-nowrap">
                    {item.label}
                  </Link>
                </Nav.Item>
              )
            })}
          </div>
        </Nav.Menu>

        <Nav.Item
          href={mainMenu[2].link}
          className="lg:mx-4 menu-item font-semibold"
        >
          {mainMenu[2].label}
        </Nav.Item>

        <Nav.Item
          href={mainMenu[3].link}
          className="lg:mx-4 menu-item font-semibold"
        >
          {mainMenu[3].label}
        </Nav.Item>
      </Nav>
    </div>
  )
}
