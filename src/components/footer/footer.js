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
            social  {
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
            column3labels
            column3links
            column4header
            addressLine1
            addressCsz
            email
          }
        }
        allServiceAreasTsv {
          nodes {
            city_varchar_25
            state_varchar_20
            stateshort_varchar_2
          }
        }
      }
    `
  )
  const data = queryResult.markdownRemark.frontmatter
  const areas = queryResult.allServiceAreasTsv.nodes

  const [footer, setFooter] = useState({ data })

  return (
    <FooterContext.Provider value={{ footer, setFooter }}>
      <footer className={styles.footer_background}>
        <DesktopFooter data={data} areas={areas} />
        <MobileFooter data={data} />
      </footer>
    </FooterContext.Provider>
  )
}
