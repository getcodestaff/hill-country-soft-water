import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BasicAccordion } from "./basic-accordion"
import { LayoutContext } from "../contexts/layout-context"

let city = ""
let shortState = ""
let usState = ""

const formatMessage = (message) => {
    return message
      .replaceAll("$", "")
      .replaceAll("{city}", city)
      .replaceAll("{shortState}", shortState)      
      .replaceAll("{state}", usState)
      .trim()
  }


const renderAnswer = answer => {
  const answers = answer.split("|")
  return (
    <div>
      {answers.map((answer, index) => {

        const classname = (index === 0) ? "text-lg" : "text-lg pt-2"
        return <p className={classname} key={index}>{formatMessage(answer)}</p>
      })}
    </div>
  )
}

export const QandA = ({ title }) => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { component: { eq: "qanda" } }) {
          frontmatter {
            component
            defaultCity
            defaultShortState
            defaultState
            content {
              title
              questions
              answers
            }
          }
        }
      }
    `
  )
  const content = queryResult.markdownRemark.frontmatter.content

  const { layout } = useContext(LayoutContext)
  const location = layout.location

  city = location?.city || queryResult.markdownRemark.frontmatter.defaultCity
  shortState = location?.stateshort || queryResult.markdownRemark.frontmatter.defaultShortState
  usState = location?.usState || queryResult.markdownRemark.frontmatter.defaultState

  return (
    <div className="bg-gray-100 py-4">
      <div
        className="faqs-related js-view-dom-id-d1e03f3f3dc0eb2f68d0877aeda0184fb2b163e9928e863bb4bc5e2913e933da"
        itemScope=""
        itemType="https://schema.org/FAQPage"
      >
        <div className="font-bold text-center text-4xl mt-6">
          {content.title}
        </div>

        {/* assumes the same number of questions and answers */}
        {content.questions.map((question, index) => {
          const about = `/node/${index}`
          return (
            <div className="views-row" key={about}>
              <BasicAccordion>
                <div
                  role="article"
                  about={about}
                  data-accordion=""
                  data-allow-all-closed="true"
                  itemScope=""
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <div
                    className="font-bold cursor-pointer text-center mt-6"
                    itemProp="name"
                  >
                    <p className="text-2xl">{formatMessage(question)}</p>
                  </div>
                  <div
                    className="faq-list__item-answer"
                    style={{ width: "70%", margin: "0 auto" }}
                    data-tab-content=""
                    itemScope=""
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text">
                      {renderAnswer(content.answers[index])}
                    </div>
                  </div>
                </div>
              </BasicAccordion>
            </div>
          )
        })}
      </div>
    </div>
  )
}
