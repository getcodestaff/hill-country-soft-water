import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Service1 } from "../components/services/service-pages/service1"

const DeckingPage = ({ location }) => (
  <Layout location={location}>
    <Service1 />
  </Layout>
)

export const Head = ({ location }) => {
  return <Seo url={location.href} />
}

export default DeckingPage
