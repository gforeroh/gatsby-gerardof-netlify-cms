/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { withPrefix } from "gatsby";

function SEO({ description, lang, meta, title }) {
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
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
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
          content: site.siteMetadata.author,
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
      
      {/* <meta name="theme-color" content="#fff" />
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="/" />
      <meta property="og:image" ontent={`${withPrefix("/")}img/og-image.jpg`} /> */}

      {/* <script src={`${withPrefix("/")}assets/js/jquery-3.2.1.min.js`} type="text/javascript" />
        <script src={`${withPrefix("/")}assets/styles/bootstrap4/popper.js`} type="text/javascript" />
        <script src={`${withPrefix("/")}assets/styles/bootstrap4/bootstrap.min.js`} type="text/javascript" />
        <script src={`${withPrefix("/")}assets/plugins/greensock/TweenMax.min.js`} type="text/javascript" />
        <script src={`${withPrefix("/")}assets/plugins/greensock/TimelineMax.min.js`} type="text/javascript" />
        <script src={`${withPrefix("/")}assets/plugins/scrollmagic/ScrollMagic.min.js`} type="text/javascript" />
        <script src={`${withPrefix("/")}assets/plugins/greensock/animation.gsap.min.js`} type="text/javascript" />
        <script src={`${withPrefix("/")}assets/plugins/greensock/ScrollToPlugin.min.js`} type="text/javascript" />
        <script src={`${withPrefix("/")}assets/plugins/slick-1.8.0/slick.js`} type="text/javascript" />
        <script src={`${withPrefix("/")}assets/plugins/OwlCarousel2-2.2.1/owl.carousel.js`} type="text/javascript" />
        <script src={`${withPrefix("/")}assets/plugins/scrollTo/jquery.scrollTo.min.js`} type="text/javascript" />
        <script src={`${withPrefix("/")}assets/plugins/easing/easing.js`} type="text/javascript" /> */}
      {/* <script src={`${withPrefix("/")}assets/js/custom.js`} type="text/javascript" /> */}
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
