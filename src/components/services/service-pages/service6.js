import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { Service6Banner } from "./service6-banner"
import { Services } from "../services"
import { Badges } from "../../badges"
import { SampleRow } from "../sample-row"
import {imageLeft, imageRight } from '../../global'

export const Service6 = () => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { component: { eq: "service6_row" } } }
          sort: { frontmatter: { position: ASC } }
        ) {
          nodes {
            frontmatter {
              position
              rowImage {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    quality: 50
                    webpOptions: { quality: 70 }
                  )
                }
              }
              rowImageAlt
            }
            html
          }
        }
        markdownRemark(
          frontmatter: { component: { eq: "service6_images_row" } }
        ) {
          frontmatter {
            component
            images {
              galleryImages {
                childImageSharp {
                  gatsbyImageData(width: 240)
                }
                name
              }
              galleryAlts
            }
          }
        }
      }
    `
  )

  const serviceNodes = queryResult.allMarkdownRemark.nodes
  const sampleNodes =
    queryResult.markdownRemark.frontmatter.images.galleryImages
  const sampleAlts = queryResult.markdownRemark.frontmatter.images.galleryAlts

  return (
    <React.Fragment>
      <Service6Banner />
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

      <SampleRow nodes={sampleNodes} alts={sampleAlts} />

      <Services cardsOnly />

      <Badges />
    </React.Fragment>
  )
}
