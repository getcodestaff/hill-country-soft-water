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
              <Link to="/decking" className="menu-item font-medium">
                Decking
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/balconies" className="menu-item font-medium">
                Balconies
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/windows" className="menu-item font-medium">
                Windows
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/doors" className="menu-item font-medium">
                Doors
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/dry-rot-repairs" className="menu-item font-medium">
                Dry Rot Repairs
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/siding" className="menu-item font-medium">
                Siding
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/pergolas" className="menu-item font-medium">
                Pergolas
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/plumbing" className="menu-item font-medium">
                Plumbing
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
