import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'
import Congresos from '../images/congreso.jpg'
import HeroPage from '../components/heroPage'

import { FaArrowLeft } from 'react-icons/fa';

const Wrapper = styled.div`
  padding: 70px 0;
`

export default () => {
  return (
    <Layout>
      <HeroPage title="Congresos Anteriores" tags="memorias congresos" bgImage={Congresos }/>
        <Container>
          <Wrapper>
            <h3>I Congreso Nacional Lechero, San Pedro Sula, Cortés 2013</h3>

            <h3>II Congreso Nacional Lechero, Juticalpa, Olancho 2014</h3>

            <h3>III Congreso Nacional Lechero, Yoro 2015</h3>

            <h3>IV Congreso Nacional Lechero, San Pedro Sula 2016</h3>
            <Link to="/memorias-congresos" style={{color: 'var(--green)'}}> <FaArrowLeft style={{verticalAlign: 'middle',marginRight: '5px'}}/> Regresar</Link>         
          </Wrapper>
        </Container>
    </Layout>
  )
}