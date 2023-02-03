import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

//https://stackoverflow.com/questions/68416396/gatsby-get-multiple-images-from-an-array-in-a-markdown-file

export const SampleRow = ({ nodes }) => {
  const arrayOfImages = []
  nodes.map(galleryImage => arrayOfImages.push(galleryImage))

  const altTemp = "decking" //todo add image alt to markdown and query

  return (
    <div className="flex justify-around p-6">
      {arrayOfImages.map(image => (
        <div>
          <GatsbyImage image={getImage(image)} alt={altTemp} />
        </div>
      ))}
    </div>
  )
}
