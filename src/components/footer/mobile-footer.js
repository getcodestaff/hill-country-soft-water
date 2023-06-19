import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FooterSocial } from "./footer-social"
import { FooterAccordion } from "./footer-accordion"
import { ServicesLinks } from "./services-links"
import { ServiceAreas } from "./service-areas"
import { FooterContacts } from "./footer-contacts"
import { LayoutContext } from "../../contexts/layout-context"
import { AllServiceAreas } from "./all-service-areas"

export const MobileFooter = ({ data }) => {
  const { layout } = useContext(LayoutContext)
  const location = layout.location
  const lcState = location?.lcState

  const [areasToggle, setAreasToggle] = useState(false)

  const toggle = () => {
    setAreasToggle(!areasToggle)
  }

  return (
    <div id="mobile-footer" className="block lg:hidden m-auto">
      <div className="container m-auto">
        <FooterSocial />
        {areasToggle ? <AllServiceAreas /> : null}
        <div className="text-black mb-8 mx-4">
          <FooterAccordion>
            <h4 className="footer-title">{data.column2header}</h4>
            <ServicesLinks data={data} />
            <h4 className="footer-title">{data.column3header}</h4>
            <ServiceAreas
              data={data}
              location={location}
              showAreasToggle={toggle}
            />
            {areasToggle === true || location?.pathname?.includes(lcState) ? (
              <AllServiceAreas />
            ) : null}
            <h4 className="footer-title">{data.column4header}</h4>
            <FooterContacts data={data} />
          </FooterAccordion>
        </div>
      </div>

      <div className="">
        <Link className="text-center m-auto block pb-8" to="/">
          <StaticImage
            alt="Water Filtration San Antonio"
            src="../../images/layout/footer-logo_11_11zon.png"
            height={50}
          />
        </Link>
      </div>
    </div>
  )
}
