import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Service1Card } from "./service-cards/service1-card"
import { Service2Card } from "./service-cards/service2-card"
import { Service3Card } from "./service-cards/service3-card"
import { Service4Card } from "./service-cards/service4-card"
import { Service5Card } from "./service-cards/service5-card"
import { Service6Card } from "./service-cards/service6-card"
import { Service7Card } from "./service-cards/service7-card"
import { Service8Card } from "./service-cards/service8-card"

export const Services = props => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { component: { eq: "ServiceSection" } }) {
          frontmatter {
            component
            sectionLabel
            sectionTitle
            sectionText
            contactText
            contact
          }
        }
      }
    `
  )

  const data = queryResult.markdownRemark.frontmatter

  return (
    <div id="services" className="bg-gray-200 p-8">
      <div style={{ margin: "auto" }}>
        {servicesTitle(props, data)}

        <div style={{ margin: "auto" }}>
          <div className="flex flex-col md:flex-row justify-around">
            <div className="w-full">
              <Service1Card />
            </div>
            <div className="w-full">
              <Service2Card />
            </div>
            <div className="w-full">
              <Service3Card />
            </div>
            <div className="w-full">
              <Service4Card />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around">
            <div className="w-full">
              <Service5Card />
            </div>
            <div className="w-full">
              <Service6Card />
            </div>
            <div className="w-full">
              <Service7Card />
            </div>
            <div className="w-full">
              <Service8Card />
            </div>
          </div>
          <div className="text-center mt-6">
            {data.contactText}{" "}
            <span className="text-chsblue font-semibold whitespace-nowrap">
              {data.contact}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function servicesTitle(props, data) {
  const textColor = props.cardsOnly === true ? "text-black" : "text-chsblue"

  return (
    <div className="md:px-16">
      <div className={`${textColor} text-lg font-semibold`}>
        {data.sectionLabel}
      </div>
      {props.cardsOnly === true ? null : servicesText(data)}
    </div>
  )
}

function servicesText(data) {
  ;<>
    <h1 className="section-title mt-1 mb-4 text-left">{data.sectionTitle}</h1>
    <div className="text-direction-b pb-2 space-y-8">
      <p className="m-0 text-black font-medium text-left">{data.sectionText}</p>
    </div>
  </>
}
