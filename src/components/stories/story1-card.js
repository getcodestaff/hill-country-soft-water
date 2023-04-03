import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StoryCardCore } from '../story-card-core';

export const Story1Card = () => {
	const queryResult = useStaticQuery(
		graphql`
			query {
				markdownRemark(frontmatter: { cardName: { eq: "Story1Card" } }) {
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
		<StoryCardCore data={queryResult.markdownRemark.frontmatter} />
	);	
};
