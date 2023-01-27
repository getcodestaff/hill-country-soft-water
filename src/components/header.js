import React from "react"
import PropTypes from "prop-types"
import logo from "../images/logoipsum-289.svg"
import { Navbar } from "./navbar/navbar"
import { FaPhone } from "react-icons/fa"

const Header = ({ siteTitle }) => {
  return (
    <header className="text-black">
      <div className="flex px-5 py-4 items-center justify-between">
        {/* <div id="left" className="px-0 w-1/4 max-h-48"> */}
        <div className="logo-container">
          <img alt="Carruth Home Solutions logo" src={logo} />
          {/* <Link to="/" className="text-xl font-bold no-underline inline-block pl-4">
                {siteTitle}
          </Link> */}
        </div>

        <div className="lg:hidden w-3/4">
          <div>
            <Navbar />
          </div>
          <div className="hidden md:flex justify-center">
            <div className="hidden md:flex justify-center pb-2">
              <a href="tel:123-456-7890" className="submit-button bg-chsblue">
                <span className="nowrap">
                  <FaPhone size="20px"/>916-257-8310
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex">
          <Navbar />
        </div>

        <div className="hidden lg:flex">
          <div className="hidden md:flex justify-center pb-2">
            <a href="tel:123-456-7890" className="submit-button bg-chsblue mr-8">
                <FaPhone className="inline m-2 ml-0" size="20px"/>916-257-8310
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
