import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import SubscribeForm from '../components/Congreso/formCongress'
import { device } from '../styles/breakpoints'

const Wrapper = styled.div`
  max-width: 680px;
  padding: 30px 0;
  margin: 0 auto;
`

const HeroSection = styled.div`
  width: 100%;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h2{
    color: var(--oxford-blue);
    font-size: 32px;
    text-transform: uppercase;
    margin-top: 80px;
  }
  @media ${device.tablet}{
    height: 40vh;
    h2{
      font-size: 38px;
    }
  }
`


const CongresoInscripciones = () => {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <HeroSection>
            <h2>Inscripciones del Congreso</h2>
          </HeroSection>
          <p className="main-text navy">Utilice el formulario adjunto para solicitar su registro al VIII Congreso Nacional de la Leche</p>
          <SubscribeForm />
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default CongresoInscripciones