import React from "react"
import { DeckingCard } from "./service-cards/decking-card"
import { BalconiesCard } from "./service-cards/balconies-card"
import { WindowsCard } from "./windows-card"
import { DoorsCard } from "./service-cards/doors-card"
import { PergolasCard } from "./service-cards/pergolas-card"
import { SidingCard } from "./siding-card"
import { PlumbingCard } from "./service-cards/plumbing-card"
import { DryRotRepairsCard } from "./service-cards/dry-rot-repairs-card"

export const Services = () => {
  return (
    <div id="services" className="bg-gray-200 p-8">
      <div style={{ margin: "auto" }}>
        <div className="px-16">
          <div className="text-chsblue text-lg font-semibold">OUR SERVICES</div>
          <h1 className="section-title mt-1 mb-4">
            Doing it well is our passion!
          </h1>
          <div className="text-direction-b pb-2 space-y-8">
            <p className="m-0 text-black font-medium">
              We provide services for pergolas, balconies, wood and composite
              decks, wood and metal railings, windows, doors, siding, dry rot
              repairs, interior and exterior renovations, water heater
              replacement and general home repairs. [rewrite to add plumbing]
            </p>
          </div>
        </div>

        <div style={{ margin: "auto" }}>
          <div className="flex justify-around">
            <DeckingCard />
            <BalconiesCard />
            <WindowsCard />
            <DoorsCard />
          </div>
          <div className="flex justify-around">
            <DryRotRepairsCard />
            <SidingCard />
            <PergolasCard />
            <PlumbingCard />
          </div>
          <div className="text-center mt-6">
            Need any help call us at{" "}
            <span className="text-chsblue font-semibold">916-257-3810</span>
          </div>
        </div>
      </div>
    </div>
  )
}
