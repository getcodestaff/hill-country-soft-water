import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { ServiceAreas } from "./service-areas.js"
import { FooterSocial } from "./footer-social.js"
import { ServicesLinks } from "./services-links.js"
import { FooterContacts } from "./footer-contacts.js"
import * as styles from "./footer.module.css"

export const DesktopFooter = ({ location, data }) => {

    let image = getImage(data.logoImage)

  return (
    <footer className="footer-background ml-8 hidden md:block">
      <div className="display-n" style={{ fontSize: "13px" }}>
        <div
          className="flex justify-around"
          style={{ width: "100%", fontSize: "13px" }}
        >
          <div className="w-1/4 m-2">
            <div>
              <nav className="container navbar navbar-expand-lg navbar-dark pl-6">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapsibleNavbar"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <GatsbyImage image={image} alt={data.logoAlt} />

<<<<<<< HEAD
                <StaticImage
                  alt="logo"
                  src="https://www.gaines-softwater.com/wp-content/uploads/2016/10/static1.squarespace.com_.png"
                  width={190}
                />
              </nav>
            </div>
            <div className="p-6">We have been proving the San Antonio Texas Area with Clean Drinking Options
            for Over 50 Years. We love providing clean water and we tank you for allowing us ot do it. We strive
            to maintain the highest standards for Water Purity in our Drinking Water.</div>
=======
              </nav>
            </div>
            <div className="p-6">{data.logoColumnText}</div>
>>>>>>> dev
            <div>
              <FooterSocial data={data} />
            </div>
          </div>

          <div className="w-1/4 m-2 p-2">
            <h4 className={styles.column_title}>{data.column2header}</h4>
            <ServicesLinks data={data} classline="mt-2" />
          </div>
          <div className="w-1/4 m-2 p-2">
            <h4 className={styles.column_title}>{data.column3header}</h4>
            <ServiceAreas data={data} location={location} classline="mt-2" />
          </div>
          <div className="w-1/4 m-2 p-2">
            <h4 className={styles.column_title}>{data.column4header}</h4>
            <FooterContacts data={data} />
          </div>
        </div>
      </div>
    </footer>
  )
}
