import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import HeroPage from '../components/heroPage' 
import Tabs from '../components/Tabs/tabs'
import Image from '../components/image'

const Wrapper = styled.div`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
  .number{
    font-size: 14px;
    color: var(--mantis);
    margin-right: 5px;
    display: block;
  }
  .small-card{
    background: white;
    border-radius: 4px;
    display: flex;
    margin-bottom: 20px;
    .bg-image{
      width: 40%;
      height: 120px;
      .gatsby-image-wrapper{
        height: 100%;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
    }
    .data{
      padding: 20px 10px;
      h3, p{
        margin: 0;
      }
      h3, a{
        font-size: 14px;
      }
      p{
        font-size: 13px;
      }
    }
  }
`

export default () => {
  return (  
    <Layout>
      <HeroPage title="VII Congreso de la Leche" bgImage={"objetivos"}/>
      <Wrapper>
        <Container>
            <Tabs>
              <div label="Acerca del congreso">
                <div className="row justify-content-center">
                  <div className="col-lg-9">
                    <h2 className="main-title variant-title">Acerca del congreso</h2>
                    <p className="main-text">La cadena láctea es un importante segmento de la economía nacional ya que constituye uno de los encadenamientos productivos generando múltiples beneficios en el desarrollo rural y fuentes laborales.</p>

                    <p className="main-text">Año con año la Cámara Hondureña de la Leche (CAHLE) realiza el congreso nacional de la leche y reúne a cientos de productores-ganaderos de todo el país, procesadoras de leche, diferentes empresas del sector público y privadas influyentes del sector agropecuario y agroindustrial en cuanto a equipos, bienes y servicios se refiere, además del mundo académico, técnicos y extensionistas en producción primaria, altos ejecutivos y dirigentes gremiales, investigadores, representantes del gobierno, entre otros.</p>

                    <p className="main-text">Por el tipo de público al que está dirigido el evento, se convierte en un espacio idóneo para fortalecer la cooperación entre la comunidad técnica y el mundo empresarial, las relaciones interpersonales y promover la transferencia de conocimientos, experiencias, retos y oportunidades, así como la competitividad del sector lácteo de Honduras orientando hacia mejorar la producción, industrialización, comercialización, y consumo de la leche y sus derivados.</p>

                    <p className="main-text">La organización del VII Congreso espera recibir a más de 500 invitados entre nacionales y extranjeros y contará con una feria industrial y comercial en la que diferentes empresas presentarán equipos y suministros novedosos para el sector.</p>

                    <p className="main-text">Además, el comité organizador del evento programará visitas a fincas y establecimientos lecheros una vez finalizado el Congreso. Es aquí donde los participantes podrán conocer la realidad del sector primario recorriendo los paisajes de una de las principales cuencas lechera del país.</p>
                  </div>
                </div>
              </div>
              <div label="Información Práctica">
                <div className="row justify-content-center">
                  <div className="col-lg-9">
                    <h2 className="main-title variant-title">Información Práctica</h2>
                    <h3 className="sub-title">SEDE</h3>
                    <p className="main-text">El VII Congreso Nacional de la Leche tendrá lugar en la ciudad de Ceiba, Departamento de Atlántida al Norte de Honduras del 01 al 03 de agosto del 2019 con la participación destacada de diferentes empresas y academia. Además, contará con transmisión en vivo de las conferencias.</p>
                    <p className="main-text">Como siempre, contará con la participación de los principales referentes de la cadena láctea del continente americano y de otras partes del mundo.</p>
                    <h3 className="sub-title">¿CÓMO LLEGAR?</h3>
                    <p className="main-text">Campo AGAA, Predio ferial de CEIBA, CA-13, Atlántida.</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/AGAA,+CA-13,+La+Ceiba/@15.7476818,-86.8487477,18z/data=!3m1!4b1!4m5!3m4!1s0x8f69009a078ee9cd:0x5c842dc9d69fdd8c!8m2!3d15.7480137!4d-86.8474445">
                      <Image filename={"mapa"}/>
                    </a>
                    <p className="main-text">Es el principal predio ferial de la ciudad. Posee una superficie de más de _ hectáreas para la realización de exposiciones, ferias y demás eventos, con una ubicación privilegiada en la costa Norte del país.</p>
                  </div>
                </div>
              </div>
              <div label="Hotelería y Atracciones">
                <div className="row justify-content-center">
                  <div className="col-lg-9">
                    <h2 className="main-title variant-title">Hotelería y Atracciones</h2>
                    <h3 className="sub-title">HOTELERÍA</h3>
                    <p className="main-text">Les ofrecemos las siguientes opciones de alojamiento:</p>
                    <ul className="row">
                      <li className="col-lg-6">
                        <div className="small-card">
                          <div className="bg-image">
                            <Image filename={"hotel-pico-bonito"}/>
                          </div>
                          <div className="data">
                            <h3 className="sub-title">Hotel Pico Bonito</h3>
                            <p className="main-text">Teléfonos: 3177-6836 / 2442-3021</p>
                            <a className="animate-link" target="_blank" rel="noopener noreferrer" href="http://www.aparthotelpicobonito.com">
                              visitar el sitio web
                            </a>
                          </div>  
                        </div>
                      </li>
                      <li className="col-lg-6">
                        <div className="small-card">
                          <div className="bg-image">
                            <Image filename={"hotel-versalles"}/>
                          </div>
                          <div className="data">
                            <h3 className="sub-title">Hotel Versalles</h3>
                            <p className="main-text">Teléfonos: 3225-1557 / 2440-0715</p>
                            <a className="animate-link" target="_blank" rel="noopener noreferrer" href="http://www.hros.net/hotel/hn/hotelversalles.es.html">
                              visitar el sitio web
                            </a>
                          </div>  
                        </div>
                      </li>
                      <li className="col-lg-6">
                        <div className="small-card">
                          <div className="bg-image">
                            <Image filename={"hotel-las-hamacas"}/>
                          </div>
                          <div className="data">
                            <h3 className="sub-title">Hotel Las Hamacas</h3>
                            <p className="main-text">Teléfonos: 2440-5298</p>
                            <a className="animate-link" target="_blank" rel="noopener noreferrer" href="https://hotellashamacas.com/">
                              visitar el sitio web
                            </a>
                          </div>  
                        </div>
                      </li>
                      <li className="col-lg-6">
                        <div className="small-card">
                          <div className="bg-image">
                            <Image filename={"hotel-parteon"}/>
                          </div>
                          <div className="data">
                            <h3 className="sub-title">Hotel Partenon Beach</h3>
                            <p className="main-text">Teléfonos: 3394-5140 / 2443-3343</p>
                            <a className="animate-link" target="_blank" rel="noopener noreferrer" href="http://www.hotelpartenonbeach.com/">
                              visitar el sitio web
                            </a>
                          </div>  
                        </div>
                      </li>
                      <li className="col-lg-6">
                        <div className="small-card">
                          <div className="bg-image">
                            <Image filename={"hotel-art-deco"}/>
                          </div>
                          <div className="data">
                            <h3 className="sub-title">Hotel Art Deco Beach</h3>
                            <p className="main-text">Teléfonos: 2442-2220</p>
                            <a className="animate-link" target="_blank" rel="noopener noreferrer" href="http://hotelartdecobeach.com/">
                              visitar el sitio web
                            </a>
                          </div>  
                        </div>
                      </li>
                      <li className="col-lg-6">
                        <div className="small-card">
                          <div className="bg-image">
                            <Image filename={"hotel-la-quinta"}/>
                          </div>
                          <div className="data">
                            <h3 className="sub-title">Hotel Quinta Real</h3>
                            <p className="main-text">Teléfonos: 2440-3311 Cel: 9661-1230</p>
                            <a className="animate-link" target="_blank" rel="noopener noreferrer" href="http://hotelartdecobeach.com/">
                              visitar el sitio web
                            </a>
                          </div>  
                        </div>
                      </li>
                    </ul>
                    <h3 className="sub-title">ATRACCIONES</h3>
                    <a className="animate-link" target="_blank" rel="noopener noreferrer" href="http://www.xplorhonduras.com/lugares-que-visitar-en-la-ceiba/">Lugares que visitar en La Ceiba</a>
                  </div>
                </div>
              </div>
            </Tabs>
        </Container>
      </Wrapper>
    </Layout>
  )
}