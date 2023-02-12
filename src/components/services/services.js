import React from "react"
import { Service1Card } from "./service-cards/service1-card"
import { Service2Card } from "./service-cards/service2-card"
import { Service3Card } from "./service-cards/service3-card"
import { Service4Card } from "./service-cards/service4-card"
import { Service5Card } from "./service-cards/service5-card"
import { Service6Card } from "./service-cards/service6-card"
import { Service7Card } from "./service-cards/service7-card"
import { Service8Card } from "./service-cards/service8-card"

const servicesTitle = props => {
  const textColor = props.imagesOnly === true ? "text-black" : "text-chsblue"

  return (
    <div className="md:px-16">
      <div className={`${textColor} text-lg font-semibold`}>OUR SERVICES</div>
      {props.imagesOnly === true ? null : servicesText()}
    </div>
  )
}

const servicesText = () => (
  <>
    <h1 className="section-title mt-1 mb-4 text-left">
      Doing it well is our passion!
    </h1>
    <div className="text-direction-b pb-2 space-y-8">
      <p className="m-0 text-black font-medium text-left">
        We provide services for pergolas, balconies, wood and composite decks,
        wood and metal railings, windows, doors, siding, dry rot repairs,
        interior and exterior renovations, water heater replacement and general
        home repairs. [rewrite to add plumbing]
      </p>
    </div>
  </>
)

export const Services = props => {
  return (
    <div id="services" className="bg-gray-200 p-8">
      <div style={{ margin: "auto" }}>
        {servicesTitle(props)}

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
            Need any help call us at{" "}
            <span className="text-chsblue font-semibold whitespace-nowrap">
              916-257-8310
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
