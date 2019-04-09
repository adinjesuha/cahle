import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'
import HeroPage from '../components/heroPage'
import Sponsors from '../components/sponsors'
import { FaFileDownload } from 'react-icons/fa';

const Wrapper = styled.section`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
    h2{
      margin-bottom: 50px;
    }
    .download-card{
    background: white;
    display: flex;
    margin-bottom: 20px;
    border-radius: 4px;
    min-height: 100px;
    align-items: center;
    p{
      font-size: 14px;
      padding: 0 10px;
      width: 75%; 
    }
    a{
      min-height: 100px;
      width: 25%; 
      background: var(--active);
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg{
        fill: white;
        width: 40px;
        height: 40px;
        transition: all 0.3s ease;
      }
      &:hover svg{
        fill: var(--oxford-blue);
      }
    }
  }
`

export default () => {
  return (
    <Layout>
      <HeroPage title="Congreso de Choluteca" tags="Memorias Congreso" bgImage={"congreso-choluteca"}/>
      <Wrapper>
        <Container>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2 className="main-title variant-title">Documentos para leer o descargar</h2>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/4e9Qc1aIhf7B5vLCUBL39x/8aee600068bfa2e0f8986d8086c3311d/Actitud__Productividad_y_Resultados_para_Empresarios_de_la_leche_por_Sigfrido_Burgos_Flores__Experto_en_motivacio__n..pdf">
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Actitud, Productividad y Resultados para Empresarios de la leche por Sigfrido Burgos Flores, Experto en motivación</p>
                  </div> 
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/SnMCOBzm88qfwXD7kk66w/e714505503e8bbaa7e5b1cd325a416cc/Nutricio__n_mineral_y_su_impacto_en_el_ganado_lechero_por_Rodolfo_Zumbado_de_ZINPRO..pdf">
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Nutrición mineral y su impacto en el ganado lechero por Rodolfo Zumbado de ZINPRO</p>
                  </div> 
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/wnFJ3Qa3EIx3bxgas2piX/ea5db0ebd01480581fe85762f226f694/Revisio__n__casos_y_manejo_del_Si__ndrome_de_SILA_por_Julio_Alberto_Lemus__Experto_en_Nutricio__n_de_ALIANZA..pdf">
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Revisión, casos y manejo del Síndrome de SILA por Julio Alberto Lemus, Experto en Nutrición de ALIANZA</p>
                  </div> 
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/1PnQ5DSFl6N4I5BHhGEsZU/78a6dedc66b2d57ebc9d842460e72d04/Sistemas_Silvopastoriles_y_Buenas_Pra__cticas_Ganaderas.pdf">
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Sistemas Silvopastoriles y Buenas Prácticas Ganaderas</p>
                  </div> 
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/1aw46dHoNjafultF8UW3OU/5c9a15f3a2aa18100471be6fa1fe5835/Transformando_los_desafi__os_actuales_que_enfrenta_la_industria_la__ctea_en_oportunidades.pdf">
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Transformando los desafíos actuales que enfrenta la industria láctea en oportunidades</p>
                  </div> 
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/2u5aefjD3hJoivHIElw9gV/a56dcc9ab0b7132e5b1379d284c27a89/Trastornos_del_ciclo_estral_en_la_hembra_bovina.pdf">
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Trastornos del ciclo estral en la hembra bovina</p>
                  </div> 
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="download-card">
                    <a target="_blank" rel="noopener noreferrer" href="https://downloads.ctfassets.net/zg4fwo9e8dmk/79B2Bt5w7uHZNBxcga7q7R/04d9a79dcd1535d623179af38a90110d/Tratamiento_de_los_Residuos_So__lidos_y_su_Aprovechamiento_en_Granjas_Lecheras_por_Gabriel_Fong_Mazariegos.pdf">
                      <FaFileDownload />
                    </a>
                    <p className="main-text">Tratamiento de los Residuos Sólidos y su Aprovechamiento en Granjas Lecheras por Gabriel Fong Mazariegos</p>
                  </div> 
                </div>
              </div>
              <h2 className="main-title variant-title">Patrocinan</h2>
              <Sponsors />
              <Link to="/memorias-congresos" className="animate-link">Regresar</Link>     
            </div>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  )
}