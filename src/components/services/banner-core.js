import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./service.module.css"

export const BannerCore = ({ data }) => {
  const image = getImage(data.featuredImage)

  return (
    <React.Fragment>
      <div className="relative text-center bg-gray-200">
        <GatsbyImage image={image} alt="Sacramento eCommerce Developer" />

        <div className={`w-[90%] lg:w-1/2 p-caption1-wd-2 ${styles.title}`}>
          <div style={{ color: data.textColor }}>
            <div className="tp-caption1-wd-2">{data.title}</div>
            <div className="hidden md:block text-base font-semibold lg:text-sm">
              {data.text}
            </div>
          </div>
        </div>
      </div>
      <p className="md:hidden pt-4">{data.text}</p>
    </React.Fragment>
  )
}
