import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/layout'
import Container from '../../components/container'
import Vision from '../../images/vision.jpg'
import { device } from '../../styles/breakpoints'
import { asociados } from '../../utils/menuConfig'
import LeftNav from '../../components/leftNav'


const Wrapper = styled.div`
  padding: 70px 0;
  ul{
    list-style: none;
    margin: 0;
  }
  h2{
    margin: 30px auto 25px;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--main-blue);
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
          <Title>Junta Directiva Actual</Title>
        </Container>
      </Hero>
      <Wrapper>
        <Container>
          <Flex>
            <BoxLeft>
              <LeftNav title="Asociados" data={asociados} />
            </BoxLeft>
            <BoxRight>
              <ul className="responsive-table">
                <li className="table-header">
                  <div className="col col-1">Nombre</div>
                  <div className="col col-2">Cargo</div>
                  <div className="col col-3">E-mail</div>
                </li>
                <li className="table-row">
                  <div className="col col-1" data-label="Job Id">Héctor Alberto Ferreira</div>
                  <div className="col col-2" data-label="Customer Name">Presidente</div>
                  <div className="col col-3" data-label="Amount">correo@e-mail.com</div>
                </li>
                <li className="table-row">
                  <div className="col col-1" data-label="Job Id">Vicente Murillo Cabrera</div>
                  <div className="col col-2" data-label="Customer Name">Vice-presidente</div>
                  <div className="col col-3" data-label="Amount">correo@e-mail.com</div>
                </li>
                <li className="table-row">
                  <div className="col col-1" data-label="Job Id">Mario Edgardo Sánchez</div>
                  <div className="col col-2" data-label="Customer Name">Secretario</div>
                  <div className="col col-3" data-label="Amount">correo@e-mail.com</div>
                </li>
                <li className="table-row">
                  <div className="col col-1" data-label="Job Id">Anabell Gallardo Ponce</div>
                  <div className="col col-2" data-label="Customer Name">Tesorera</div>
                  <div className="col col-3" data-label="Amount">correo@e-mail.com</div>
                </li>
                <li className="table-row">
                  <div className="col col-1" data-label="Job Id">Jorge Antonio Handal</div>
                  <div className="col col-2" data-label="Customer Name">Vocal I</div>
                  <div className="col col-3" data-label="Amount">correo@e-mail.com</div>
                </li>
                <li className="table-row">
                  <div className="col col-1" data-label="Job Id">Leopoldo Durán Puerto</div>
                  <div className="col col-2" data-label="Customer Name">Vocal II</div>
                  <div className="col col-3" data-label="Amount">correo@e-mail.com</div>
                </li>
                <li className="table-row">
                  <div className="col col-1" data-label="Job Id">Pablo Santalena</div>
                  <div className="col col-2" data-label="Customer Name">Vocal III</div>
                  <div className="col col-3" data-label="Amount">correo@e-mail.com</div>
                </li>
                <li className="table-row">
                  <div className="col col-1" data-label="Job Id">José Manuel España</div>
                  <div className="col col-2" data-label="Customer Name">Comisión Fiscalizadora</div>
                  <div className="col col-3" data-label="Amount">correo@e-mail.com</div>
                </li>
                <li className="table-row">
                  <div className="col col-1" data-label="Job Id">Edgar Alfredo Oliva</div>
                  <div className="col col-2" data-label="Customer Name">Comisión Fiscalizadora</div>
                  <div className="col col-3" data-label="Amount">correo@e-mail.com</div>
                </li>
                <li className="table-row">
                  <div className="col col-1" data-label="Job Id">José Luis Gallardo</div>
                  <div className="col col-2" data-label="Customer Name">Comisión Fiscalizadora</div>
                  <div className="col col-3" data-label="Amount">correo@e-mail.com</div>
                </li>
              </ul>
            </BoxRight>
          </Flex>
        </Container>
      </Wrapper>
    </Layout>
  )
}