import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

//https://stackoverflow.com/questions/68416396/gatsby-get-multiple-images-from-an-array-in-a-markdown-file

export const SampleRow = ({ nodes, alts }) => {
  const arrayOfImages = []
  nodes.map(galleryImage => arrayOfImages.push(galleryImage))

  return (
    <div className="flex flex-col md:flex-row justify-around py-4">
      {arrayOfImages.map((image, index) => (
        <div key={image.name}>
          <GatsbyImage className="w-full my-2" image={getImage(image)} alt={alts[index]} />
        </div>
      ))}
    </div>
  )
}
