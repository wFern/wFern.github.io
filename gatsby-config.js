const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    title: `Personal website`,
    languages
  },
  plugins: [
      `gatsby-plugin-react-helmet`,
      'gatsby-plugin-catch-links',
      {
          resolve: 'gatsby-plugin-i18n',
          options: {
              langKeyForNull: 'any',
              langKeyDefault: languages.defaultLangKey,
              useLangKeyLayout: false
          }
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              path: `${__dirname}/src/pages/blog`,
              name: 'blog',
          },
      },
      {
          resolve: 'gatsby-transformer-remark',
          options: {
              plugins: []
          }
      },
  ],

}
