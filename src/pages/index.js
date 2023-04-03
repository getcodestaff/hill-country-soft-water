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
  const title = "Carruth Home Solutions | Residential Plumbing & Residential Construction Sacramento"
  const description = "Carruth Home Solutions is a Sacramento Residential Plumbing & Rooter Service Professional. Residential Construction Services include Decking, Pergolas, Siding, Windows, Doors & Water Filtration."
  return <Seo url={location.href} title={title} description={description} />
}

export default IndexPage
