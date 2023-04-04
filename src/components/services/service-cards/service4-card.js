import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ServiceCardCore } from '../../service-card-core';

export const Service4Card = () => {
	const queryResult = useStaticQuery(
		graphql`
			query {
				markdownRemark(frontmatter: { cardName: { eq: "Service4Card" } }) {
					frontmatter {
						cardName
						title
						cardImage {
							childImageSharp {
								gatsbyImageData(layout: FULL_WIDTH)
							}
							publicURL
						}
                        cardImageAlt
                        serviceLink
                        cardDescription
					}
				}
			}
		`
	);

	return (
		<ServiceCardCore data={queryResult.markdownRemark.frontmatter} />
	);	
};
