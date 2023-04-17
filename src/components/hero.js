//https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image#background-images
import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { LayoutContext } from "../contexts/layout-context"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FaArrowRight } from "react-icons/fa"
import { formatWithCityState } from "./global"

export const Hero = () => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { component: { eq: "hero" } }) {
          frontmatter {
            component
            date
            titleLine1
            titleLine2
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

  const { layout } = useContext(LayoutContext)
  const data = queryResult.markdownRemark.frontmatter

  const image = getImage(data.featuredImage.childImageSharp.gatsbyImageData)

  return (
    <div className="w-[100%] relative">
      <GatsbyImage className="relative z-0" alt="" image={image} />
      <div className="z-20 absolute top-0 tp-caption l-0 lg:ml-20">
        <div
          className="tp-caption1-wd-2 page-indent uppercase whitespace-nowrap"
          style={{ color: data.textColor }}
        >
          {data.titleLine1}
          <br />
          {data.titleLine2}
        </div>

        <div
          className="small-hero-text page-indent"
          style={{ color: data.textColor }}
        >
          {formatWithCityState(
            data.text,
            layout.location.city,
            layout.location.stateshort
          )}
        </div>
        <button
          className="text-lg btn-sm lg:btn-xl btn-info hero-btn bg-red-500 text-white page-indent whitespace-nowrap"
          onClick={() => scrollTo("#services")}
        >
          {data.buttonText}
          <FaArrowRight className="inline my-2 ml-4 mr-0" size="18px" />
        </button>
        <br />
      </div>
    </div>
  )
}
