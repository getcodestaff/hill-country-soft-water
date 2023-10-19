import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MetadataQuery from "../components/metadata-query"
import { Service4 } from "../components/services/service-pages/service4"

const HardWaterFiltersPage = ({ location }) => (
  <Layout location={location}>
    <Service4 />
  </Layout>
)

export const Head = ({ location }) => {
  const {defaultCity, defaultState} = MetadataQuery().site.siteMetadata

  const title = `Hard Water Filters Water Starter ${defaultCity}, ${defaultState} | Hill Country Soft Water ${defaultCity}`
  const description = `Hard Water Filters Water Starter ${defaultCity}, ${defaultState} | Hill Country Soft Water ${defaultCity}`

  return <Seo url={location.href} title={title} description={description} />
}

export default HardWaterFiltersPage
