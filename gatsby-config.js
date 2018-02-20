const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    title: `Personal website`,
    languages
  },
  plugins: [
      `gatsby-plugin-react-helmet`,
      {
          resolve: 'gatsby-plugin-i18n',
          options: {
              langKeyForNull: 'any',
              langKeyDefault: languages.defaultLangKey,
              useLangKeyLayout: false
          }
      },

  ],

}
