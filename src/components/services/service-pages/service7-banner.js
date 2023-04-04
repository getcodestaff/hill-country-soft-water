import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BannerCore } from "./banner-core.js"

export const Service7Banner = () => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { component: { eq: "service7_banner" } }) {
          frontmatter {
            component
            date
            title
            text
            textColor
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  quality: 50
                  webpOptions: { quality: 70 }
                )
              }
            }
          }
        }
      }
    `
  )

  return <BannerCore data={queryResult.markdownRemark.frontmatter} />
}
