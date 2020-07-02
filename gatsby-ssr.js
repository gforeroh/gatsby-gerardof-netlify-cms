/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react";

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="/assets/js/jquery-3.2.1.min.js"
      src="/assets/js/jquery-3.2.1.min.js"
      type="text/javascript"
    />,

    <script
      key="/assets/styles/bootstrap4/popper.js" // Change to the script filename
      src="/assets/styles/bootstrap4/popper.js" // Change to the script filename
      type="text/javascript"
    />,

    <script
      key="/assets/styles/bootstrap4/bootstrap.min.js" // Change to the script filename
      src="/assets/styles/bootstrap4/bootstrap.min.js" // Change to the script filename
      type="text/javascript"
    />,

    <script
      key="/assets/plugins/greensock/TweenMax.min.js"
      src="/assets/plugins/greensock/TweenMax.min.js"
      type="text/javascript"
    />,

    <script
      key="/assets/plugins/greensock/TimelineMax.min.js"
      src="/assets/plugins/greensock/TimelineMax.min.js"
      type="text/javascript"
    />,

    <script
      key="/assets/plugins/scrollmagic/ScrollMagic.min.js"
      src="/assets/plugins/scrollmagic/ScrollMagic.min.js"
      type="text/javascript"
    />,

    <script
      key="/assets/plugins/greensock/ScrollToPlugin.min.js"
      src="/assets/plugins/greensock/ScrollToPlugin.min.js"
      type="text/javascript"
    />,

    <script
      key="/assets/plugins/slick-1.8.0/slick.js"
      src="/assets/plugins/slick-1.8.0/slick.js"
      type="text/javascript"
    />,

    <script
      key="/assets/plugins/OwlCarousel2-2.2.1/owl.carousel.js"
      src="/assets/plugins/OwlCarousel2-2.2.1/owl.carousel.js"
      type="text/javascript"
    />,

    <script
      key="/assets/plugins/scrollTo/jquery.scrollTo.min.js"
      src="/assets/plugins/scrollTo/jquery.scrollTo.min.js"
      type="text/javascript"
    />,

    <script
      key="/assets/plugins/easing/easing.js"
      src="/assets/plugins/easing/easing.js"
      type="text/javascript"
    />,

    <script
      key="/assets/js/custom.js"
      src="/assets/js/custom.js"
      type="text/javascript"
    />,
  ]);
};