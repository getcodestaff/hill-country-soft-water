import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { WebDevBanner } from "./webdev-banner"
import { imageLeft, imageRight } from "../../global"

export const WebDeveloment = () => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { component: { eq: "webdev_row" } } }
          sort: { frontmatter: { position: ASC } }
        ) {
          nodes {
            frontmatter {
              position
              rowImage {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    quality: 90
                    webpOptions: { quality: 90 }
                  )
                }
              }
              rowImageAlt
            }
            html
          }
        }
      }
    `
  )

  const serviceNodes = queryResult.allMarkdownRemark.nodes

  return (
    <React.Fragment>
      <WebDevBanner />
      <style>
        {`
            h1 {
                font-family   : 'MontserratBold', sans-serif;
                font-weight   : 600;
                font-style    : normal;
                font-size     : 2rem;
                padding       : .4rem 1.5rem 0 ;
            }
            p {
                font-size     : 1rem;
                padding       : 1rem 1.5rem;
            }
            @media (min-width: 768px) {
                h1 {
                    padding: .4rem 3rem 0;
                }
                p {
                    padding: 1rem 3rem;
                }
            }
        `}
      </style>

      {/* BODY */}
      {serviceNodes.map(node => {
        const image = getImage(node.frontmatter.rowImage)
        const row2x =
          node.frontmatter.position % 2
            ? imageLeft(node, image)
            : imageRight(node, image)

        return <div key={node.frontmatter.position}>{row2x}</div>
      })}
    </React.Fragment>
  )
}
