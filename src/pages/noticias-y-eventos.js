import React from 'react'

import Layout from '../components/layout'
import Container from '../components/container'
import PostListing from '../components/postListing'
import Vision from '../images/vision.jpg'
import HeroPage from '../components/heroPage'

const blog = () => (
  <Layout>
    <HeroPage title="Noticias y Eventos" bgImage={Vision}/>
    <Container>
      <PostListing />
    </Container>
  </Layout>
)

export default blog