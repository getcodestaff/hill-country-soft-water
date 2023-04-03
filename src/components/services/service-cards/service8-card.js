import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ServiceCardCore } from '../../service-card-core';

export const Service8Card = () => {
	const queryResult = useStaticQuery(
		graphql`
			query {
				markdownRemark(frontmatter: { cardName: { eq: "Service8Card" } }) {
					frontmatter {
						cardName
						title
						cardImage {
							childImageSharp {
								gatsbyImageData
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
