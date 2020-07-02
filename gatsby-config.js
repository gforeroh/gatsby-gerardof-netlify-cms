module.exports = {
  siteMetadata: {
    title: "Gatsby + Netlify CMS Starter",
    description: "This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.",
    author: `@gerardoF`,
    lang: 'es'
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/assets`,
        name: "assets",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass", "/styles.sass"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
    // {
    //   resolve: "gatsby-plugin-load-script",
    //   options: {
    //     src: `/assets/js/jquery-3.2.1.min.js`, // Change to the script filename
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-load-script",
    //   options: {
    //     src: `/assets/styles/bootstrap4/popper.js`, // Change to the script filename
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-load-script",
    //   options: {
    //     src: `/assets/styles/bootstrap4/bootstrap.min.js`, // Change to the script filename
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-load-script",
    //   options: {
    //     src: `/assets/plugins/greensock/TweenMax.min.js`,
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-load-script",
    //   options: {
    //     src: `/assets/plugins/greensock/TimelineMax.min.js`,
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-load-script",
    //   options: {
    //     src: `/assets/plugins/scrollmagic/ScrollMagic.min.js`,
    //   },
    // },
    // // {
    // //   resolve: "gatsby-plugin-load-script",
    // //   options: {
    // //     src: `/assets/plugins/greensock/animation.gsap.min.js`,
    // //   },
    // // },
    // {
    //   resolve: "gatsby-plugin-load-script",
    //   options: {
    //     src: `/assets/plugins/greensock/ScrollToPlugin.min.js`,
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-load-script",
    //   options: {
    //     src: `/assets/plugins/slick-1.8.0/slick.js`,
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-load-script",
    //   options: {
    //     src: `/assets/plugins/OwlCarousel2-2.2.1/owl.carousel.js`,
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-load-script",
    //   options: {
    //     src: `/assets/plugins/scrollTo/jquery.scrollTo.min.js`,
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-load-script",
    //   options: {
    //     src: `/assets/plugins/easing/easing.js`,
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-load-script",
    //   options: {
    //     src: `/assets/js/custom.js`,
    //   },
    // },
  ],
};
