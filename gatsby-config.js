module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    menuLinks: [
      {
        name: 'Acerca de CAHLE',
        link: '/acerca-de-cahle/'
      },
      {
        name: 'Asociados',
        link: '/asociados'
      },
      {
        name: 'Documentación',
        link: '/documentacion'
      },
      {
        name: 'Noticias y Eventos',
        link: '/noticias-y-eventos'
      },
    ] 
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
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
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
