import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const Contractor = data => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        allFile(filter: {name: {eq: "contractor_6_11zon"}}) {
            nodes {
              name
              childImageSharp {
                gatsbyImageData(webpOptions: {quality: 100})
              }
            }
          }
      }
    `
  )

  let image = getImage(queryResult.allFile.nodes[0])

  return (
    <>
      <GatsbyImage image={image} alt="Link to Angies List Reviews" />
    </>
  )
}
