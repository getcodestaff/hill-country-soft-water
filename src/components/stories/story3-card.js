import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CardCore } from '../card-core';

export const Story3Card = () => {
	const queryResult = useStaticQuery(
		graphql`
			query {
				markdownRemark(frontmatter: { cardName: { eq: "Story3Card" } }) {
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
