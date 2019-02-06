import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/layout'
import Container from '../../components/container'
import Vision from '../../images/vision.jpg'
import { device } from '../../styles/breakpoints'
import { acercaDe } from '../../utils/menuConfig'
import LeftNav from '../../components/leftNav'


const Wrapper = styled.div`
  padding: 70px 0;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  ul{
    list-style:none;
    margin: 0;
  }
  h2{
    margin: 0px auto 25px;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--main-blue);
  }
`
const Title = styled.h1`
  font-size: 54px;
  line-height: 54px;
  font-weight: bold;
  margin-bottom: 5px;
  position: relative;
`

const Hero = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
  margin-top: -80px;
  background-image: url(${Vision});
  background-position: center center;
  background-size: cover;
  padding: 300px 0 50px;
  height:  60vh;
  &::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
  }
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
`
const BoxRight = styled.div`
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  flex: 0 0 100%;
  @media ${device.tablet}{
    flex: 0 0 70%;
  }
`
const BoxLeft = styled.div`
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  flex: 0 0 0%;
  padding-right:60px;
  display: none;
  @media ${device.laptop}{
    display: block;
    flex: 0 0 30%;
  }
`

export default () => {
  return (
    <Layout>
      <Hero>
        <Container>
          <Title>Visión y Misión</Title>
        </Container>
      </Hero>
      <Wrapper>
        <Container>
          <Flex>
            <BoxLeft>
              <LeftNav title="Acerca de CAHLE" data={acercaDe} />
            </BoxLeft>
            <BoxRight>
              <div>
                <h2>Visión</h2>
                <figure>
                  <img src={Vision} alt="Vision CAHLE"/>
                </figure> 
                <p>Ser la entidad líder que fomenta el desarrollo de la producción nacional y el consumo de lácteos mediante la investigación y la proyección en alianza con otras instituciones cuyos objetivos enmarcan el desarrollo del sector. </p>
              </div>
              <div>
                <h2>Misión</h2> 
                <figure>
                  <img src={Vision} alt="Vision CAHLE"/>
                </figure>
                <p>Somos la organización que representa al productor y promueve el desarrollo y crecimiento sostenible de la producción proponiendo políticas que vayan en pro de los productores de leche y sus derivados.</p>
              </div>
            </BoxRight>
          </Flex>
        </Container>
      </Wrapper>
    </Layout>
  )
}