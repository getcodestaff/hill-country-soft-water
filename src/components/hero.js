//https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image#background-images
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FaArrowRight } from "react-icons/fa"

export const Hero = () => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { component: { eq: "hero" } }) {
          frontmatter {
            component
            date
            text
            textColor
            buttonText
            featuredImage {
              childImageSharp {
                gatsbyImageData(quality: 50, webpOptions: { quality: 70 })
              }
              relativePath
            }
          }
        }
      }
    `
  )
  const data = queryResult.markdownRemark.frontmatter
  const img = data.featuredImage.childImageSharp.gatsbyImageData

  const x = getImage(img)

  return (
    <div className="w-[100%] relative">
      <GatsbyImage className="relative z-0" alt="" image={x} />
      <div className="z-20 absolute top-0 tp-caption l-0 md:ml-20">
        <div
          className="tp-caption1-wd-2 page-indent uppercase whitespace-nowrap"
          style={{ color: data.textColor }}
        >
          San Antonio
          <br />
          Water Softeners
        </div>
        <div
          className="small-hero-text page-indent"
          style={{ color: data.textColor }}
        >
          {data.text}
        </div>
        <div className="hidden">
          <button
            className="btn-xl btn-info hero-btn bg-white page-indent"
            onClick={() => scrollTo("#services")}
          >
            SCHEDULE A CALL
            <FaArrowRight className="inline my-2 ml-4 mr-0" size="18px" />
          </button>
          <br />
        </div>
      </div>
    </div>
  )
}
