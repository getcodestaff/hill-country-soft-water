import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaArrowRight } from "react-icons/fa"

export const Section1 = () => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { component: { eq: "section1" } }) {
          frontmatter {
            component
            text
            textColor
            featuredImage {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
            featuredImageAlt
          }
        }
      }
    `
  )

  const frontmatter = queryResult.markdownRemark.frontmatter
  let image = getImage(frontmatter.featuredImage)
  const staticImage = image ? null : frontmatter.featuredImage.publicURL

  return (
    <div>
      <div className="content2x-section-b items-center">
        <div>
          <div className="p-0 m-0">
            <div>
              {image ? (
                <GatsbyImage image={image} alt={frontmatter.featuredImageAlt} />
              ) : (
                <img src={staticImage} alt={frontmatter.featuredImageAlt} />
              )}
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2">
          <div className="fixwidth flex flex-col space-y-8">
            <div className="text-chsblue text-lg font-semibold">ABOUT US</div>
            <h1 className="section-title mt-1 text-left">
              Clean Water Your Whole Family Can Enjoy. Water Filtration and
              Water Softener Options For Every Situation.{" "}
            </h1>
            <div className="text-direction-b pb-2 space-y-8 md:pb-8">
              <p className="m-0 text-black font-medium text-left">
                Imagine clean water for your dishes, laundry, showers sinks and
                whole home! No more bottled water runs and spending thousands on
                plastic waste. Go Green and Provide clean water for your family
                at the same time.
              </p>
              <p className="m-0 text-black font-medium text-left">
                30+ years of experience with the hightest standards of
                service. Performing water softener installation and
                installations for Reverse Osmosis Water Treatement systems. We
                are a local and family owned business. We are centered on
                providing you with the hightest quality of water for a great
                value!
              </p>
              <Link
                className="btn-xl btn-info hero-btn bg-chsblue text-white"
                to="/about/"
              >
                READ MORE
                <FaArrowRight className="inline my-2 ml-4 mr-0" size="18px" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
