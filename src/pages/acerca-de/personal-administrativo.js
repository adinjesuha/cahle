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
const Title = styled.h1`
  font-size: 54px;
  line-height: 54px;
  font-weight: bold;
  margin-bottom: 5px;
  position: relative;
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
          <Title>Personal Administrativo</Title>
        </Container>
      </Hero>
      <Wrapper>
        <Container>
          <Flex>
            <BoxLeft>
              <LeftNav title="Acerca de CAHLE" data={acercaDe} />
            </BoxLeft>
            <BoxRight>
              <ul className="responsive-table">
                <li className="table-header">
                  <div className="col col-1">Nombre</div>
                  <div className="col col-2">Cargo</div>
                  <div className="col col-3">E-mail</div>
                </li>
                <li className="table-row">
                  <div className="col col-1" data-label="Job Id">Carmen A. García</div>
                  <div className="col col-2" data-label="Customer Name">Directora Ejecutiva</div>
                  <div className="col col-3" data-label="Amount"><a href="mailto:tecnicodecampo@gmail.org">tecnicodecampo@gmail.org</a></div>
                </li>
                <li className="table-row">
                  <div className="col col-1" data-label="Job Id">Luis Figueroa</div>
                  <div className="col col-2" data-label="Customer Name">Dirección Técnica de Campo</div>
                  <div className="col col-3" data-label="Amount"><a href="mailto:tecnicodecampo@gmail.org">tecnicodecampo@gmail.org</a></div>
                </li>
                <li className="table-row">
                  <div className="col col-1" data-label="Job Id">Carmen Chávez</div>
                  <div className="col col-2" data-label="Customer Name">Administradora de Empresas</div>
                  <div className="col col-3" data-label="Amount"><a href="mailto:administracion@cahle.org">administracion@cahle.org</a></div>
                </li>
              </ul>
            </BoxRight>
          </Flex>
        </Container>
      </Wrapper>
    </Layout>
  )
}
