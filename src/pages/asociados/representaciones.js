import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/layout'
import Container from '../../components/container'
import Fenagh from '../../images/fenagh.png'
import Fepale from '../../images/fepale.jpg'
import Vision from '../../images/vision.jpg'

const Hero = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
  background-image: url(${Vision});
  background-position: center center;
  background-size: cover;
  padding: 300px 0 100px;
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
const Title = styled.h1`
  font-size: 64px;
  line-height: 54px;
  font-weight: bold;
  margin-bottom: 5px;
  position: relative;
`
const FlexContainer = styled.div`
  display: flex;
  margin: 70px 0;
  align-items: center;
`


export default () => {
  return (
    <Layout>
      <Hero>
        <Container>
          <Title>Representaciones</Title>
        </Container>
      </Hero>
      <Container>
        <FlexContainer>
          <figure style={{flex:"0 0 40%" }}>
            <img src={Fenagh} alt="Vision CAHLE"/>
          </figure>
          <figure style={{flex:"0 0 40%"}}>
            <img src={Fepale} alt="Vision CAHLE"/>
          </figure>
        </FlexContainer>  
      </Container>
    </Layout>
  )
}