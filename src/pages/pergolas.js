import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Pergolas } from "../components/services/service-pages/pergolas"

const PergolasPage = ({ location }) => (
  <Layout location={location}>
    <Pergolas />
  </Layout>
)

export const Head = ({ location }) => {
  return <Seo url={location.href} />
}

export default PergolasPage
