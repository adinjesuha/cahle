import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';

import Container from '../components/container'
import LogoWrapper from './logo'
import { device } from '../styles/breakpoints';
import PhoneIcon from '../images/svg-icons/phone-icon.svg'
import MailIcon from '../images/svg-icons/mail-icon.svg'

const Wrapper = styled.footer`
  background-color: #242526;
  position: relative;
  color: var(--base-light-bg);
  padding-top: 80px;
  font-family: 'Montserrat';
`
const Content = styled.div`
  line-height: 1.5;
  display: flex;
  margin-top: 20px;
  padding: 0 0 80px;
  p{
    a{
      color: rgba(256,256,256, 0.5);
      transition: color 0.3s ease;
      font-size: 12px;
      &:hover{
        color: rgba(256,256,256, 0.8);
      }
    }
  }
`
const Direction = styled.div`
  padding-right: 20px;
  flex: 0 0 100%;
  @media ${device.tablet}{
    max-width: 420px;
    flex: 0 0 40%;
  }
`

const Box = styled.div`
  flex: 0 0 20%;
  text-align: right;
  display: none;
  @media ${device.tablet}{
    display: block;
  }
  &:last-child{
    margin-right: 0;
  }
`
const Title = styled.p`
  font-size: 14px !important;
  font-weight: 600 !important;
  letter-spacing: 1px !important;
  @media ${device.laptop}{
    font-size: 18px !important;
  }
`
const FooterMenu = styled.div`

`
const FooterDescription = styled.div`
  padding: 23px 0 25px;
  border-top: 1px solid rgba(256,256,256, 0.2);
  p{
    text-align: center;
    margin: 0;
    font-size: 12px;
    color: rgba(256,256,256, 0.5);
  }
`

const Footer = () => (
  <Wrapper>
    <Container>
      <LogoWrapper />
      <Content>
        <Direction>
          <Title>Dirección</Title>
          <p>Edificio FENAGH, Blvd. Suyapa, Col. Florencia Sector Sur, Casa #3802, contiguo a la SUZUKI, frente a Banrural, Tegucigalpa, Honduras, C.A.</p>
        </Direction>
        <Box>
          <FooterMenu>
            <Title>Acerca de</Title>
            <p><a href="#"> Vision y Misión</a></p>
            <p><a href="#"> Objetivos</a></p>
            <p><a href="#"> Personal Administrativo</a></p>
          </FooterMenu>
        </Box>
        <Box>
          <FooterMenu>
            <Title>Asociados</Title>
            <p><a href="#"> Junta Directiva</a></p>
            <p><a href="#"> Beneficios</a></p>
            <p><a href="#"> Representaciones</a></p>
          </FooterMenu>
        </Box>
        <Box>
          <FooterMenu>
            <Title>Documentación</Title>
            <p><a href="#"> Reglamentaciones</a></p>
            <p><a href="#"> Documentos Técnicos</a></p>
            <p><a href="#"> Perfil Comercial</a></p>
          </FooterMenu>
        </Box>
      </Content>
    </Container>
    <FooterDescription>
      <Container>
        <p>© 2019 Camara Hondureña de la Leche</p>
      </Container>
    </FooterDescription>
  </Wrapper>
)

export default Footer