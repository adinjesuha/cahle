import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import SubscribeForm from '../components/Congreso/formCongress'
import { device } from '../styles/breakpoints'
import Steps from '../images/steps.jpg'

const Wrapper = styled.div`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
  .price{
    h2, h3{
      color: var(--oxford-blue) !important;
    }
    h3{
      margin-bottom: 15px;
    }
    p{
      margin: 0;
      margin-bottom: 10px;
    }
    &__category{
      border-bottom: 1px solid var(--anti-flash-white);
      padding-bottom: 20px;
      &--note{
        font-size: 12px;
        font-weight: bold;
      }
      &:last-child{
        border-bottom: 0px;
      }
    }
  }
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
      <Wrapper>
        <Container>
          <HeroSection>
            <h2>Inscripciones del Congreso</h2>
          </HeroSection>
          <div className="row justify-content-center">
            <img src={Steps} alt="Agafam Congreso de la leche 2020"/>
            <div className="col-lg-8">
              <SubscribeForm />
            </div>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default CongresoInscripciones