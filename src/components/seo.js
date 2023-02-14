/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import favicon from '../images/favicon.ico'

function Seo({
    title,
    description,
    url,
    type,
    // amount,
    // image,
    // secure_url
}) {
    // console.log('seo title: ', title );
    // console.log('seo description: ', description );

    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    const seo = {
        defaultTitle: site.siteMetadata?.title,
        metaTitle: title || site.siteMetadata?.title,
        metaDescription: description || site.siteMetadata.description,
        metaType: type || 'page',
        metaUrl: url || 'https://chsforme.com/',
        // metaSecureUrl: secure_url || image
    };

    return (
        <>
            <link rel="icon" href={favicon} />
            <title>{seo.metaTitle}</title>
            <meta name="title" content={seo.metaTitle} />
            <meta name="description" content={seo.metaDescription} />
            {/* <meta property="og:site_name" content={`Delta 8 Gummies`} />
            <meta property="og:url" content={seo.metaUrl} />
            <meta property="og:title" content={seo.metaTitle} />
            <meta property="og:description" content={seo.metaDescription} />
            <meta property="og:type" content={seo.metaType} />
            <meta property="og:price:amount" content={seo.metaAmount} />
            <meta property="og:price:currency" content="USD" />
            <meta property="og:image" content={image} />
            <meta property="og:image:secure_url" content={seo.metaSecureUrl} />
            <meta name="twitter:site" content={seo.metaDescription} />
            <meta name="twitter:site" content="@delta8edible" />
            <meta name="twitter:creator" content="@delta8edible" />
            <meta name="twitter:title" content={seo.metaTitle} />
            <meta name="twitter:description" content={seo.metaDescription} />
            <meta name="twitter:card" content="summary" />
            <meta property="msvalidate.01" content="D048CE80725ED64F9ACE12EEEDE36A61" /> */}
        </>
    );
}

Seo.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``
};

Seo.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    amount: PropTypes.string,
    image: PropTypes.string,
    secure_url: PropTypes.string
};

export default Seo;
