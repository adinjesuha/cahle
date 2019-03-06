import React from "react";
import Link from "gatsby-link"
import Layout from '../components/layout'
import Container from '../components/container'

export default () => (
  <Layout>
    <Container>
      <div style={{marginTop: '95px'}}>
        <h1>Gracias por suscribirse</h1>
        <Link to="/">Regresar</Link>
      </div>
    </Container>
  </Layout>
);