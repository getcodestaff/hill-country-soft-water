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
  const title = "Water Softener San Antonio Since 1989 | Whole House Water Filtration San Antonio, TX"
  const description = "Water Softeners in  San Antonio Since 1989. Installation and Service of Water Softener Systems in San Antonio, Texas for 30+ Years. Whole House Water Filtration System San Antonio Texas."
  return <Seo url={location.href} title={title} description={description} />
}

export default IndexPage
