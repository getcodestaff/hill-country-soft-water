import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../components/services/service.module.css"

export const Banner = ({ title }) => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { component: { eq: "about_us_banner" } }) {
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
        <GatsbyImage image={image} alt="about web ecommerce developer" />

        <div className={`w-[90%] lg:w-1/2 p-caption1-wd-2 ${styles.title}`}>
          <div style={{ color: data.textColor }}>
            <div className="tp-caption1-wd-2">ABOUT US</div>
            <div className="hidden md:block text-base font-semibold lg:text-sm">
              {data.text}
          </div>
        </div>
      </div>
      </div>
      <p className="md:hidden px-8 pt-4">{data.text}</p>
    </React.Fragment>
  )
}
