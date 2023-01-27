import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { MainTemplate } from "../components/main-template"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <MainTemplate />
  </Layout>
)

export const Head = ({ location }) => {
  return <Seo url={location.href} />
}

export default IndexPage
