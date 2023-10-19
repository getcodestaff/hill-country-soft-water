import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import { Footer } from "./footer"
import { LayoutContext } from "../contexts/layout-context"
import { MenuContext } from "../contexts/menu-context"
import { NavLinks } from "./navbar/navlinks.js"

const Layout = ({ children, location }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            businessName
            phone
            defaultCity
          }
        }
      }
    `
  )

  const siteMetadata = site.siteMetadata

  const [menuOpen, setMenuOpen] = useState({ menuOpen: false })
  const [layout, setLayout] = useState({ location, siteMetadata })

  const copyrightMobile = () => {
    let titleMobile = site.siteMetadata?.title.split("|")

    return (
      <>
        {titleMobile[0]}
        <br />
        {titleMobile[1]}
        <br />
      </>
    )
  }

  const title = siteMetadata?.title || `Title`

  return (
    <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
      <LayoutContext.Provider value={{ layout, setLayout }}>
        <Header metaData={siteMetadata} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: `var(--size-content)`,
            padding: `var(--size-gutter)`,
          }}
        >
          {menuOpen === true ? (
            <NavLinks styles="mobile-nav" />
          ) : (
          <main>{children}</main>
          )}

          <Footer />
          <footer
            id="copyright"
            className="px-4 lg:px-0"
            style={{
              marginTop: `var(--space-5)`,
              fontSize: `var(--font-sm)`,
            }}
          >
            <div className="hidden lg:flex lg:flex-row justify-between content-start">
              © {new Date().getFullYear()} &middot; {title}&nbsp;
            </div>
            <div className="block lg:hidden">
              © {new Date().getFullYear()} &middot; {copyrightMobile()}
            </div>
          </footer>
          <a
            id="sitemap"
            className="text-xs block text-right w-full"
            href="/sitemap-0.xml"
          >
            sitemap
          </a>
        </div>
      </LayoutContext.Provider>
    </MenuContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
