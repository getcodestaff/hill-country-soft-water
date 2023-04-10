import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { Navbar } from "./navbar/navbar"
import { FaPhone } from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Header = ({ metaData }) => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { component: { eq: "header" } }) {
          frontmatter {
            component
            logoImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    `
  )
  
  const data = queryResult.markdownRemark.frontmatter

  const image = getImage(data.logoImage)
  const alt = `${metaData.businessName} logo`

  const telPhone = `tel:${metaData.phone}`

  return (
    <header className="text-black">
      <div className="flex px-5 py-4 items-center justify-between">
        <div className="logo-container">
          <GatsbyImage image={image} alt={alt} />
        </div>

        <div className="lg:hidden w-3/4">
          <div>
            <Navbar data={data} />
          </div>
          <div className="hidden lg:flex justify-center">
            <div className="hidden lg:flex justify-center pb-2">
              <a href={telPhone} className="submit-button bg-chsblue">
                <span className="whitespace-nowrap flex">
                  <FaPhone size="20px" />&nbsp;
                  {metaData.phone}
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex">
          <Navbar />
        </div>

        <div className="hidden lg:flex">
          <div className="hidden lg:flex justify-center pb-2">
            <a href={telPhone} className="submit-button bg-chsblue mr-8">
              <span className="whitespace-nowrap">
              <FaPhone className="inline m-2 ml-0" size="20px" />
              {metaData.phone}
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
