import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CardCore } from '../../card-core';

export const WaterFiltrationCard = () => {
	const queryResult = useStaticQuery(
		graphql`
			query {
				markdownRemark(frontmatter: { cardName: { eq: "WaterFiltrationCard" } }) {
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
