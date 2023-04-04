import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { MainTemplate } from "../components/main-template"

export default function ServiceAreasTemplate({
  pageContext: { props },
  location,
}) {

  location.city = props.city_varchar_25
  location.stateshort = props.stateshort_varchar_2
  location.map = props.maps_varchar_250

  return (
    <Layout location={location}>
      <React.Fragment>
        <MainTemplate title={props.herotitle_varchar_50}/>
      </React.Fragment>
    </Layout>
  )
}

export const Head = ({ location, pageContext, data }) => {

  const { props } = pageContext
  const metaUrl = `${data.site.siteMetadata.siteUrl}/${location.pathname}`

  return (
    <Seo
      type="page"
      title={props.seotitle_varchar_100}
      description={props.seodescription_varchar_200}
      url={metaUrl}
    />
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
        phone
        businessName
      }
    }
  }
`
