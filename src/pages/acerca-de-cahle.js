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
                      <p className="main-text navy">Ser la entidad líder que representa, promueve y fomenta el desarrollo sostenible de la producción, procesamiento y comercialización de la leche y sus derivados en Honduras. </p>
                    </div>
                    <div className="col-lg-9">
                    <h3 className="sub-title">Misión</h3>
                      <p className="main-text navy">Fomentar el desarrollo y sostenibilidad del rubro de la leche, promoviendo su expansión y competitividad; a través del fortalecimiento de las mejores prácticas productivas de los miembros asociados, de la gestión de iniciativas de desarrollo que genere la eficiente producción, transformación de la leche y sus derivados y la consolidación del gremio que vele y proteja los intereses,  las necesidades y resuelva los problemas de sus miembros  para brindar una mejor calidad de los productos ofertados a la población.</p>
                    </div>
                  </div>
                </div>
                <div label="Objetivos">
                  <div className="row justify-content-center">
                    <div className="col-lg-9">
                      <h2 className="main-title variant-title">Objetivos</h2>
                      <h3 className="sub-title">Objetivo Principal</h3>
                      <p className="main-text navy">Fomentar el desarrollo y sostenibilidad del rubro de la leche, promoviendo su expansión y competitividad; a través del fortalecimiento de las mejores prácticas productivas de los miembros asociados, de la gestión de iniciativas de desarrollo que genere la eficiente producción, transformación de la leche y sus derivados y la consolidación del gremio que vele y proteja los intereses,  las necesidades y resuelva los problemas de sus miembros  para brindar una mejor calidad de los productos ofertados a la población.</p>
                    </div>
                    <div className="col-lg-9">
                      <h2 className="sub-title">Objetivos Específicos</h2>
                      <div className="row justify-content-center">
                        <div className="col-lg-12">
                          <div className="flex-text">
                            <span className="number">01</span>
                            <p className="main-text">Servir de brazo ejecutor de la Federacion de Agricultores y Ganaderos de Honduras /FENAGH y de otras organizaciones que se constituyan en ámbito supranacional en el desarrollo de las politicas y estrategias de relacionada al rubro de la leche. </p>  
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="flex-text">
                            <span className="number">02</span>
                            <p className="main-text">Representar a sus asociados ante los Organismos Estatales o Internacionales que intervengan en los procesos de investigación, producción, comercialización y fomento de la leche y el ganado lechero.</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="flex-text">
                            <span className="number">03</span>
                            <p className="main-text"> Aplicación de mejores prácticas para el fortalecimiento del rubro lechero y desarrollo de la cultura de  competitividad del sector.</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="flex-text">
                            <span className="number">04</span>
                            <p className="main-text"> Promover la investigación ganadera y la divulgación de las nuevas tecnologías productivas e industrial. </p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="flex-text">
                            <span className="number">05</span>
                            <p className="main-text"> Fomentar la cooperación y asociación de las personas dedicas a la actividad lechera. </p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="flex-text">
                            <span className="number">06</span>
                            <p className="main-text"> Participar activamente en la formulación de las políticas para el sector lechero e industrial y en la ejecución de las iniciativas de desarrollo (planes, programas y proyectos) de desarrollo y fomento de la producción lechera nacional.</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="flex-text">
                            <span className="number">07</span>
                            <p className="main-text">Proponer la regulación de la producción y la competitividad del rubro lechero, de acuerdo con las necesidades y el consumo. </p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="flex-text">
                            <span className="number">08</span>
                            <p className="main-text">Promover el aumento del consumo de los productos lácteos.</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="flex-text"> 
                            <span className="number">09</span>
                            <p className="main-text">Fomentar la organización de los productores y contribuir al diseño de mecanismos de comercialización de los productos, con el propósito de reducir la cadena de intermediación.</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="flex-text">
                            <span className="number">10</span> 
                            <p className="main-text">Estimular el mejoramiento de la calidad de los productos lecheros para lograr un mayor valor agregado de los mismos.</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="flex-text">
                            <span className="number">11</span>
                            <p className="main-text">Velar por el establecimiento, cumplimiento y respeto, por parte del Estado y sus Instituciones, de políticas y normas que protejan e impulsen la producción, comercialización de la leche, sus productos y subproductos y procurar exenciones tributarias  para los mismos.</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="flex-text">
                            <span className="number">12</span>
                            <p className="main-text">Propiciar la consolidación de empresas transformadoras e industrializadoras de productos derivados de la leche.</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="flex-text">
                            <span className="number">13</span>
                            <p className="main-text">Gestionar programas y proyectos de capacitacion para los productores y sus familias como conferencias, cursos, días de campo demostraciones de avances tecnológicos y todas aquellas actividades que contribuyan a gestion del conocimiento orientados a mejorar las prácticas de actividades de produccion e industrializacion de la leche.</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="flex-text">
                            <span className="number">14</span>
                            <p className="main-text">Apoyar al gobierno en la gestion de iniciativas que fortalezcan la productividad lechera.</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="flex-text">
                            <span className="number">15</span>
                            <p className="main-text">Cooperar con las instituciones públicas y privadas del sector agropecuario, en resolver los problemas de carácter técnico, económico y social en general y específicamente los vinculados con la producción lechera de la República.</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="flex-text">
                            <span className="number">16</span>
                            <p className="main-text">Fortalecer el sector lechero a través de la organización de centros recolectores de leche.</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="flex-text">
                            <span className="number">17</span>
                            <p className="main-text">Participar con los demás gremios en el análisis de temas económicos de interés nacional.</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="flex-text">
                            <span className="number">18</span>
                            <p className="main-text">Establecer programas de becas nacionales e internacionales para formar el talento humano competente para el sector.</p>
                          </div>
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
