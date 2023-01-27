import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../service.module.css"

export const DryRotRepairsBanner = () => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { component: { eq: "dry_rot_repairs_banner" } }) {
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
        <GatsbyImage image={image} alt="a balcony" />
        <div
          className={`tp-caption1-wd-2 ${styles.title} `}
          style={{ color: data.textColor }}
        >
          DryRotRepairs
        </div>
        <div
          className={`small-hero-text ${styles.subTitle}`}
          style={{ color: data.textColor }}
        >
          {data.text}
        </div>
      </div>
    </React.Fragment>
  )
}
