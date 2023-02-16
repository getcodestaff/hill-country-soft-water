import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../service.module.css"

export const Service1Banner = () => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { component: { eq: "service1_banner" } }) {
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
<<<<<<< HEAD:src/components/services/service-pages/balconies-banner.js
        <GatsbyImage image={image} alt="a balcony" />
        <div
          className={`tp-caption1-wd-2 ${styles.title} `}
          style={{ color: data.textColor }}
        >
          Water Filtration
        </div>
        <div
          className={`small-hero-text ${styles.subTitle}`}
          style={{ color: data.textColor }}
        >
          {data.text}
=======
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
>>>>>>> dev:src/components/services/service-pages/service1-banner.js
        </div>
      </div>
    </React.Fragment>
  )
}
