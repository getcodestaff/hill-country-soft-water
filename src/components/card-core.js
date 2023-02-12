import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CardUnderset } from "./card-underset"
import { FaArrowRight } from "react-icons/fa"
import { SwitchableLink } from "./switchable-link"

export const CardCore = ({ data }) => {

  let image = getImage(data.cardImage)
  const staticImage = image ? null : data.cardImage.publicURL

  const serviceLink = `${data.serviceLink}/`

  return (
    <div className="my-4 md:m-4">
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
          <div className="m-[6%] pb-2">
            <CardUnderset title={data.title} anchor={serviceLink}>
              <div className="text-xs h-16 text-left">
                {data.cardDescription.includes("</") ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.cardDescription }}
                  />
                ) : (
                  data.cardDescription
                )}
              </div>
            </CardUnderset>
          </div>
        </SwitchableLink>

        <SwitchableLink lnk={serviceLink}>
          <div
            className="flex justify-center my-4"
            style={{ marginTop: "auto" }}
          >
            <div className="font-semibold text-xs inline">READ MORE</div>
            <FaArrowRight
              className="inline ml-4 mr-0 text-chsblue font-bold"
              size="12px"
            />
          </div>
        </SwitchableLink>
      </div>
    </div>
  )
}
