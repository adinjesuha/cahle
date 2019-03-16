import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import Objetivos from '../images/objetivos.jpg'
import Check from '../images/icons/check.svg'
import HeroPage from '../components/heroPage' 

const Wrapper = styled.div`
  padding: 70px 0;
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
      <HeroPage title="Historia, Misión, Visión y Objetivos" tags="acerca de" bgImage={Objetivos}/>
      <Container>
        <Wrapper>
          <div>
            <h2>Historia</h2>
            <p>La Cámara Hondureña de la Leche (CAHLE) fue fundada por un grupo de productores nacionales en el año de 1999, en la ciudad de la Ceiba, Atlántida al norte de Honduras, siendo el Presidente electo en ese momento el Ing. Roberto Gallardo.</p>
            <p>Con el objetivo de unir criterios como fuerza importante en el país los productores, procesadores y comercializadores de leche a nivel nacional, conformaron la Cámara Hondureña de la Leche. Según los estatutos de la Cámara, el propósito fundamental de la organización es promover la producción y el consumo de la leche y sus derivados, así como mejorar los canales de comercialización y mejoramiento de las condiciones industriales.</p>
            <p>El 04 de septiembre del año de 2012 en la ciudad de Tegucigalpa, capital de Honduras se reactivó la Cámara Hondureña de la Leche, bajo la iniciativa de un grupo de productores de diferentes regiones del país, siendo la Junta Directiva integrada por: Presidente Ing. Anabel Gallardo, Vicepresidente Ing. Luis Arturo Donaire, Secretario Miguel Ángel Arévalo, Vocal I Vicente Murillo Cabrera, Vocal II Leopoldo Duran, Vocal III Jose Luis Gallardo, Vocal IV Mario Sánchez; y la Junta Fiscalizadora  Paolo Santalena, Dionisio Acosta, Carlos Estrada.</p>
          </div>
          <div>
            <h2>Visión</h2>
            <p>Ser la entidad líder que fomenta el desarrollo de la producción nacional y el consumo de lácteos mediante la investigación y la proyección en alianza con otras instituciones cuyos objetivos enmarcan el desarrollo del sector. </p>
            <h2>Misión</h2>
            <p>Somos la organización que representa al productor y promueve el desarrollo y crecimiento sostenible de la producción proponiendo políticas que vayan en pro de los productores de leche y sus derivados.</p>
          </div>
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