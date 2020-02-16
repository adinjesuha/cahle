import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import HeroBg from '../components/Congreso/heroBg'
import TabsCongress from '../components/Congreso/tabsCongress'


const Wrapper = styled.section`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
`

const CongresoPage = () => (
  <Layout>
    <HeroBg/>
    <Wrapper>
      <Container>
        <TabsCongress/>
      </Container>
    </Wrapper>
  </Layout>
)
 
export default CongresoPage
