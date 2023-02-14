import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
      <div className="content2x-section-b items-center mt-14">
        <div className="content2x-element w-1/2">
          <div className="p-0 iframe-container-16-9">
            <div>
              {image ? (
                <GatsbyImage image={image} alt={frontmatter.featuredImageAlt} />
              ) : (
                <img src={staticImage} alt={frontmatter.featuredImageAlt} />
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="fixwidth flex flex-col space-y-8">
            <div className="text-chsblue text-lg font-semibold">ABOUT US</div>
            <h1 className="section-title mt-1 text-left">
              We treat all our customers like family!
            </h1>
            <div className="text-direction-b pb-2 space-y-8">
              <p className="m-0 text-black font-medium text-left">
                Designing, creating, building, modifying and/or repairing home
                projects for you is something we LOVE doing! Doing it well is
                our passion!
              </p>
              <p className="m-0 text-black font-medium  text-left">
                Over 60+ years of combined experiences with the highest
                standards of service. Performing renovations, repairs,
                installations, and full- service plumbing for you home. We are a
                local and family-owned business. We are centered on providing
                you with the highest quality of craftsmanship for a great value!
              </p>
              <button className="btn-xl btn-info hero-btn bg-chsblue text-white">
                READ MORE
                <FaArrowRight className="inline my-2 ml-4 mr-0" size="18px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
