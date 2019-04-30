import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'
import Congresos from '../images/congreso.jpg'
import HeroPage from '../components/heroPage'

const Wrapper = styled.div`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
`

export default () => {
  return (
    <Layout>
      <HeroPage title="Congresos Anteriores" tags="memorias congresos" bgImage={Congresos }/>
        <Wrapper>
          <Container>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h3 className="sub-title">I Congreso Nacional Lechero, San Pedro Sula, Cortés 2013</h3>
              <h3 className="sub-title">II Congreso Nacional Lechero, Juticalpa, Olancho 2014</h3>
              <h3 className="sub-title">III Congreso Nacional Lechero, Yoro 2015</h3>
              <h3 className="sub-title">IV Congreso Nacional Lechero, San Pedro Sula 2016</h3>
              <Link to="/memorias-congresos" className="animate-link">Regresar</Link>
            </div>
          </div>
          </Container>
        </Wrapper>
    </Layout>
  )
}