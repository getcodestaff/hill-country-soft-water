import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Service3 } from "../components/services/service-pages/service3"

const ReverseOsmosisPage = ({ location }) => (
  <Layout location={location}>
    <Service3 />
  </Layout>
)

export const Head = ({ location }) => {
    const title = "Sacramento Deck Installation | Decking in Sacramento"
    const description = "Sacramento Deck Installation | Decking in Sacramento"
    return <Seo url={location.href} title={title} description={description} />
  }

export default ReverseOsmosisPage
