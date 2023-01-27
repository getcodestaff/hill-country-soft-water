import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Decking } from "../components/services/service-pages/decking"

const DeckingPage = ({ location }) => (
  <Layout location={location}>
    <Decking />
  </Layout>
)

export const Head = ({ location }) => {
  return <Seo url={location.href} />
}

export default DeckingPage
