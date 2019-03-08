import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'
import Crel from '../images/CREL.jpg' 
import HeroPage from '../components/heroPage'

const Wrapper = styled.div`
  padding: 70px 0;
`

const ButtonLink = styled(Link)`
  background: var(--blue);
  border-radius: 42px;
  color: var(--green);
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  min-width: 150px;
  display: inline-block;
  padding: 4px 10px;
  line-height: 42px;
  text-align: center;
`

export default () => {
  return (
    <Layout>
      <HeroPage title="Congresos Anteriores" tags="memorias congresos" bgImage={Crel}/>
        <Container>
          <Wrapper>
            <h3>I Congreso Nacional Lechero, San Pedro Sula, Cortés 2013</h3>

            <h3>II Congreso Nacional Lechero, Juticalpa, Olancho 2014</h3>

            <h3>III Congreso Nacional Lechero, Yoro 2015</h3>

            <h3>IV Congreso Nacional Lechero, San Pedro Sula 2016</h3>
            <ButtonLink to="/memorias-congresos">Regresar</ButtonLink>         
          </Wrapper>
        </Container>
    </Layout>
  )
}