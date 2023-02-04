import React from "react"
import { Link } from "gatsby"
import { Social } from "./social"
import { Nav } from "rsuite"

export const NavLinks = props => {
  let navclasses = "text-black flex"
  if (props.mobile) {
    navclasses = "text-black font-extrabold uppercase flex flex-col"
  }

  return (
    <div className={props.styles}>
      <Nav className={navclasses}>
        <Nav.Item href="/" className="mx-2 menu-item font-semibold">
          Home
        </Nav.Item>
        <Nav.Item href="/decking/" className="mx-4 menu-item font-semibold">
          About
        </Nav.Item>
        <Nav.Menu title="Services" className="pl-3 menu-item font-semibold">
          <div
            className="absolute m-2 ml-8 p-2 text-black bg-chsltblue
                    text-xl text-left leading-relaxed z-40 rounded-md"
          >
            <Nav.Item>
              <Link to="/water-softeners" className="menu-item font-medium">
                Water Softeners
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/water-filtration" className="menu-item font-medium">
                Water Filtration
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/reverse-osmosis" className="menu-item font-medium">
                Reverse Osmosis
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/hard-water-filters" className="menu-item font-medium">
                Hard Water Filters
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/water-testing" className="menu-item font-medium">
                Water Testing
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/water-treatment" className="menu-item font-medium">
                Water Treatment
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/house-water-filters" className="menu-item font-medium">
                House Water Filters
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/well-water-systems" className="menu-item font-medium">
                Well Water Systems
              </Link>
            </Nav.Item>
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
