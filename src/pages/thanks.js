import React from "react";
import { Link } from "gatsby"
import Layout from '../components/layout'
import Container from '../components/container'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  padding: 70px 0;
  h2{
    text-align: center;
    margin-bottom: 30px;
  }
`

const CustomLink = styled(Link)`
  text-align: center;
  display: block;
  margin: 0 auto;
  max-width: 360px;
  background-color: var(--oxford-blue);
  padding: 15px 30px;
  border-radius: 4px;
  color: white;
`

export default () => (
  <Layout>
    <Wrapper>
      <Container>
        <div style={{
          height: '40vh',
          marginTop: '95px',
        }}>
          <h2 className="main-title">Gracias por suscribirse</h2>
          <CustomLink to="/">Regresar</CustomLink>
        </div>
      </Container>
    </Wrapper>
  </Layout>
);