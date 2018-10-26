const languages = require('./src/data/languages');

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    languages,
    googleVerificationCode: process.env.GOOGLE_VERIFICATION_KEY,
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
      'gatsby-plugin-sass',
  ],
};
