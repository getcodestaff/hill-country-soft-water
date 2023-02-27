import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export const imageLeft = (node, image) => {
  return (
    <div className="md:flex justify around md:m-10">
      <div className="w-full md:w-1/2">
        <GatsbyImage
          className="m-4 md:w-full"
          image={image}
          alt={node.frontmatter.rowImageAlt}
        />
      </div>
      <div className="w-full" dangerouslySetInnerHTML={{ __html: node.html }} />
    </div>
  )
}

export const imageRight = (node, image) => (
  <div className="md:flex justify around md:ml-0 md:mr-8">
    <div className="w-full" dangerouslySetInnerHTML={{ __html: node.html }} />
    <div className="w-full md:w-1/2">
      <GatsbyImage
        className="m-4: md:w-full"
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
