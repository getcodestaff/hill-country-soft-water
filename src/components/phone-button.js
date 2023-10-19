// react arrow functional component
import React, { useContext } from "react"
import { LayoutContext } from "../contexts/layout-context"
import { FaPhone } from "react-icons/fa"

export const PhoneButton = () => {
  const { layout } = useContext(LayoutContext)
  const { phone } = layout.siteMetadata
  const telPhone = `tel:${phone}`

  return (
    <div className="lg:flex justify-center mt-8 text-center">
      <div className="lg:flex justify-center pb-2">
        <a href={telPhone} className="submit-button bg-chsblue">
          <span className="whitespace-nowrap flex my-2">
            <FaPhone size="20px" />
            <span className="ml-4">{phone}</span>
          </span>
        </a>
      </div>
    </div>
  )
}
