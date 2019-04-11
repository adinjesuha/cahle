import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import HeroPage from '../components/heroPage'

const Wrapper = styled.section`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
  ul.lists{
    font-family: Roboto;
    color: var(--text);
    margin-left: 15px;
    list-style: disc;
  }
`

export default () => {
  return (
    <Layout>
      <HeroPage title="Junta Directiva Anterior" tags="Nuestra Gente" bgImage={"junta-directiva"}/>
      <Wrapper>
        <Container>
          <div className="row justify-content-center">
            <h2 className="main-title variant-title">Periodo 2017-2019</h2>
            <div className="col-lg-9">
            <div className="table">
              <div className="c-row header">
                <div className="cell">
                  Nombre
                </div>
                <div className="cell">
                  Cargo
                </div>
              </div>
              <div className="c-row">
                <div className="cell" data-title="Nombre">
                Héctor Alberto Ferreira
                </div>
                <div className="cell" data-title="Cargo">
                Presidente
                </div>
              </div>
                <div className="c-row">
                  <div className="cell" data-title="Nombre">
                  Vicente Murillo Cabrera
                  </div>
                  <div className="cell" data-title="Cargo">
                  Vice-presidente
                  </div>
                </div>
                <div className="c-row">
                  <div className="cell" data-title="Nombre">
                  Mario Sánchez
                  </div>
                  <div className="cell" data-title="Cargo">
                  Secretario
                  </div>
                </div>
                <div className="c-row">
                  <div className="cell" data-title="Nombre">
                  Anabel Gallardo
                  </div>
                  <div className="cell" data-title="Cargo">
                  Tesorerao
                  </div>
                </div>
                <div className="c-row">
                  <div className="cell" data-title="Nombre">
                  Jorge Antonio Handal
                  </div>
                  <div className="cell" data-title="Cargo">
                  Vocal I
                  </div>
                </div>
                <div className="c-row">
                  <div className="cell" data-title="Nombre">
                  Leopoldo Durán Puerto
                  </div>
                  <div className="cell" data-title="Cargo">
                  Vocal II
                  </div>
                </div>
                <div className="c-row">
                  <div className="cell" data-title="Nombre">
                  Paolo Santalena
                  </div>
                  <div className="cell" data-title="Cargo">
                  Vocal III
                  </div>
                </div>
                <div className="c-row">
                  <div className="cell" data-title="Nombre">
                  José Manuel España
                  </div>
                  <div className="cell" data-title="Cargo">
                  Comisión Fiscalizadora
                  </div>
                </div>
                <div className="c-row">
                  <div className="cell" data-title="Nombre" datatype>
                  Edgar Alfredo Oliva
                  </div>
                  <div className="cell" data-title="Cargo">
                  Comisión Fiscalizadora
                  </div>
                </div>
                <div className="c-row">
                  <div className="cell" data-title="Nombre">
                  José Luis Gallardo
                  </div>
                  <div className="cell" data-title="Cargo">
                  Comisión Fiscalizadora
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <h2 className="main-title variant-title">Logros</h2>
              <ul className="bibliography">
                <li>
                  <p className="main-text">Se desarrolla exitosamente el V y VI Congreso Nacional de la leche cuyo objetivo fundamental es promover la transferencia de conocimientos, experiencias, retos y oportunidades, así como la competitividad del sector lácteo.</p>
                </li>
                <li>
                  <p className="main-text">En coordinación con <strong>SENASA</strong> se coordina el diseño e implementación de un sistema nacional de trazabilidad, registro y control de movilización de animales, productos y subproductos de origen pecuario.</p>
                </li>
                <li>
                  <p className="main-text">En conjunto con <strong>SENASA, APROLECHE Y LACTHOSA</strong> se suscribió un convenio de cooperación técnico y financiero para permitir el desarrollo de las actividades que conllevan al cumplimiento de la vigilancia epidemiológica y la liberación de brucelosis y tuberculosis en las fincas ganaderas que proveen leche cruda a las empresas de <strong>APROLECHE.</strong></p>
                </li>
                <li>
                  <p className="main-text">Se desarrolló un modelo de costos para diferentes tipologías de fincas con el objetivo de monitorear el comportamiento de los precios pagados por litro de leche al productor y analizar índices de productividad.</p>
                </li>
                <li>
                  <p className="main-text">Se presentó ante la Secretaría de Desarrollo Económico, la posición del sector lácteo con respecto al ingreso de nuevas empresas que desean invertir haciendo énfasis en el país debe Salvaguardar la producción ganadera nacional en vista de toda la importancia económica y social que representa reiterando que nuestra posición es favorable hacia la realización de inversiones nacionales o extranjeras que dinamicen la economía nacional con beneficios directos al productor primario.</p>
                </li>
                <li>
                  <p className="main-text">Mediante acuerdo de compromisos entre el sector ganadero y el sector de procesamiento informal e industrial se logró implementar un aumento de precio en el litro de leche de Lps. 0.40 centavos de lempira en las diferentes categorías de pago a los proveedores de <strong>LACTHOSA</strong>. Además, el otorgamiento de Lps. 0.10 centavos de lempiras a fincas que demuestren mediante documentación oficial que están en los programas de trazabilidad bovina y en el control del programa de erradicación de brucelosis y tuberculosis.</p>
                </li>
                <li>
                  <p className="main-text">Se lideró el comité responsable de promover la revisión de la Norma de la Leche Cruda como instrumento que especifica los requisitos mínimos de calidad de la leche cruda de vaca para protegerse de las importaciones de empresas regionales y extra regionales que vengan a competir con productos análogos.</p>
                </li>
                <li>
                  <p className="main-text">Se participa en la plataforma nacional de ganadería sostenible con el objetivo de gestionar y coordinar las acciones prioritarias del sector a fin de proponer de impulsar planes, estrategias y el diseño de políticas públicas para la promoción de la ganadería sostenible a nivel nacional.</p>
                </li>
                <li>
                  <p className="main-text">En conjunto con <strong>FENAGH</strong> se gestionó la aprobación de los siguientes reglamentos: i) Reglamento de registro de establecimientos importadores, procesadores y/o exportadores de productos y subproductos de origen animal y/o vegetal (Registro y renovación de registro) <strong>ACUERDO N° CD SENASA-01-2018</strong> y ii) el Reglamento general de autorización de terceros para que ejecuten una o más actividades en el marco de programas sanitarios del SENASA. ACUERDO N° CD SENASA-02-2018. Ambos reglamentos promueven directamente la competitividad del sector lácteo de Honduras.</p>
                </li>
                <li>
                  <p className="main-text">Se participó en la elaboración del proyecto de Ley de inocuidad de alimentos y forma parte del Comité Técnico de revisión; siendo uno de los principales beneficios para el sector lácteo la definición de las funciones de las autoridades competentes en la evaluación de la conformidad a efecto de eliminar la doble función de las mismas y promover la competitividad del sector.</p>
                </li>
                <li>
                  <p className="main-text">Se lanzó la Campaña ¡Sí a la Leche! Realizando actividades de fomento al consumo de lácteos nacionales, entre ellos: Anuncios en diferentes medios audiovisuales (vallas publicitarias, radio, prensa, televisión e internet), donación de libros en escuelas rurales y concursos en redes sociales.</p>
                </li>
                <li>
                  <p className="main-text">Se capacitaron Centros de recolección y enfriamiento de leche <strong>(CREL)</strong> en temas tributarios y de constitución, para efectos de cambio de razón social (1.5% impuestos).</p>
                </li>
                <li>
                  <p className="main-text">Se apoyó a la Cámara de Fomento Ganadero <strong>(CAFOGA)</strong> en su primera subasta de ganado, otorgando un incentivo económico de Lps. 10,000.00 por cada animal comprado a socios productores de leche. El objetivo de apoyar la iniciativa nace bajo la premisa de mejorar la calidad de los productos y sub productos de origen animal. En total, 26 productores de diferentes zonas del país fueron beneficiados.</p>
                </li>
                <li>
                  <p className="main-text">Se reestructuró la página web convirtiéndola en una plataforma de información pública permitiendo con ello la fluidez de la información con instituciones, academia, gobierno, productores y público en general.</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  )
}