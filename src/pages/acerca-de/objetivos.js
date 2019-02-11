import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/layout'
import Container from '../../components/container'
import Vision from '../../images/vision.jpg'
import Check from '../../images/icons/check.svg'

const Wrapper = styled.div`
  padding: 70px 0;
`
const Hero = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
  background-image: url(${Vision});
  background-position: center center;
  background-size: cover;
  padding: 300px 0 100px;
  &::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
  }
`
const Title = styled.h1`
  font-size: 54px;
  line-height: 54px;
  font-weight: bold;
  margin-bottom: 5px;
  position: relative;
`

const StyleLi = styled.li`
  position: relative;
  padding-left: 25px;
  margin-bottom: 20px;
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
`

export default () => {
  return (
    <Layout>
      <Hero>
        <Container>
          <Title>Objetivos</Title>
        </Container>
      </Hero>
      <Container>
        <Wrapper>
          <div>
            <h2>Objetivo General</h2>
            <p>Fomentar el desarrollo, la competitividad, la rentabilidad y la sostenibilidad del sector lechero, a través de la eficiencia en la producción, transformación y comercialización de productos lácteos. </p>
          </div>
          <div>
            <h2>Objetivos Específicos</h2>
            <ul>
              <StyleLi><p>Apoyar a sus asociaciones en la búsqueda de mejores niveles de eficiencia individual y empresarial, para mejorar su capacidad para producir bienes y servicios de carácter agroindustrial con valor agregado.</p></StyleLi>
              <StyleLi><p>Lograr que todos los asociados(as) y sus familias conozcan, hagan uso y se beneficien de las oportunidades y facilidades que ofrece la asociación.</p></StyleLi>
              <StyleLi><p>Fomentar y estimular la producción, la comercialización y el consumo de leche, a través de la crianza de razas apropiadas de ganado bovino para mejorar la ganadería nacional.</p></StyleLi>
              <StyleLi><p>Promover la investigación aplicada a todo el sistema productivo de ganado de leche, incluyendo la alimentación y nutrición, manejo de pastos y forrajes, mejoramiento genético, procesamiento, mercadeo y otros</p></StyleLi>
            </ul>
          </div>
        </Wrapper>
      </Container>
    </Layout>
  )
}