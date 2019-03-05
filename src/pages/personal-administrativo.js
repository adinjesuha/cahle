import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import Vision from '../images/vision.jpg'
import HeroPage from '../components/heroPage'

const Wrapper = styled.div`
  padding: 70px 0;
  ul{
    list-style: none;
    margin:0;
  }
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
  margin-top: 80px;
  min-height: 300px;
  height: 60vh;
  &::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`
const Title = styled.h1`
  font-size: 54px;
  line-height: 54px;
  font-weight: bold;
  margin-bottom: 5px;
  position: relative;
`

export default () => {
  return (
    <Layout>
      <HeroPage title="Personal Administrativo" tags="acerca de" bgImage={Vision}/>
      <Wrapper>
        <Container>
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
                Carmen A. García
                </div>
                <div className="cell" data-title="Cargo">
                Directora Ejecutiva
                </div>
                <div className="cell" data-title="E-mail">
                  <a href="mailto:camaradelaleche@gmail.com">camaradelaleche@gmail.com</a>
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Nombre">
                  Luis Figueroa
                </div>
                <div className="cell" data-title="Cargo">
                  Dirección Técnica de Campo
                </div>
                <div className="cell" data-title="E-mail">
                  <a href="mailto:tecnicodecampo@cahle.org">tecnicodecampo@cahle.org</a>
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Nombre" datatype>
                  Carmen Chávez
                </div>
                <div className="cell" data-title="Cargo">
                  Ingeniera de Negocios
                </div>
                <div className="cell" data-title="E-mail">
                  <a href="mailto:administracion@cahle.org">administracion@cahle.org</a>
                </div>
              </div>
            
            </div>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  )
}
