import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import favicon from '../images/favicon.ico'

/*
url: url of the page (content)
image: url of the image
*/
function Seo({
    title,
    description,
    url,
    type,
    image,
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

            {/* https://ogp.me/ basic Metadata  */}
            {/* see also https://ahrefs.com/blog/open-graph-meta-tags/ */}
            <meta property="og:title" content={seo.metaTitle} />
            <meta property="og:type" content={seo.metaType} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={seo.metaUrl} /> 
            {/* The URL of the content. */}

            {/* og optional Metatdata */}
            <meta property="og:site_name" content={`Carruth Home Solutions`} />
            <meta property="og:description" content={seo.metaDescription} />

            {/* structured properties */}
            {/* og:image:url - Identical to og:image.
            og:image:secure_url - An alternate url to use if the webpage requires HTTPS.
            og:image:alt - A description of what is in the image (not a caption). 
            If the page specifies an og:image it should specify og:image:alt. */}
            <meta property="og:image:secure_url" content={seo.metaSecureUrl} />

            <meta name="twitter:site" content="@HomeCarruth" />
            <meta name="twitter:creator" content="@HomeCarruth" />
            <meta name="twitter:title" content={seo.metaTitle} />
            <meta name="twitter:description" content={seo.metaDescription} />
            <meta name="twitter:card" content="summary" />
            {/* <meta property="msvalidate.01" content="D048CE80725ED64F9ACE12EEEDE36A61" /> */}
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
