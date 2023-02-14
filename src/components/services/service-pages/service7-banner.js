import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../service.module.css"

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

  const data = queryResult.markdownRemark.frontmatter
  const image = getImage(data.featuredImage)

  return (
    <React.Fragment>
      <div className="relative text-center bg-gray-200">
        <GatsbyImage
          image={image}
          alt="temporary water servcie alt"
        />

        <div className={ `w-[90%] md:w-1/2 p-caption1-wd-2 ${styles.title}`}>
          <div  style={{ color: data.textColor }}
          >
            <div className="tp-caption1-wd-2">{data.title}</div>
            <div className="text-[50%] font-semibold md:text-sm">{data.text}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
