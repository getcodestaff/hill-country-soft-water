import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function displayBadge(frontmatter) {
  const { badgeImage, badgeAlt, badgeLink } = frontmatter

  if (!badgeImage) return null
  let image = getImage(badgeImage)

  return (
    <a href={badgeLink}>
      <GatsbyImage image={image} alt={badgeAlt} />
    </a>
  )
}

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
    <div>
      <div className="flex flex-col md:flex-row md:justify-around md:p-16 mx-4">
        {nodes.map(node => (
          <div key={node.frontmatter.badgeImage.name} className={node.frontmatter.classNames}>
            {displayBadge(node.frontmatter)}
          </div>
        ))}
      </div>
    </div>
  )
}
