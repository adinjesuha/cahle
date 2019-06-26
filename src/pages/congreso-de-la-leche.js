import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'
import HeroPage from '../components/heroPage'
import Tabs from '../components/Tabs/tabs'
import Image from '../components/image'
import SmallCard from '../components/smallCard'
import DownloadCard from '../components/downloadCard'
import { FaAngleRight } from 'react-icons/fa'
import { device } from '../styles/breakpoints'

const Wrapper = styled.div`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
  .sub-section {
    text-align: center;
    a {
      background: transparent;
      color: var(--active);
      border-radius: 4px;
      padding: 13px 15px;
      transition: background 0.3s ease;
      svg {
        vertical-align: middle;
        transition: all 0.3s ease;
      }
      &:hover {
        background: var(--anti-flash-white);
        svg {
          transform: translateX(3px);
        }
      }
      @media ${device.mobileL} {
        font-size: 26px;
      }
    }
  }
  .inscripciones-congreso {
    p {
      font-size: 14px !important;
      color: var(--text);
      strong {
        font-weight: 500;
      }
    }
    .divider-block {
      padding-right: 10px;
      margin-right: 10px;
      border-right: 1px solid var(--ceil);
    }
  }
  .float-left {
    width: 100%;
    float: left;
    margin: 0 20px 0 0;
    @media ${device.tablet} {
      width: 300px;
    }
    @media ${device.laptopL} {
      width: 400px;
    }
  }
`

export default () => {
  return (
    <Layout>
      <HeroPage title="VII Congreso de la Leche" bgImage={'congreso-ceiba'} />
      <Wrapper>
        <Container>
          <Tabs>
            <div label="Acerca del congreso">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <h2 className="main-title variant-title">
                    Acerca del congreso
                  </h2>
                  <div className="float-left">
                    <Image filename={'afiche-congreso-cahle'} />
                  </div>
                  <p className="main-text">
                    La cadena láctea es un importante segmento de la economía
                    nacional ya que constituye uno de los encadenamientos
                    productivos generando múltiples beneficios en el desarrollo
                    rural y fuentes laborales.
                  </p>

                  <p className="main-text">
                    Año con año la Cámara Hondureña de la Leche (CAHLE) realiza
                    el congreso nacional de la leche y reúne a cientos de
                    productores-ganaderos de todo el país, procesadoras de
                    leche, diferentes empresas del sector público y privadas
                    influyentes del sector agropecuario y agroindustrial en
                    cuanto a equipos, bienes y servicios se refiere, además del
                    mundo académico, técnicos y extensionistas en producción
                    primaria, altos ejecutivos y dirigentes gremiales,
                    investigadores, representantes del gobierno, entre otros.
                  </p>

                  <p className="main-text">
                    Por el tipo de público al que está dirigido el evento, se
                    convierte en un espacio idóneo para fortalecer la
                    cooperación entre la comunidad técnica y el mundo
                    empresarial, las relaciones interpersonales y promover la
                    transferencia de conocimientos, experiencias, retos y
                    oportunidades, así como la competitividad del sector lácteo
                    de Honduras orientando hacia mejorar la producción,
                    industrialización, comercialización, y consumo de la leche y
                    sus derivados.
                  </p>

                  <p className="main-text">
                    La organización del VII Congreso espera recibir a más de 500
                    invitados entre nacionales y extranjeros y contará con una
                    feria industrial y comercial en la que diferentes empresas
                    presentarán equipos y suministros novedosos para el sector.
                  </p>

                  <p className="main-text">
                    Además, el comité organizador del evento programará visitas
                    a fincas y establecimientos lecheros una vez finalizado el
                    Congreso. Es aquí donde los participantes podrán conocer la
                    realidad del sector primario recorriendo los paisajes de una
                    de las principales cuencas lechera del país.
                  </p>
                </div>
              </div>
            </div>
            <div label="Información Práctica">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <h2 className="main-title variant-title">
                    Información Práctica
                  </h2>
                  <h3 className="sub-title">SEDE</h3>
                  <p className="main-text">
                    El VII Congreso Nacional de la Leche tendrá lugar en la
                    ciudad de Ceiba, Departamento de Atlántida al Norte de
                    Honduras del 01 al 03 de agosto del 2019 con la
                    participación destacada de diferentes empresas y academia.
                    Además, contará con transmisión en vivo de las conferencias.
                  </p>
                  <p className="main-text">
                    Como siempre, contará con la participación de los
                    principales referentes de la cadena láctea del continente
                    americano y de otras partes del mundo.
                  </p>
                  <h3 className="sub-title">¿CÓMO LLEGAR?</h3>
                  <p className="main-text">
                    Campo AGAA, Predio ferial de CEIBA, CA-13, Atlántida.
                  </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/place/AGAA,+CA-13,+La+Ceiba/@15.7476818,-86.8487477,18z/data=!3m1!4b1!4m5!3m4!1s0x8f69009a078ee9cd:0x5c842dc9d69fdd8c!8m2!3d15.7480137!4d-86.8474445"
                  >
                    <Image filename={'mapa'} />
                  </a>
                  <p className="main-text">
                    Es el principal predio ferial de la ciudad. Posee una
                    superficie de más de _ hectáreas para la realización de
                    exposiciones, ferias y demás eventos, con una ubicación
                    privilegiada en la costa Norte del país.
                  </p>
                  <h3 className="sub-title">HOTELERIA</h3>
                  <p className="main-text">
                    Les ofrecemos las siguientes opciones de alojamiento:
                  </p>
                  <ul className="row">
                    <SmallCard
                      hotelName="hotel-pico-bonito"
                      title="Hotel Pico Bonito"
                      phones="3177-6836 / 2442-3021"
                      link="http://www.aparthotelpicobonito.com"
                    />
                    <SmallCard
                      hotelName="hotel-versalles"
                      title="Hotel Versalles"
                      phones="3225-1557 / 2440-0715"
                      link="http://www.hros.net/hotel/hn/hotelversalles.es.html"
                    />
                    <SmallCard
                      hotelName="hotel-las-hamacas"
                      title="Hotel Las Hamacas"
                      phones="2440-5298"
                      link="https://hotellashamacas.com/"
                    />
                    <SmallCard
                      hotelName="hotel-parteon"
                      title="Hotel Partenon Beach"
                      phones="3394-5140 / 2443-3343"
                      link="http://www.hotelpartenonbeach.com/"
                    />
                    <SmallCard
                      hotelName="hotel-la-quinta"
                      title="Hotel Quinta Real"
                      phones="2442-2220"
                      link="https://www.quintarealhotel.com/"
                    />
                    <SmallCard
                      hotelName="hotel-art-deco"
                      title="Hotel Art Deco Beach"
                      phones="2440-3311 Cel: 9661-1230"
                      link="http://hotelartdecobeach.com/"
                    />
                  </ul>
                  <h3 className="sub-title">ATRACCIONES</h3>
                  <a
                    className="animate-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.xplorhonduras.com/lugares-que-visitar-en-la-ceiba/"
                  >
                    Lugares que visitar en La Ceiba
                  </a>
                </div>
              </div>
            </div>
            <div label="Programa">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <h2 className="main-title variant-title">Programa</h2>
                  <DownloadCard
                    columns="col-lg-6"
                    link="https://assets.ctfassets.net/zg4fwo9e8dmk/5Q3YoBMdeNm0ncK5S6XUpr/3d602ca78644ee15bd562f62eeaac84d/Agenda_del_evento_completa_para_patrocinadores-1.pdf"
                    title="Programa del VII Congreso de a leche"
                  />
                </div>
              </div>
            </div>
            <div label="Trabajos">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <h2 className="main-title variant-title">Trabajos</h2>
                  <div className="row justify-content-center">
                    <DownloadCard
                      columns="col-lg-6"
                      link="https://assets.ctfassets.net/zg4fwo9e8dmk/7BwnOySMFtlYyEPUNKpWKe/585050ae2559df0d061ea80aee16b616/Normas_presentacio__n_de_trabajos.docx"
                      title="Normas de presentación de trabajos"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </Container>
        <div className="sub-section">
          <Container>
            <Link className="sub-title" to="/congreso-inscripcion">
              ¿Deseas Inscribirte? <FaAngleRight />
            </Link>
          </Container>
        </div>
      </Wrapper>
    </Layout>
  )
}
