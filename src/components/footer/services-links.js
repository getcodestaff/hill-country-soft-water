import React from "react"
import { Link } from "gatsby"

export const ServicesLinks = ({ classline, data }) => {
  let classes = `links ${classline}`

<<<<<<< HEAD
	return (
		<div>
			<style>
				{`
                .links {
                    display: block;
                    color:#9999a0;
                    text-decoration: none;
                }
              `}
			</style>
            <Link className={classes} to="/">Whole House Filters San Antonio</Link>
            <Link className={classes} to="/">Water Filters San Antonio</Link>
            <Link className={classes} to="/">Reverse Osmosis San Antonio</Link>
            <Link className={classes} to="/">Alkaline Water San Antonio</Link>
            <Link className={classes} to="/">Water Testing San Antonio</Link>
            <Link className={classes} to="/">Well Water Testing San Antonio</Link>
            <Link className={classes} to="/">Well Water Treatement San Antonio</Link>
            <Link className={classes} to="/">Water Softeners San Antonio</Link>
		</div>
	);
};
=======
  const services = data.column2labels.split("|")

  return (
    <div>
      <style>
        {`
            .links {
                display: block;
                color:#9999a0;
                text-decoration: none;
            }
        `}
      </style>
      {services.map(item => {
        return (
            // todo change key to itemlinks to avoid spaces in key
          <Link key={item} className={classes} to="/">
            {item}
          </Link>
        )
      })}
    </div>
  )
}
>>>>>>> dev
