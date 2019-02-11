import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/layout'
import Container from '../../components/container'
import Vision from '../../images/vision.jpg'
import Pic from '../../images/pic.png'
import { device } from '../../styles/breakpoints'

const Wrapper = styled.div`
  padding: 70px 0;
`
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
  font-size: 54px;
  line-height: 54px;
  font-weight: bold;
  margin-bottom: 5px;
  position: relative;
`

const Flexcard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  @media ${device.tablet}{
    flex-direction: row;
  }
`
const FlexImage = styled.div`
  flex: 0 0 100%;
  @media ${device.tablet}{
    flex: 0 0 40%;
  }
  @media ${device.laptop}{
    flex: 0 0 30%;
  }
`

const FlexContent = styled.div`
  flex: 0 0 100%;
  @media ${device.tablet}{
    flex: 0 0 60%;
  }
  @media ${device.laptop}{
    flex: 0 0 70%;
  }
`

export default () => {
  return (
    <Layout>
      <Hero>
        <Container>
          <Title>Junta Directiva</Title>
        </Container>
      </Hero>
      <Wrapper>
        <Container>
          <Flexcard>
            <FlexImage>
              <figure style={{margin:"0 40px 20px"}}>
                <img src={Pic} alt="Presidente de CAHLE"/>
              </figure>
            </FlexImage>
            <FlexContent>
              <h2>Héctor Alberto Ferreira</h2>
              <p>Presitende CAHLE</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci doloremque repudiandae nostrum ipsa minima eos atque quae soluta culpa, molestias optio nemo ducimus, aliquid molestiae esse beatae saepe sapiente assumenda.</p>
            </FlexContent>
          </Flexcard>
          <div className="wrapper">
            <div className="table">
            
              <div className="row header">
                <div className="cell">
                  Nombre
                </div>
                <div className="cell">
                  Cargo
                </div>
                <div className="cell">
                  E-mail
                </div>
              </div>
              
              <div className="row">
                <div className="cell" data-title="Nombre">
                Vicente Murillo Cabrera
                </div>
                <div className="cell" data-title="Cargo">
                Vice-presidente
                </div>
                <div className="cell" data-title="E-mail">
                correo@e-mail.com
                </div>
              </div>
              
              <div className="row">
                <div className="cell" data-title="Nombre">
                Anabel Gallardo Ponce
                </div>
                <div className="cell" data-title="Cargo">
                Tesorera
                </div>
                <div className="cell" data-title="E-mail">
                correo@e-mail.com
                </div>
              </div>
              
              <div className="row">
                <div className="cell" data-title="Nombre">
                Jorge Antonio Handal
                </div>
                <div className="cell" data-title="Cargo">
                Vocal I
                </div>
                <div className="cell" data-title="E-mail">
                correo@e-mail.com
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Nombre">
                Leopoldo Durán Puerto
                </div>
                <div className="cell" data-title="Cargo">
                Vocal II
                </div>
                <div className="cell" data-title="E-mail">
                correo@e-mail.com
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Nombre">
                Pablo Santalena
                </div>
                <div className="cell" data-title="Cargo">
                Vocal III
                </div>
                <div className="cell" data-title="E-mail">
                correo@e-mail.com
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Nombre">
                José Manuel España
                </div>
                <div className="cell" data-title="Cargo">
                Comisión Fiscalizadora
                </div>
                <div className="cell" data-title="E-mail">
                correo@e-mail.com
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Nombre" datatype>
                Edgar Alfredo Oliva
                </div>
                <div className="cell" data-title="Cargo">
                Comisión Fiscalizadora
                </div>
                <div className="cell" data-title="E-mail">
                correo@e-mail.com
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Nombre">
                José Luis Gallardo
                </div>
                <div className="cell" data-title="Cargo">
                Comisión Fiscalizadora
                </div>
                <div className="cell" data-title="E-mail">
                correo@e-mail.com
                </div>
              </div>
            
            </div>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  )
}