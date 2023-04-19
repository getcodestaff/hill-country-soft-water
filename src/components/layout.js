import React, { useState } from "react"
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
            defaultCity
          }
        }
      }
    `
  )

  const siteMetadata = site.siteMetadata
  const [layout, setLayout] = useState({ location, siteMetadata })

  if (layout.location) {
    layout.location.city = layout.location.city || siteMetadata.defaultCity
  }

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
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
