import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge" 
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
  const pluginImage = getImage(data.featuredImage)

  return (
    <BgImage image={pluginImage} className="hero-image">
      <div className="tp-caption ml-20">
        <div
          className="tp-caption1-wd-2 page-indent uppercase"
          style={{ color: data.textColor }}
        >
          <div className="w-2/3">Carruth Home Solutions</div>
        </div>
        <div
          className="small-hero-text page-indent"
          style={{ color: data.textColor }}
        >
          {data.text}
        </div>
        <button
          className="btn-xl btn-info hero-btn bg-white page-indent"
          onClick={() => scrollTo("#services")}
        >
          {data.buttonText}
          <FaArrowRight className="inline my-2 ml-4 mr-0" size="18px" />
        </button>
        <br />
      </div>
    </BgImage>
  )
}
