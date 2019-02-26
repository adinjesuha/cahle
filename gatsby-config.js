module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    {
		  resolve: 'gatsby-plugin-react-svg',
		  options: {
			  rule: {
				  include: /svg-icons/,
			  },
		  },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `zg4fwo9e8dmk`,
        accessToken: 'cd66543f9796767c06f65979c27b7a0ef34cd495602442bec6f9fe75212d40b8',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name:'CAHLE | Cámara hondureña de la leche',
        short_name: 'CAHLE',
        start_url: '/',
        background_color: '#010855',
        theme_color: '#010855',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
