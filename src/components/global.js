import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export const imageLeft = (node, image) => {
  return (
    <div className="lg:flex justify around lg:m-10">
      <div className="w-full lg:w-1/2">
        <GatsbyImage
          className="m-4 lg:w-full"
          image={image}
          alt={node.frontmatter.rowImageAlt}
        />
      </div>
      <div className="w-full" dangerouslySetInnerHTML={{ __html: node.html }} />
    </div>
  )
}

export const imageRight = (node, image) => (
  <div className="lg:flex justify around lg:ml-0 lg:mr-8">
    <div className="w-full" dangerouslySetInnerHTML={{ __html: node.html }} />
    <div className="w-full lg:w-1/2">
      <GatsbyImage
        className="m-4: lg:w-full"
        image={image}
        alt={node.frontmatter.rowImageAlt}
      />
    </div>
  </div>
)

export const formatWithCityState = (message, city, state) => {
  const c = (city && state) ? city : ''
  const s = (city && state) ? state : ''

  let formattedMessage = message
    .replaceAll("$", "")
    .replaceAll("{city}", c)
    .replaceAll("{state}", s)
    .trim()

  return (city && state) 
    ? formattedMessage 
    : formattedMessage.slice(0, -3) //remove trailing punctuation
}
