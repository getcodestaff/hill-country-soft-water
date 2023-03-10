import React from "react"
import { Hero } from "./hero"
import { Section1 } from "./section1/section1"
import { Services } from "./services/services"
import { Stories } from "./stories/stories"
import { Badges } from "./badges"

export const MainTemplate = () => {
  return (
    <React.Fragment>
      <Hero />
      <Section1 />
      <Services cardsOnly="false" />
      <Stories />
      <Badges />
    </React.Fragment>
  )
}
