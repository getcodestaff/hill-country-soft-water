import React, { useContext } from "react"
import { LayoutContext } from "../../contexts/layout-context"

export const FooterContacts = ({ data }) => {
  const { layout } = useContext(LayoutContext)

  return (
    <div>
      <div className="whitespace-nowrap mt-2 font-bold text-chsblue">
        {layout.siteMetadata.businessName}
      </div>
      <div className="whitespace-nowrap mt-2">{data.addressLine1}</div>
      <div className="whitespace-nowrap mt-2">
        {data.addressCsz}
        <div className="whitespace-nowrap mt-2 font-semibold">
          {layout.siteMetadata.phone}
        </div>
        <div className="whitespace-nowrap mt-2 font-semibold">{data.email}</div>
      </div>
    </div>
  )
}
