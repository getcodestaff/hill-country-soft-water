import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { LayoutContext } from "../../contexts/layout-context"
import { ServiceAreas } from "./service-areas.js"
import { FooterSocial } from "./footer-social.js"
import { ServicesLinks } from "./services-links.js"
import { FooterContacts } from "./footer-contacts.js"
import * as styles from "./footer.module.css"

export const DesktopFooter = ({ data, areas }) => {
  const { layout } = useContext(LayoutContext)
  const location = layout.location

  const [areasToggle, setAreasToggle] = useState(false)

  const toggle = () => {
    setAreasToggle(!areasToggle)
  }

    let image = getImage(data.logoImage)

  const colClasses = location?.map
    ? {
        col1: "w-[20%] my-2",
        col2: "w-1/7 m-2 p-2",
        col3: "w-w-1/4 overflow-hidden m-2 py-2",
        col4: "w-1/5 m-2 p-2",
      }
    : {
        col1: "w-1/4 m-2",
        col2: "w-1/4 m-2 p-2",
        col3: "w-1/4 m-2 p-2",
        col4: "w-1/4 m-2 p-2",
      }

  return (
    <React.Fragment>
      <footer className="ml-8 hidden lg:block m-auto">
        <div style={{ fontSize: "13px" }}>
        <div
            id="all-columns"
          className="flex justify-around"
          style={{ width: "100%", fontSize: "13px" }}
        >
            <div id="logo-column-1" className={colClasses.col1}>
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
                  <GatsbyImage className="mix-blend-darken" image={image} alt={data.logoAlt} />
              </nav>
            </div>
            <div className="p-6">{data.logoColumnText}</div>
            <div>
              <FooterSocial data={data} />
            </div>
          </div>

            <div id="service-links-column" className={colClasses.col2}>
            <h4 className={styles.column_title}>{data.column2header}</h4>
            <ServicesLinks data={data} classline="mt-2" />
          </div>

            <div id="service-areas-column" className={colClasses.col3}>
            <h4 className={styles.column_title}>{data.column3header}</h4>
              <ServiceAreas
                data={data}
                location={location}
                classline="mt-2"
                showAreasToggle={toggle}
              />
          </div>

            <div id="contacts-column" className={colClasses.col4}>
            <h4 className={styles.column_title}>{data.column4header}</h4>
            <FooterContacts data={data} />
          </div>
        </div>
      </div>
    </footer>

      <div id="all-service-areas">
        {areasToggle === true || location?.pathname?.includes("california") ? (
          <section id="service-areas" className="bg-white">
            <div className="mx-6 lg:mx-20 mb-4">
              <h4 className="font-bold mb-2 text-center">Service Areas</h4>
              <div className="columns-2 lg:columns-5">
                {areas.map(elem => {
                  const to = `/${elem.state_varchar_20}/${elem.city_varchar_25}`
                    .replace(/ /g, "-")
                    .toLowerCase()

                  return (
                    <Link key={elem.city_varchar_25} to={to}>
                      <div className="whitespace-no-wrap text-base">
                        {elem.city_varchar_25}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </React.Fragment>
  )
}
