import React from "react"
import { Hero } from "./hero"
import { Section1 } from "./section1/section1"
import { Services } from "./services/services"
import { Stories } from "./stories/stories"
import { Badges } from "./badges"
import { QandA } from "./qanda"

export const MainTemplate = ({ title }) => {
  return (
    <React.Fragment>
      <Hero />
      <div>
        <div className="tp-caption1-wd-2 uppercase text-sm w-3/5 pt-5 m-auto">
          {title && <h1 className="text-black">{title}</h1>}
        </div>
      </div>
      <Section1 />
       <Services cardsOnly="false" />
      <Stories /> 
      <QandA />
      <Badges /> 
    </React.Fragment>
  )
}
