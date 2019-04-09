import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import HeroPage from '../components/heroPage' 
import Tabs from '../components/Tabs/tabs'

const Wrapper = styled.div`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
  .number{
    font-size: 14px;
    color: var(--mantis);
    margin-right: 5px;
    display: inline;
  }
`

export default () => {
  return (  
    <Layout>
      <HeroPage title="Acerca de Cahle" bgImage={"objetivos"}/>
      <Wrapper>
        <Container>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <Tabs>
                <div label="Historia">
                  <div className="row justify-content-center">
                    <div className="col-lg-9">
                      <h2 className="main-title variant-title">Historia</h2>
                      <p className="main-text navy">La Cámara Hondureña de la Leche (CAHLE) fue fundada por un grupo de productores nacionales en el año de 1999, en la ciudad de la Ceiba, Atlántida al norte de Honduras, siendo el Presidente electo en ese momento el Ing. Roberto Gallardo.</p>
                      <p className="main-text navy">Con el objetivo de unir criterios como fuerza importante en el país los productores, procesadores y comercializadores de leche a nivel nacional, conformaron la Cámara Hondureña de la Leche. Según los estatutos de la Cámara, el propósito fundamental de la organización es promover la producción y el consumo de la leche y sus derivados, así como mejorar los canales de comercialización y mejoramiento de las condiciones industriales.</p>
                      <p className="main-text navy">El 04 de septiembre del año de 2012 en la ciudad de Tegucigalpa, capital de Honduras se reactivó la Cámara Hondureña de la Leche, bajo la iniciativa de un grupo de productores de diferentes regiones del país, siendo la Junta Directiva integrada por: Presidente Ing. Anabel Gallardo, Vicepresidente Ing. Luis Arturo Donaire, Secretario Miguel Ángel Arévalo, Vocal I Vicente Murillo Cabrera, Vocal II Leopoldo Duran, Vocal III Jose Luis Gallardo, Vocal IV Mario Sánchez; y la Junta Fiscalizadora  Paolo Santalena, Dionisio Acosta, Carlos Estrada.</p>
                    </div>
                  </div>
                </div>
                <div label="Misión & Visión">
                  <div className="row justify-content-center">
                    <div className="col-lg-9">
                      <h2 className="main-title variant-title">Visión y Visión</h2>
                      <h3 className="sub-title">Visión</h3>
                      <p className="main-text navy">Ser la entidad líder que fomenta el desarrollo de la producción nacional y el consumo de lácteos mediante la investigación y la proyección en alianza con otras instituciones cuyos objetivos enmarcan el desarrollo del sector. </p>
                    </div>
                    <div className="col-lg-9">
                    <h3 className="sub-title">Misión</h3>
                      <p className="main-text navy">Somos la organización que representa al productor y promueve el desarrollo y crecimiento sostenible de la producción proponiendo políticas que vayan en pro de los productores de leche y sus derivados.</p>
                    </div>
                  </div>
                </div>
                <div label="Objetivos">
                  <div className="row justify-content-center">
                    <div className="col-lg-9">
                      <h2 className="main-title variant-title">Objetivos</h2>
                      <h3 className="sub-title">Generales</h3>
                      <p className="main-text navy">Fomentar el desarrollo, la competitividad, la rentabilidad y la sostenibilidad del sector lechero, a través de la eficiencia en la producción, transformación y comercialización de productos lácteos. </p>
                    </div>
                    <div className="col-lg-9">
                      <h2 className="sub-title">Específicos</h2>
                      <div className="row justify-content-center">
                        <div className="col-lg-6">
                          <p className="main-text"><span className="number">01</span> <strong>Apoyar a sus asociaciones</strong> en la búsqueda de mejores niveles de eficiencia individual y empresarial, para mejorar su capacidad para producir bienes y servicios de carácter agroindustrial con valor agregado.</p>  
                        </div>
                        <div className="col-lg-6">
                          <p className="main-text"><span className="number">02</span> <strong>Lograr que todos los asociados(as)</strong> y sus familias conozcan, hagan uso y se beneficien de las oportunidades y facilidades que ofrece la asociación.</p>
                        </div>
                        <div className="col-lg-6">
                          <p className="main-text"><span className="number">03</span> <strong>Fomentar y estimular</strong> la producción, la comercialización y el consumo de leche, a través de la crianza de razas apropiadas de ganado bovino para mejorar la ganadería nacional.</p>
                        </div>
                        <div className="col-lg-6">
                          <p className="main-text"><span className="number">04</span> <strong>Promover la investigación </strong>aplicada a todo el sistema productivo de ganado de leche, incluyendo la alimentación y nutrición, manejo de pastos y forrajes, mejoramiento genético, procesamiento, mercadeo y otros.</p>
                        </div>
                      </div>  
                    </div>
                  </div>
                </div>
              </Tabs>
            </div>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  )
}
