import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import Container from '../../components/container'
import Crel from '../../images/CREL.jpg' 
import HeroPage from '../../components/heroPage'
import { device } from '../../styles/breakpoints'

import Congresos from '../../images/congresos-bg/congreso.jpg'
import Olanchito from '../../images/congresos-bg/olanchito.jpg'
import RibeteV from '../../images/congresos-bg/ribete-v.png'
import RibeteVI from '../../images/congresos-bg/ribete-vi.png'
import RibeteVII from '../../images/congresos-bg/ribete-vii.png'

const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 70px 0;
  .card-item{
    background-repeat: no-repeat;
    background-size: cover;
    flex: 0 0 100%;
    margin: 0 0 2vw 0;
    height: 250px;
    position: relative;
    border-radius: 5px;
    > a {
      width: 100%;
      height: 100%;
      display: inline-block;
      color: white;
    }
    &::before{
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 5px;
      background: black;
      opacity: 0.3;
      transition: opacity 0.3s ease;
    }
    &:hover::before{
      opacity: 0.5;
    }
    @media ${device.tablet}{
      flex: 0 0 47%;
      margin: 0 2vw 2vw 0;
    }
    &:first-child{
      background-image: url(${Congresos});
    }
    &:nth-child(2){
      background-image: url(${Olanchito});
    }
    &:nth-child(3){
      background-image: url(${Olanchito});
    }
    &:nth-child(4){
      background-image: url(${Olanchito});
    }
  }
  .card-item-content{
    height: 100%;
    text-align: center;
    position: relative;
    h2{
      font-weight: 500;
      font-size: 22px;
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      margin: 0;
    }
    figure{
      display: inline-block;
      margin: 0;
      max-width: 110px;
      position: absolute;
      top: 0;
      left: 20px;
    }
    @media ${device.laptop}{
      h2{
        font-size: 28px;
      }
    }
  }
`

export default () => {
  return (
    <Layout>
      <HeroPage title="Memorias Congreso" tags="documentación" bgImage={Crel}/>
      <Container>
        <CardContainer>
          <li className="card-item">
            <Link to="/memorias-congresos/anteriores">
              <div className="card-item-content" style={{justifyContent: 'center'}}>
                <h2>Congresos Anteriores</h2>
              </div>
            </Link>
          </li>
          <li className="card-item">
            <Link to="/memorias-congresos/congreso-olanchito">
              <div className="card-item-content">
                <figure>
                  <img src={RibeteV} alt="Congreso lechero CAHLE"/>
                </figure>
                <h2>Olanchito, <br/>Yoro 2017</h2>
              </div>
            </Link>
          </li>
          <li className="card-item">
            <Link to="/memorias-congresos/congreso-choluteca">
              <div className="card-item-content">
                <figure>
                  <img src={RibeteVI} alt="Congreso lechero CAHLE"/>
                </figure>
                <h2>Choluteca, <br/>Choluteca 2018</h2>
              </div>
            </Link>
          </li>
          <li className="card-item">
            <div className="card-item-content">
                <figure>
                  <img src={RibeteVII} alt="Congreso lechero CAHLE"/>
                </figure>
              <h2 style={{color: 'white'}}>La Ceiba, <br/>Atlantida 2019</h2>
            </div>
          </li>
        </CardContainer>
      </Container>
    </Layout>
  )
}