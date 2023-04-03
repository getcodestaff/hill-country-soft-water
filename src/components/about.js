import PropTypes from "prop-types"
import React from "react"
import { Banner } from "./banner"
import threeCarruths from "../images/about-us/three-carruths.jpg"
import Judah from "../images/about-us/Judah.jpg"
import Steve from "../images/about-us/Steve.jpg"
import Micah from "../images/about-us/Micah.jpg"

const About = () => (
  <main className="site-main">
    <Banner />
    <div className="w-full p-[5%]">
      <section className="content-body lg:flex">
        <div className="m-auto w-full">
          <img className="" src={threeCarruths} alt="Micha, Steve and Judah" />
          <h5 className="text-center" id="steve-judah-title">
            Micah, Steve, and Judah
          </h5>
        </div>
        <div className="m-4 lg:flex lg:flex-col lg:justify-center lg:text-lg">
          We are a family team that has over 60 years of combined experience! We
          have a blast working with each other! We use both old and new school
          methods for the best results and value. We service Roseville, Citrus
          Heights, Rocklin, Auburn, Fair Oaks, Carmichael, El Dorado Hills,
          Folsom, Orangevale and more.
        </div>
      </section>

      <section className="content-body lg:flex">
        <div className="m-4 lg:flex lg:flex-col lg:justify-center lg:text-lg">
          Judah is the one who started our business, several years ago, while
          trying to make extra money for his young family. Judah has been in the
          trades for over 25 years learning from his dad and working side by
          side with the crew of 50 guys that his dad managed for a local
          company. He became a trades Journeyman at a young age and became a
          projects foreman in his early 20's, managing people twice his age
          while keeping projects on time and on budget without shortcuts. Judah
          is a perfectionist and is also a factory trained specialist. Judah
          insists that each project is done right the first time and that no
          corners are ever cut!
        </div>
        <div className="w-full">
          <div>
            <img className="m-auto" src={Judah} alt="Judah" />
          </div>
          <h5 className="text-center">Judah</h5>
        </div>
      </section>

      <section className="content-body lg:flex">
        <div className="w-full">
          <div>
            <img className="m-auto" src={Micah} alt="Micah" />
          </div>
          <h5 className="text-center">Micah</h5>
        </div>
        <div className="m-4 lg:flex lg:flex-col lg:justify-center lg:text-lg">
          Micah’s background is somewhat similar to Judah’s in that he began
          learning the trades from his dad and work crew. When he was just 11 he
          was introduced to plumbing by helping his dad re-plumb drain and sewer
          lines at an old house the family bought. When he was 13 he began
          helping out a family friend who had a plumbing business. Micah became
          fascinated with plumbing and its history and just LOVES IT! He has
          worked as a Journeyman plumber for over 10 years for a couple of the
          area’s largest plumbing companies. Micah believes in fair pricing, and
          excellence in the trades, and explains himself in a very professional
          and understandable manner.
        </div>
      </section>

      <section className="content-body lg:flex">
        <div className="m-4 lg:flex lg:flex-col lg:justify-center lg:text-lg">
          Steve (the dad) is Sacramento raised. Steve raised 7 kids within the
          same community he grew up in. He has been in the trades since the age
          of 13 having a natural aptitude for all things trade related. At 25 he
          went to college for engineering. He has over 50 years of trades and
          engineering experience. With the trades and engineering background,
          Steve takes special care that each project is designed and built to
          code and done with the best results possible.
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
          We are a full-service residential home repair/renovation and plumbing
          company. We hold licenses for general construction, C-36 Plumbing, and
          C-20 (HVAC). We are also bonded and insured. We take pride in our
          company on reliability, great communication, integrity, and quality
          work for a great value! Our motto is:&nbsp;
          <strong>We treat all our customers like family!</strong>
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
