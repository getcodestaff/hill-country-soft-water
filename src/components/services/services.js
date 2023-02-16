import React from "react"
<<<<<<< HEAD
import { WaterSoftenersCard } from "./service-cards/water-softeners-card"
import { WaterFiltrationCard } from "./service-cards/water-filtration-card"
import { ReverseOsmosisCard } from "./service-cards/reverse-osmosis-card"
import { HardWaterFiltersCard } from "./service-cards/hard-water-filters-card"
import { WaterTestingCard } from "./service-cards/water-testing-card"
import { WaterTreatmentCard } from "./service-cards/water-treatment-card"
import { HouseWaterFiltersCard } from "./siding-card"
import { WaterWellSystemsCard } from "./service-cards/plumbing-card"

const servicesTitle = props => {
  const textColor = props.imagesOnly === true ? "text-black" : "text-chsblue"

  return (
    <div className="md:px-16">
      <div className={`${textColor} text-lg font-semibold`}>IN BUSINESS FOR OVER 50 YEARS!</div>
      {props.imagesOnly === true ? null : servicesText()}
    </div>
  )
}

const servicesText = () => (
  <>
    <h1 className="section-title mt-1 mb-4 text-left">
      San Antonio Whole House Water Filtration Systems
    </h1>
    <div className="text-direction-b pb-2 space-y-8">
      <p className="m-0 text-black font-medium text-left">
        Whole House Water Filtration Experts in San Antonio. If you are having problem with
        the tase or smell of the water in your home we are here to help. Finding the right 
        Water Softener in San Antonio can be tricky. The water systems in an around the san antonio
        area provide different concerns so not every system is adequate for that particlar case. Give
        us a call and we will be glad to point you in the right direction.
      </p>
    </div>
  </>
)
=======
import { useStaticQuery, graphql } from "gatsby"
import { Service1Card } from "./service-cards/service1-card"
import { Service2Card } from "./service-cards/service2-card"
import { Service3Card } from "./service-cards/service3-card"
import { Service4Card } from "./service-cards/service4-card"
import { Service5Card } from "./service-cards/service5-card"
import { Service6Card } from "./service-cards/service6-card"
import { Service7Card } from "./service-cards/service7-card"
import { Service8Card } from "./service-cards/service8-card"
>>>>>>> dev

export const Services = props => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { component: { eq: "ServiceSection" } }) {
          frontmatter {
            component
            sectionLabel
            sectionTitle
            sectionText
            contactText
            contact
          }
        }
      }
    `
  )

  const data = queryResult.markdownRemark.frontmatter

  return (
    <div id="services" className="bg-gray-200 p-8">
      <div style={{ margin: "auto" }}>
        {servicesTitle(props, data)}

        <div style={{ margin: "auto" }}>
          <div className="flex flex-col md:flex-row justify-around">
            <div className="w-full">
              <Service1Card />
            </div>
            <div className="w-full">
              <Service2Card />
            </div>
            <div className="w-full">
              <Service3Card />
            </div>
            <div className="w-full">
              <Service4Card />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around">
            <div className="w-full">
              <Service5Card />
            </div>
            <div className="w-full">
              <Service6Card />
            </div>
            <div className="w-full">
              <Service7Card />
            </div>
            <div className="w-full">
              <Service8Card />
            </div>
          </div>
          <div className="text-center mt-6">
            {data.contactText}{" "}
            <span className="text-chsblue font-semibold whitespace-nowrap">
<<<<<<< HEAD
              210-635-7418
=======
              {data.contact}
>>>>>>> dev
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function servicesTitle(props, data) {
  const textColor = props.cardsOnly === true ? "text-black" : "text-chsblue"

  return (
    <div className="md:px-16">
      <div className={`${textColor} text-lg font-semibold`}>
        {data.sectionLabel}
      </div>
      {props.cardsOnly === true ? null : servicesText(data)}
    </div>
  )
}

function servicesText(data) {
  ;<>
    <h1 className="section-title mt-1 mb-4 text-left">{data.sectionTitle}</h1>
    <div className="text-direction-b pb-2 space-y-8">
      <p className="m-0 text-black font-medium text-left">{data.sectionText}</p>
    </div>
  </>
}
