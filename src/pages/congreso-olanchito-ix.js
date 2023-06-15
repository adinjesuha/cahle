import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'
import HeroPage from '../components/heroPage'
import Sponsors from '../components/sponsors'
import { FaFileDownload } from 'react-icons/fa'

import { sponsorOlanchitoIX } from '../utils/imageConfig'

const Wrapper = styled.section`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
  h2 {
    margin-bottom: 50px;
  }
  .download-card {
    background: white;
    display: flex;
    margin-bottom: 20px;
    border-radius: 4px;
    min-height: 100px;
    align-items: center;
    p {
      font-size: 14px;
      padding: 0 10px;
      width: 75%;
    }
    a {
      min-height: 100px;
      width: 25%;
      background: var(--active);
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        fill: white;
        width: 40px;
        height: 40px;
        transition: all 0.3s ease;
      }
      &:hover svg {
        fill: var(--oxford-blue);
      }
    }
  }
`

export default () => {
  return (
    <Layout>
      <HeroPage
        title="Olanchito, Yoro"
        tags="Memorias Congreso"
        bgImage={'olanchito-congreso-ix'}
      />
      <Wrapper>
        <Container>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2 className="main-title variant-title">
                Documentos para leer o descargar
              </h2>
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <h3 style={{'textAlign': 'center', 'marginBottom': '2rem'}}>Presentaciones conjuntas (productores y procesadores de  leche)</h3>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/6niWzP56DbJkTV7BB82zkI/6ba57fe34e704421b2da223113771d1c/Amenaza_global_del_sector-escacez_de_materia_prima_para_la_alimentacion_de_los_animales.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Amenaza global del Sector: Escasez de materia prima para la alimentación de los animales</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/5XP0XitlcZSweCIOwS8g02/c2415a75dfaf4f64a086cf008b4543c9/Consejos_para_un_buen_dise___o_de_instalaciones_dirigidas_a_vacas.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Consejos para un buen diseคo de instalaciones dirigidas a vacas</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/6oRlsiBau2oZFF0SMfQEZh/23384e66fb0c22e5f089dda66a32cbe7/Enfermedades_metab___licas_y_rendimiento_reproductivo_de_la_vaca_lechera.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Enfermedades metabólicas y rendimiento reproductivo de la vaca lechera</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://downloads.ctfassets.net/zg4fwo9e8dmk/214h7sYRxo5EVb9wyFxp3F/fe2d214bdeb060cd357638d86cb69f0b/Estamos_alimentando_adecuadamente_la_vaca_lactante__que_est___gestante__y_la_vaca_seca.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Estamos alimentando adecuadamente la vaca lactante (que est gestante) y la vaca seca</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/2n0tHvV8LX5TijpyNyvwMT/f070e1dd1879e2baa2e99078ba41a779/Importancia_del_pH_ruminal_en_la_producci___n_de_leche.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Importancia del pH ruminal en la producciขn de leche</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/71zdWNma6BIzx8bPpR6h2Z/9f353c6358686b901d7b3897d9c2caff/La_rumia_y_los_complementos_nutricionales.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">La rumia y los complementos nutricionales</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/SSRT7GPrqFNSGaTCIECHO/df4d91157791790c05b79a1d13bd9ac1/Nutrici___n_mineral_y_respuesta_inmune_frente_a_la_mastitis.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Nutriciขn mineral y respuesta inmune frente a la mastitis</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/2FqYamNjpbzqKBKHQDvYpr/8e9f018f271e271d849c74b1008b1e7e/Programas_de_salud_para_ganaderia_como_herramienta_de_prevenci___n.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Programas de salud para ganaderia como herramienta de prevención</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/46j9iUMmUASuZTbqH2S5vB/5144cd8284d8b8e10cb9e7bc3b6a8754/Situaci___n_global_y_desaf___os_para_el_sector_l__cteo_hondure___o.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Situación global y desafíos para el sector lácteo hondureño</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/7EHkXhZXbZfOoc4LFmxqQo/4dc521adcf93eb9cc8796458665c8c9c/Tecnolog__as_medioambientales_acopladas_a_la_ganaderia_de_hoy.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Tecnologías medioambientales acopladas a la ganadería de hoy</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assets.ctfassets.net/zg4fwo9e8dmk/186VYeJD5mCBrA21SMq8Dr/1c719348db5aaece27fbd0e6cac179c8/Uso_racional_de_medicamentos._Usemos_los_antibia__ticos_con_cabeza_.pdf"
                    >
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Uso racional de medicamentos. Usemos los antibióticos con cabeza!</p>
                  </div>
                </div>
              </div>

              <h2 className="main-title variant-title">Patrocinadores</h2>
              <Sponsors sponsors={sponsorOlanchitoIX} />

              <Link to="/memorias-congresos" className="animate-link">
                Regresar
              </Link>
            </div>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  )
}
