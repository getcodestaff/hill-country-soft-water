import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const Badges = () => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { component: { eq: "badges" } } }
        ) {
          nodes {
            frontmatter {
              component
              badgeAlt
              badgeLink
              badgeImage {
                childImageSharp {
                  gatsbyImageData
                }
                name
              }
              classNames
            }
          }
        }
      }
    `
  )

  const nodes = queryResult.allMarkdownRemark.nodes

  return (
    <div className="flex flex-col lg:flex-row justify-around items-center mx-4 mt-8">
        {nodes.map(node => (
        <div key={node.frontmatter.badgeImage.name} className="flex-1">
          <div className="flex justify-center self-center">
            {displayBadge(node.frontmatter)}
          </div>
          </div>
        ))}
      </div>
  )
}

function displayBadge(frontmatter) {
  const { badgeImage, badgeAlt, badgeLink } = frontmatter

  if (!badgeImage) return null
  let image = getImage(badgeImage)

  return (
    <a href={badgeLink}>
      <GatsbyImage
        className={frontmatter.classNames}
        image={image}
        alt={badgeAlt}
      />
    </a>
  )
}
