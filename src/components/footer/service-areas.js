import React from "react"
import { Link } from "gatsby"

export const ServiceAreas = ({
  location,
  classline,
  data,
  showAreasToggle,
}) => {
  let classes = `links ${classline}`

  const areas = data.column3labels.split("|")
  const areaLinks = data.column3links.split("|")

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
        : showLocationsColumn(areas, areaLinks, classes, showAreasToggle)}
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

function showLocationsColumn(areas, areaLinks, classes, showAreasToggle) {
  return (
    <div>
      <div>
        {areas.map((area, index) => {
          const to = `/california/${areaLinks[index].trim()}`
          return (
            <Link key={to} className={classes} to={to}>
              {area}
            </Link>
          )
        })}
      </div>
      <button
        className={classes}
        onClick={() => {
          showAreasToggle()
        }}
      >
        More...
      </button>
    </div>
  )
}
