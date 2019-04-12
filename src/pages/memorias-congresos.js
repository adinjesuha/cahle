import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'
import HeroPage from '../components/heroPage'
import { device } from '../styles/breakpoints'

import Congresos from '../images/congreso.jpg'
import Ceiba from '../images/congreso-ceiba.jpg'
import Olanchito from '../images/congreso-olanchito.jpg'
import Choluteca from '../images/congreso-choluteca.jpg'
import RibeteV from '../images/congresos-bg/ribete-v.png'
import RibeteVI from '../images/congresos-bg/ribete-vi.png'
import RibeteVII from '../images/congresos-bg/ribete-vii.png'

const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 70px 0;
  .card-item{
    flex: 0 0 100%;
    margin: 0 0 2vw 0;
    border-radius: 5px;
    position: relative;
    @media ${device.tablet}{
      flex: 0 0 46%;
      margin: 0 2vw 2vw 0;
    }
    .card-item-image{
      background-size: cover;
      background-repeat: no-repeat;
      width: 100%;
      height: 250px;
      border-radius: 5px;
      position: relative;
      padding-left: 20px;
      &::before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: black;
        border-radius: 5px;
        opacity: 0.3;
        transition: opacity 0.3s ease;
      }
      &:hover:before{
        opacity: 0.5;
      }
    }
    figure{
      width: 140px;
      margin: 0;
      position: absolute;
      z-index: 1;
      left: 30px;
    }
  }
`

export default () => {
  return (
    <Layout>
      <HeroPage title="Memorias Congreso" tags="Documentación" bgImage={"congreso"}/>
      <Container>
        <CardContainer>
          <li className="card-item">
            <Link to="/congreso-de-la-leche">
              <figure>
                <img src={RibeteVII} alt="Congreso lechero CAHLE"/>
              </figure>
              <div className="card-item-image" style={{backgroundImage: `url(${Ceiba})`}}></div>
            </Link>
            <Link to="/memorias-congresos"><h2 className="sub-title">La Ceiba, Atlantida 2019</h2></Link>
          </li>
          <li className="card-item">
            <Link to="/congreso-choluteca">
              <figure>
                <img src={RibeteVI} alt="Congreso lechero CAHLE"/>
              </figure>
              <div className="card-item-image" style={{backgroundImage: `url(${Choluteca})`}}></div>
            </Link>
            <Link to="/congreso-choluteca"><h2 className="sub-title">Choluteca, Choluteca 2018</h2></Link>
          </li>
          <li className="card-item">
            <Link to="/congreso-olanchito">
              <figure>
                <img src={RibeteV} alt="Congreso lechero CAHLE"/>
              </figure>
              <div className="card-item-image" style={{backgroundImage: `url(${Olanchito})`}}></div>
            </Link>
            <Link to="/congreso-olanchito"><h2 className="sub-title">Olanchito, Yoro 2017</h2></Link>
          </li>
          <li className="card-item">
            <Link to="/congresos-anteriores">
              <div className="card-item-image" style={{backgroundImage: `url(${Congresos})`}}></div>
            </Link>
            <Link to="/congresos-anteriores"><h2 className="sub-title">Congresos Anteriores</h2></Link>
          </li>
        </CardContainer>
      </Container>
    </Layout>
  )
}