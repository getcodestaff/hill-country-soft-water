import React from 'react';
import { Link } from 'gatsby';

export const ServiceAreas = ({ location, classline }) => {
  let classes = `links ${classline}`

  let mapframe = ""

    if (location && location.map) {
        mapframe = (
            <iframe
                title={location.title}
                src={location.map}
                height="275"
                width="225"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
            />
    )
    } else if (location && location.city) {
        const city = location.city.replace(/ /g, '+');
        const stateAbrev = location.stateshort.replace(/ /g, '-');
        const title = `${city} ${stateAbrev}`;
        const srcString = `https://www.google.com/maps/embed/v1/place?key=AIzaSyB5RdfeHtzrauwVL7QZF3ZJ1yyMM89jzZo&q=${city}+${stateAbrev}`;

        mapframe = (
            <iframe
                title={title}
                width="225"
                height="275"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                src={srcString}
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
            {mapframe ? (
                <div>
                    <h4 className="text-white text-base uppercase">
                        {location.title} DELTA 8 STORE
                    </h4>
                    <div className="google-map-code">{mapframe}</div>
                </div>
            ) : (
                <div>
                    <div>
            <Link className={classes} to="/">
                            Citrus Heights
                        </Link>
            <Link className={classes} to="/" >
                            Folsom
                        </Link>
            <Link className={classes} to="/" >
                            El Dorado Hills
                        </Link>
            <Link className={classes} to="/" >
                            Auburn
                        </Link>
            <Link className={classes} to="/" >
                            Carmichael
                        </Link>
            <Link className={classes} to="/" >
              Fair Oaks
                        </Link>
            <Link className={classes} to="/" >
                            More...
                        </Link>                        
                    </div>
                </div>
            )}
        </React.Fragment>
  )
}
