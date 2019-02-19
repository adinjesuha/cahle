import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import Fenagh from '../images/fenagh.png'
import Fepale from '../images/fepale.jpg'
import Fecalac from '../images/fecalac.png'
import Vision from '../images/vision.jpg'
import { device } from '../styles/breakpoints'
import HeroPage from '../components/heroPage'

const FlexContainer = styled.div`
  display: flex;
  margin: 70px 0;
  align-items: center;
  figure{
    width: 100%;
    img{
      max-width: 100%;
    }
  }
  
`

export default () => {
  return (
    <Layout>
      <HeroPage title="Representaciones" tags="asociados" bgImage={Vision}/>
      <Container>
        <FlexContainer>
          <figure>
            <img src={Fenagh} alt="Logo FENAGH"/>
          </figure>
          <figure>
            <img src={Fepale} alt="Logo FEPALE"/>
          </figure>
          <figure>
            <img src={Fecalac} alt="Logo FECALAC"/>
          </figure>
        </FlexContainer>  
      </Container>
    </Layout>
  )
}
