import React from "react";
import Link from "gatsby-link"
import Layout from '../components/layout'
import Container from '../components/container'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  padding: 70px 0;
  text-align: center;
`

export default () => (
  <Wrapper>
    <Layout>
      <Container>
        <div style={{marginTop: '95px'}}>
          <h2 className="main-title variant-title">Gracias por suscribirse</h2>
          <Link className="animate-link" to="/">Regresar</Link>
        </div>
      </Container>
    </Layout>
  </Wrapper>
);