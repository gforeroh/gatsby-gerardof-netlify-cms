import React from "react";
// import React, { Component } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "./Navbar";
// import HomePage from "./Home";
// import "./all.sass";
import "./styles.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

/* eslint-disable */
const TemplateWrapper = ({ children, description, title, meta }) => {
  const {
    description: metaDescription,
    title: metaTitle,
    lang,
    author,
  } = useSiteMetadata();

  title = title || metaTitle;
  description = description || metaDescription;
  
  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${metaTitle}`}
        meta={[
          {
            name: `charset`,
            content: "utf-8",
          },
          {
            property: `http-equiv:"X-UA-Compatible"`,
            content: "IE=edge",
          },
          {
            name: `viewport`,
            content: "width=device-width, initial-scale=1",
          },
          {
            name: `theme-color`,
            content: "#fff",
          },
          {
            name: `description`,
            content: description,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:url`,
            content: "/",
          },
          {
            property: `og:image`,
            content: `${withPrefix("/")}img/og-image.jpg`,
          },
          {
            property: `og:description`,
            content: description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(meta)}
      >
        {/* 
        <meta property="og:url" content="/" /> */}
        {/* <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`}/> */}
        {/* <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} /> */}

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />
        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
      </Helmet>

      <div className="super_container">
        <Navbar />
        <>{children}</>
        {/* <HomePage /> */}
        <Footer />
      </div>
    </div>
  );
};


TemplateWrapper.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
};

TemplateWrapper.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};


export default TemplateWrapper;
