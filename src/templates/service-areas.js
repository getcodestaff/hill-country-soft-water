import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { MainTemplate } from "../components/main-template"
import { formatWithCityState } from "../components/global"

const getPageTitle = (props, data) =>
  props.herotitle_varchar_50 ||
  formatWithCityState(
    data.siteData.siteMetadata.cityKeyword,
    props.city_varchar_25,
    props.state_varchar_20
  )

export default function ServiceAreasTemplate({
  pageContext: { props },
  location,
  data,
}) {
  const shortPosts = data?.blogData?.nodes

  location.city = props.city_varchar_25
  location.stateshort = props.stateshort_varchar_2
  location.usState = props.state_varchar_20
  location.map = props.maps_varchar_250
  location.zips = props.zip_varchar_5

  const video = props.video_varchar_100 || "QDSj4Qy5IN8"

  return (
    <Layout location={location}>
      <React.Fragment>
        <MainTemplate
          title={getPageTitle(props, data)}
          city={props.city_varchar_25}
          posts={shortPosts}
          video={video}
        />
      </React.Fragment>
    </Layout>
  )
}

export const Head = ({ location, pageContext, data }) => {
  const { props } = pageContext
  const metaUrl = `${data.siteData.siteMetadata.siteUrl}/${location.pathname}`

  const title = getPageTitle(props, data)

  const desc =
    props.seodescription_varchar_250 ||
    formatWithCityState(
      data.siteData.siteMetadata.defaultSeoDescription,
      props.city_varchar_25,
      props.stateshort_varchar_2
  )

  return <Seo type="page" title={title} description={desc} url={metaUrl} />
}

export const pageQuery = graphql`
  query ServiceAreaQuery {
    siteData: site {
      siteMetadata {
        title
        description
        siteUrl
        phone
        businessName
        defaultSeoTitle
        defaultSeoDescription
        cityKeyword
      }
    }
    blogData: allWpPost(
      sort: { date: DESC }
      limit: 2
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
      }
    }
  }
`
