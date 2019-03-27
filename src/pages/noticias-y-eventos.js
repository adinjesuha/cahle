import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import BlogPostListing from '../components/blogPostListing'
import Vision from '../images/vision.jpg'
import HeroPage from '../components/heroPage'

const Wrapper = styled.section`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
`

const blog = () => (
  <Layout>
    <HeroPage title="Noticias y Eventos" bgImage={Vision}/>
    <Wrapper>
      <Container>
        <BlogPostListing />
      </Container>
    </Wrapper>
  </Layout>
)

export default blog