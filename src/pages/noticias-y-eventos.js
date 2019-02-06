import React from 'react'

import Layout from '../components/layout'
import Container from '../components/container'
import PostListing from '../components/postListing'

const blog = () => (
  <Layout>
    <Container>
      <h2 className="section-title">Noticias y Eventos</h2>
      <PostListing />
    </Container>
  </Layout>
)

export default blog