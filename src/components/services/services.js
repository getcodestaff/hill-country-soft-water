import React from "react"
import { DeckingCard } from "./service-cards/decking-card"
import { BalconiesCard } from "./service-cards/balconies-card"
import { WindowsCard } from "./windows-card"
import { DoorsCard } from "./service-cards/doors-card"
import { PergolasCard } from "./service-cards/pergolas-card"
import { SidingCard } from "./siding-card"
import { PlumbingCard } from "./service-cards/plumbing-card"
import { DryRotRepairsCard } from "./service-cards/dry-rot-repairs-card"

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
    <h1 className="section-title mt-1 mb-4 text-left">Doing it well is our passion!</h1>
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
            <div className="w-full"><DeckingCard /></div>
            <div className="w-full"><BalconiesCard /></div>
            <div className="w-full"><WindowsCard /></div>
            <div className="w-full"><DoorsCard /></div>
          </div>
          <div className="flex flex-col md:flex-row justify-around">
            <div className="w-full"><DryRotRepairsCard /></div>
            <div className="w-full"><SidingCard /></div>
            <div className="w-full"><PergolasCard /></div>
            <div className="w-full"><PlumbingCard /></div>
          </div>
          <div className="text-center mt-6">
            Need any help call us at{" "}
            <span className="text-chsblue font-semibold whitespace-nowrap">916-257-8310</span>
          </div>
        </div>
      </div>
    </div>
  )
}
