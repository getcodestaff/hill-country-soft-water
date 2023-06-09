import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const WebDevBanner = () => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { component: { eq: "service1_banner" } }) {
          frontmatter {
            component
            date
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
  const data = queryResult.markdownRemark.frontmatter
  const image = getImage(data.featuredImage)

  return (
    <React.Fragment>
      <div className="relative text-center bg-gray-200">
        <GatsbyImage
          image={image}
          alt="Best in Sacramento, CA"
        />
      </div>
    </React.Fragment>
  )
}
