import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import Container from '../../components/container'
import Check from '../../images/icons/check.svg'
import Crel from '../../images/CREL.jpg' 
import HeroPage from '../../components/heroPage'

const Wrapper = styled.div`
  padding: 70px 0;
  ul{
    list-style: none;
    margin: 0;
    li{
      position: relative;
      padding-left: 25px;
      margin-bottom: 20px;
      font-size: 14px;
      &:before{
        content: '';
        position: absolute;
        background: url(${Check}) no-repeat;
        background-size: contain;
        width: 20px;
        height: 10px;
        left: 2px;
        top: 7px;
      }
      a{
        color: var(--base-medium);
      }
    }
  }
`

export default () => {
  return (
    <Layout>
      <HeroPage title="Congresos Anteriores" tags="memorias congresos" bgImage={Crel}/>
      <Wrapper>
        <Container>
          
          <h3>I Congreso Nacional Lechero, San Pedro Sula, Cortés 2013</h3>

          <h3>II Congreso Nacional Lechero, Juticalpa, Olancho 2014</h3>

          <h3>III Congreso Nacional Lechero, Yoro 2015</h3>

          <h3>IV Congreso Nacional Lechero, San Pedro Sula 2016</h3>

          <Link to="/memorias-congresos">Regresar</Link>         

        </Container>
      </Wrapper>
    </Layout>
  )
}