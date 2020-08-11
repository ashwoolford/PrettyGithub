import React from 'react';
import NextHead from 'next/head';
import PropTypes from 'prop-types';

const defaultTitle = 'OctoProfile';
const defaultDescription = 'A nicer look at your GitHub profile. With charts!';
const defaultOGURL = 'https://pretty-github.vercel.app/';
const defaultOGImage = 'https://firebasestorage.googleapis.com/v0/b/bookmine-e4310.appspot.com/o/images%2FScreenshot%202020-08-11%20at%202.18.55%20AM.png?alt=media&token=e5c1b3de-466f-4662-8360-eb7c19947532';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || defaultTitle}</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/static/favicons/favicon.ico" />
    <link rel="apple-touch-icon" sizes="120x120" href="/static/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
    <link rel="manifest" href="/static/favicons/site.webmanifest" />
    <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#1A1E22" />
    <meta name="msapplication-TileColor" content="#1A1E22" />
    <meta name="theme-color" content="#0070f3" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || defaultTitle} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  ogImage: PropTypes.string,
};

export default Head;
