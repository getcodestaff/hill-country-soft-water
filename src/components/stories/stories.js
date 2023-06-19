import React from "react"
import AngiesListLogo from "../../images/google-review.webp"
import { FaArrowRight } from "react-icons/fa"
import { Story1Card } from "./story1-card"
import { Story2Card } from "./story2-card"
import { Story3Card } from "./story3-card"

export const Stories = () => {
  return (
    <div className="text-center">
      <div className="mt-8">
        <img
          className="m-auto"
          src={AngiesListLogo}
          alt="Google Water Softener Reviews"
        />
      </div>
      <h1 className="section-title mt-1 mb-4">
        Water Softener Success Stories
      </h1>

      <div style={{ margin: "auto" }}>
        <div className="flex flex-col lg:flex-row justify-around px-8 lg:px-16">
          <Story1Card />
          <Story2Card />
          <Story3Card />
        </div>
        <a
          href="https://watersoftenersanantonio.co/water-filtration/"
          className="mb-0 mt-4 text-xs lg:text-xl btn-xl btn-info hero-btn bg-chsblue text-white mb-8"
        >
          WATER FILTRATION
          <FaArrowRight className="inline my-2 ml-4 mr-0" />
        </a>
      </div>
    </div>
  )
}

