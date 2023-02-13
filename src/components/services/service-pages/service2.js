import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Service2Banner } from "./service2-banner"
import { Services } from "../services"
import { Badges } from "../../badges"
import { SampleRow } from "../sample-row"

export const Service2 = () => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { component: { eq: "service2_row" } } }
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
          frontmatter: { component: { eq: "balconies_images_row" } }
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
            }
          }
        }
      }
    `
  )

  const serviceNodes = queryResult.allMarkdownRemark.nodes
  const sampleNodes =
    queryResult.markdownRemark.frontmatter.images.galleryImages

  const imageLeft = (node, image) => {
    return (
      <div className="md:flex justify around md:m-10">
        <div className="w-full md:w-1/2">
          <GatsbyImage
            className="m-4 md:w-full"
            image={image}
            alt={node.frontmatter.rowImageAlt}
          />
        </div>
        <div
          className="w-full"
          dangerouslySetInnerHTML={{ __html: node.html }}
        />
      </div>
    )
  }

  const imageRight = (node, image) => (
    <div className="md:flex justify around md:ml-0 md:mr-8">
      <div className="w-full" dangerouslySetInnerHTML={{ __html: node.html }} />
      <div className="w-full md:w-1/2">
        <GatsbyImage
          className="m-4: md:w-full"
          image={image}
          alt={node.frontmatter.rowImageAlt}
        />
      </div>
    </div>
  )

  return (
    <React.Fragment>
      <Service2Banner />
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

      <SampleRow nodes={sampleNodes} />

      <Services cardsOnly />

      <Badges />
    </React.Fragment>
  )
}
