import PropTypes from "prop-types"
import React from "react"
import { Banner } from "./banner"
import threeCarruths from "../images/about-us/three-carruths.jpg"
import Judah from "../../../images/water-softeners/hard-water-softener.webp"
import Steve from "../../../images/water-softeners/water-softener-system.webp"
import Micah from "../../../images/water-softeners/commercial-water-softener.webp"

const About = () => (
  <main className="site-main">
    <Banner />
    <div className="w-full p-[5%]">
      <section className="content-body lg:flex">
        <div className="m-auto w-full">
          <img className="" src={threeCarruths} alt="Micha, Steve and Judah" />
          <h5 className="text-center" id="steve-judah-title">
            Gaines Soft Water Serving San Antonio, Texas
          </h5>
        </div>
        <div className="m-4 lg:flex lg:flex-col lg:justify-center lg:text-lg">
         Whole House Filtration Services
        </div>
      </section>

      <section className="content-body lg:flex">
        <div className="m-4 lg:flex lg:flex-col lg:justify-center lg:text-lg">
          Drink Clean Water from your faucet.
        </div>
        <div className="w-full">
          <div>
            <img className="m-auto" src={Judah} alt="Texas Whole House Water Filters" />
          </div>
          <h5 className="text-center">Texas Whole House Water Filters</h5>
        </div>
      </section>

      <section className="content-body lg:flex">
        <div className="w-full">
          <div>
            <img className="m-auto" src={Micah} alt="San Antonio Water Company" />
          </div>
          <h5 className="text-center">San Antonio Water Company</h5>
        </div>
        <div className="m-4 lg:flex lg:flex-col lg:justify-center lg:text-lg">
          RO Systems
        </div>
      </section>

      <section className="content-body lg:flex">
        <div className="m-4 lg:flex lg:flex-col lg:justify-center lg:text-lg">
          Filter out heavy metals and contaminants.
        </div>
        <div className="w-full">
          <div>
            <img className="m-auto" src={Steve} alt="Steve" />
          </div>
          <h5 className="text-center">Steve</h5>
        </div>
      </section>
      <section>
        <div className="m-4 lg:m-16 lg:mb-0 lg:text-lg">
          Fresh, Crist Water For Your Family and Home:&nbsp;
          <strong>Don't settle for tap water!</strong>
        </div>
      </section>
    </div>
  </main>
)

About.propTypes = {
  siteTitle: PropTypes.string,
}

About.defaultProps = {
  siteTitle: ``,
}

export default About
