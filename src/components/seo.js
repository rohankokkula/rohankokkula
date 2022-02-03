import Head from 'next/head';

const SEO = ({ title }) => {
    return (
        <Head>
            <title>{`Botpress | ${title}`}</title>
            {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:site" content={metaTitle} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content={metaTitle} />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={metaDescription} />
            <meta name="og:type" content="website" />
            <meta name="og:site_name" content={metaTitle} />
            <meta name="og:image" content={image} />
            <meta name="description" content={metaDescription} />
            <meta name="robots" content={noIndex ? 'noindex' : ''} /> */}
            {/* Favicon */}
            <link rel="icon" type="image/jpg" sizes="32x32" href="/favicon.jpg" />
        </Head>
    );
};

export default SEO;
