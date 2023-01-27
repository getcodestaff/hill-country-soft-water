import React from 'react';
import { Link } from 'gatsby';

export const ServicesLinks = ({ classline }) => {
	let classes = `links ${classline}`;

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
            <Link className={classes} to="/">Decksing</Link>
            <Link className={classes} to="/">Balconies</Link>
            <Link className={classes} to="/">Windows</Link>
            <Link className={classes} to="/">Doors</Link>
            <Link className={classes} to="/">Dry Rot Repairs</Link>
            <Link className={classes} to="/">Siding</Link>
            <Link className={classes} to="/">Pergolas</Link>
            <Link className={classes} to="/">Plumbing</Link>
		</div>
	);
};
