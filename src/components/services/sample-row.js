import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

//https://stackoverflow.com/questions/68416396/gatsby-get-multiple-images-from-an-array-in-a-markdown-file

export const SampleRow = ({ nodes, alts }) => {
  const arrayOfImages = []
  nodes.map(galleryImage => arrayOfImages.push(galleryImage))

  return (
    <div className="flex justify-around py-8">
      {arrayOfImages.map((image, index) => (
        <div key={image.name}>
          <GatsbyImage image={getImage(image)} alt={alts[index]} />
        </div>
      ))}
    </div>
  )
}
