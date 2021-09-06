module.exports = {
  siteMetadata: {
    title: `einfachpurgeniessen`,
    description: `Website for Restaurant`,
    author: `The Puzzlers`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `einfachpurgeniessen`,
        short_name: `einfachpurgeniessen`,
        start_url: `/`,
        background_color: `#FFFCF9`,
        display: `minimal-ui`,
        icon: `src/images/general/logo.png`,
      },
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/Layout/index.js"),
      },
    },
  ],
};
