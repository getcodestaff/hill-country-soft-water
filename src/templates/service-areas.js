import React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import Seo from "../components/seo"
import { MainTemplate } from "../components/main-template"

export default function ServiceAreasTemplate({
  pageContext: { props },
  location,
}) {

  const cityCommaState = `${props.city_varchar_25}, ${props.stateshort_varchar_2}`

  location.city = props.city_varchar_25
  location.stateshort = props.stateshort_varchar_2

  return (
    <Layout location={location}>
      <React.Fragment>
        <MainTemplate cityState={cityCommaState} />
      </React.Fragment>
    </Layout>
  )
}

export const Head = ({ location, pageContext, data }) => {
  const { props } = pageContext
  const cityState = `${props.city_varchar_25}, ${props.stateshort_varchar_2}`
  const metaUrl = `${data.site.siteMetadata.siteUrl}/${location.pathname}`

  const title = `${data.site.siteMetadata.title} serving ${cityState}`
  const description = `${data.site.siteMetadata.description} in ${cityState}`

  return (
    <Seo type="page" title={title} description={description} url={metaUrl} />
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
`;
