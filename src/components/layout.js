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
            phone
            addressName
            addressLine1
            addressCsz
          }
        }
      }
    `
  )

  const siteMetadata = site.siteMetadata
  const [layout, setLayout] = useState({location, siteMetadata})

  console.log('layout: ', layout)

  const copyrightMobile = () => {
    let titleMobile = site.siteMetadata?.title.split("|")

    return (
      <>
        {titleMobile[0]}
        <br />
        {titleMobile[1]}
      </>
    )
  }

  const title = siteMetadata?.title || `Title`
  
  return (
    <React.Fragment>
      <LayoutContext.Provider value={{ layout, setLayout }}>
        <Header siteTitle={title} />
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
            <div className="hidden md:block">
              © {new Date().getFullYear()} &middot; {title}
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
