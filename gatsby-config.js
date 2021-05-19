module.exports = {
  siteMetadata: {
    title: `metarules`,
    description: `Free online resources on AI, Analytics, Big Data, Data Science, Machine Learning, Statistics and related topics. We at metarules are on a mission to share and make data skills and other interesting resources accessible for learners and beginners everywhere.`,
    author: `Varun SriVathsa`,
    siteUrl: `https://www.metarules.tech`,
    social: {
      twitter: `varunVarun2710`
    }
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PN9ML22",
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/pages/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `metarules`,
        short_name: `meta`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `metarules`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-code-titles",
            options: {
              className: "gatsby-code-title",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/posts`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDT6NrKEsaylMS19mz8xfBtpqgd-7VbI4s",
          authDomain: "metarules-gatsby.firebaseapp.com",
          projectId: "metarules-gatsby",
          storageBucket: "metarules-gatsby.appspot.com",
          messagingSenderId: "273021802973",
          appId: "1:273021802973:web:f271735c7113a15bdb3e34",
          measurementId: "G-QFBLEPSWXW"
        }
      }
    }
  ],
}
