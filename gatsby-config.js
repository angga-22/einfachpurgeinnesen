module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "einfachpurgeniessen",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
      }
    },
  ],
};
