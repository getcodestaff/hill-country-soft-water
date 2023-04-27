import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Service8 } from "../components/services/service-pages/service8"

const WellWaterPage = ({ location }) => (
  <Layout location={location}>
    <Service8 />
  </Layout>
)

export const Head = ({ location }) => {
  const title = "Well Water Filtration Systems San Antonio, TX | Since 1989"
  const description = "Well Water Filtration Systems San Antonio, TX. Serving the local residents of San Antonio Since 1989. Whole House Filtration for Well Water and Well RO system maintenance, repair."
  return <Seo url={location.href} title={title} description={description} />
}

export default WellWaterPage
