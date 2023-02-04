import React from "react"
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
              <WaterSoftenersCard />
            </div>
            <div className="w-full">
              <WaterFiltrationCard />
            </div>
            <div className="w-full">
              <ReverseOsmosisCard />
            </div>
            <div className="w-full">
              <HardWaterFiltersCard />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around">
            <div className="w-full">
              <WaterTestingCard />
            </div>
            <div className="w-full">
              <WaterTreatmentCard />
            </div>
            <div className="w-full">
              <HouseWaterFiltersCard />
            </div>
            <div className="w-full">
              <WaterWellSystemsCard />
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
