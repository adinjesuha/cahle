import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import config from '../utils/siteConfig'
import Header from './header'
import MobileNav from './mobileNav'
import Footer from './footer'
import '../styles/bootstrap-grid.min.css'
import '../styles/layout.css'

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`

const SiteRoot = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Layout = ({ children }) => (
  <SiteRoot>
    <Helmet>
      <title>{config.siteTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />  
      <link href="https://fonts.googleapis.com/css?family=Montserrat:500,600|Roboto:300,400,500" rel="stylesheet" /> 
      <link href="https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,700" rel="stylesheet" />
    </Helmet>
    <LayoutWrapper> 
      <MobileNav />
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  </SiteRoot>
)

export default Layout
