import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CardUnderset } from "./card-underset"
import { SwitchableLink } from "./switchable-link"

export const StoryCardCore = ({ data }) => {
  let image = getImage(data.cardImage)
  const staticImage = image ? null : data.cardImage.publicURL
  const serviceLink = `${data.serviceLink}`

  return (
    <div className="my-4 m-auto max-w-sm md:max-w-md">
      <div className="flex flex-col card bg-white curved">
        <SwitchableLink lnk={serviceLink}>
          {image ? (
            <GatsbyImage
              className="curved w-full"
              objectFit="contain"
              image={image}
              alt={data.cardImageAlt}
            />
          ) : (
            <img className="curved" src={staticImage} alt={data.cardImageAlt} />
          )}
        </SwitchableLink>

        <SwitchableLink lnk={serviceLink}>
          <div className="m-0 py-2">
            <CardUnderset title={data.title} anchor={serviceLink}>
              <div className="text-xs sm:text-sm h-16 text-left">
                {data.cardDescription.includes("</") ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.cardDescription,
                    }}
                  />
                ) : (
                  data.cardDescription
                )}
              </div>
            </CardUnderset>
          </div>
        </SwitchableLink>
      </div>
    </div>
  )
}
