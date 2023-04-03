import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CardUnderset } from "./card-underset"
import { FaArrowRight } from "react-icons/fa"
import { SwitchableLink } from "./switchable-link"

export const ServiceCardCore = ({ data }) => {
  let image = getImage(data.cardImage)
  const staticImage = image ? null : data.cardImage.publicURL
  const serviceLink = `${data.serviceLink}`

  return (
    <div className="my-4 lg:m-4">
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
              <div className="text-xs h-16 text-left">
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

        <div className="flex justify-around whitespace-nowrap xl:pt-4">
          <Link className="relative" to={serviceLink}>
            <div className="absolute" style={{ left: "-50px" }}>
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
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
