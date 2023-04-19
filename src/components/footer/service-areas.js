import React from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"


export const ServiceAreas = ({
  location,
  classline,
  data,
  showAreasToggle,
}) => {
  let classes = `links ${classline}`

  const column3 = data.column3.elements

  let mapframe = ""

  if (location?.map) {
    mapframe = (
      <iframe
        title={location.city}
        src={location.map}
        height="275"
        width="350"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
      />
    )
  }

  return (
    <React.Fragment>
      <style>
        {`
                .links {
                    display: block;
                    color:black;
                    text-decoration: none;
                }
              `}
      </style>

      {mapframe
        ? showMap(mapframe, location?.city)
        : showLocationsColumn(column3, classes, showAreasToggle)}
    </React.Fragment>
  )
}

function showMap(mapframe, city) {
  if (mapframe)
    return (
      <div>
        <h4 className="text-black text-base uppercase">{city}</h4>
        <div className="google-map-code">{mapframe}</div>
      </div>
    )
  return null
}

function showLocationsColumn(column3, classes, showAreasToggle) {
  return (
    <div>
      <div>
        {column3.map(elem => {
          return (
            <Link key={elem.link} className={classes} to={elem.link}>
              {elem.label}
            </Link>
          )
        })}
      </div>
      <button
        className={classes}
        onClick={() => {
          scrollTo("#sitemap")
          showAreasToggle()
        }}
      >
        More...
      </button>
    </div>
  )
}
