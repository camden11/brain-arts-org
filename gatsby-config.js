require("dotenv").config();

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "TS",
        fieldName: "takeshape",
        // Url to query from
        url: `https://api.takeshape.io/project/${
          process.env.TAKESHAPE_PROJECT
        }/graphql`,
        // HTTP headers
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TAKESHAPE_TOKEN}`
        }
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-netlify`
  ]
};
