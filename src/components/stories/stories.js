import React from "react"
import AngiesListLogo from "../../images/angies-list-logo.webp"
import { FaArrowRight } from "react-icons/fa"
import { Story1Card } from "./story1-card"
import { Story2Card } from "./story2-card"
import { Story3Card } from "./story3-card"

export const Stories = () => {
  return (
    <div className="text-center">
      <div className="mt-8">
        <img
          className="margin-auto"
          src={AngiesListLogo}
          alt="Angies List Logo"
        />
      </div>
      <h1 className="section-title mt-1 mb-4">
        Watch Carruth Client Success Stories
      </h1>

      <div style={{ margin: "auto" }}>
        <div className="flex justify-around px-16">
          <Story1Card />
          <Story2Card />
          <Story3Card />
        </div>
        <button className="btn-xl btn-info hero-btn bg-chsblue text-white mb-8">
          CARRUTH HOME SOLUTIONS REVIEWS
          <FaArrowRight className="inline my-2 ml-4 mr-0" size="18px" />
        </button>
      </div>
    </div>
  )
}
