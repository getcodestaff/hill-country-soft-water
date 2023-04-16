import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { DesktopFooter } from "./desktop-footer"
import { MobileFooter } from "./mobile-footer"
import { FooterContext } from "../../contexts/footer-context"
import * as styles from "./footer.module.css"

export const Footer = () => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { component: { eq: "footer" } }) {
          frontmatter {
            component
            logoImage {
              childImageSharp {
                gatsbyImageData(width: 190)
              }
            }
            logoAlt
            logoColumnText
            social {
              socials {
                label
                link
                enable
              }
            }
            column2header
            column2labels
            column2links
            column3header
            column3 {
              elements {
                label
                link
              }
            }
            column4header
            addressLine1
            addressCsz
            email
          }
        }
      }
    `
  )
  const data = queryResult.markdownRemark.frontmatter

  const [footer, setFooter] = useState({ data })

  return (
    <FooterContext.Provider value={{ footer, setFooter }}>
      <footer className={styles.footer_background}>
        <DesktopFooter data={data} />
        <MobileFooter data={data} />
      </footer>
    </FooterContext.Provider>
  )
}
