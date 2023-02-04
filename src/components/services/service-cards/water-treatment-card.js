import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CardCore } from '../../card-core';

export const WaterTreatmentCard = () => {
	const queryResult = useStaticQuery(
		graphql`
			query {
				markdownRemark(frontmatter: { cardName: { eq: "WaterTreatmentCard" } }) {
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
		<CardCore data={queryResult.markdownRemark.frontmatter} />
	);	
};
