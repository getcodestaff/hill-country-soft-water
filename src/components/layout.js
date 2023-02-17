import React, { useState } from 'react';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import { Footer } from "./footer"
import { LayoutContext } from "../contexts/layout-context"

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
        }
      }
    }
    `
  )

  const siteMetadata = site.siteMetadata
  const [layout, setLayout] = useState({location, siteMetadata})

  const copyrightMobile = () => {
    let titleMobile = site.siteMetadata?.title.split("|")

    return (
      <>
        {titleMobile[0]}
        <br />
        {titleMobile[1]}
        <br />
        <a className="text-xs" href="/sitemap-0.xml">
          sitemap
        </a>
      </>
    )
  }

  const title = siteMetadata?.title || `Title`

  return (
    <React.Fragment>
      <LayoutContext.Provider value={{ layout, setLayout }}>
      <Header metaData={siteMetadata} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <Footer />
        <footer
          className="px-4 md:px-0"
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
            <div className="hidden md:flex md:flex-row justify-between content-start">
              © {new Date().getFullYear()} &middot; {title}&nbsp;
              <a className="text-xs" href="/sitemap-0.xml">
                sitemap
              </a>
          </div>
          <div className="block md:hidden">
            © {new Date().getFullYear()} &middot; {copyrightMobile()}
          </div>
        </footer>
      </div>
      </LayoutContext.Provider>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
