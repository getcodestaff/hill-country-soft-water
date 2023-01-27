import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CardUnderset } from "./card-underset"
import { FaArrowRight } from "react-icons/fa"
import { SwitchableLink } from "./switchable-link"

export const CardCore = ({ data }) => {
console.log('CardCord data: ', data)

  let image = getImage(data.cardImage)
  const staticImage = image ? null : data.cardImage.publicURL

  const serviceLink = `${data.serviceLink}/`

  return (
    <div className="flex w-[23%] m-4 flex-col">
      <div className="flex flex-col h-[100%] card bg-white curved">
        <SwitchableLink lnk={serviceLink}>
          {image ? (
            <GatsbyImage
              className="curved"
              image={image}
              alt={data.cardImageAlt}
            />
          ) : (
            <img className="curved" src={staticImage} alt={data.cardImageAlt} />
          )}
        </SwitchableLink>

        <SwitchableLink lnk={serviceLink}>
          <div className="m-[6%]">
            <CardUnderset title={data.title} anchor={serviceLink}>
              <p className="text-xs h-16">{data.cardDescription}</p>
            </CardUnderset>
          </div>
        </SwitchableLink>

        <SwitchableLink lnk={serviceLink}>
          <div className="flex-none margin-auto pb-4">
            <h4 className="font-semibold text-xs inline">READ MORE</h4>
            <FaArrowRight
              className="inline my-2 ml-4 mr-0 text-chsblue font-bold"
              size="12px"
            />
          </div>
        </SwitchableLink>
      </div>
    </div>
  )
}
