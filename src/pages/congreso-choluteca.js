import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'
import Choluteca from '../images/congreso-choluteca.jpg'
import HeroPage from '../components/heroPage'
import { FaArrowLeft, FaFilePdf } from 'react-icons/fa';
import { device } from '../styles/breakpoints'
import Sponsors from '../components/sponsors'

const Wrapper = styled.div`
  padding: 70px 0;
`

const ListBlockWrapper = styled.ul`
  .ListBlock {
    position: relative;
    padding: 10px 20px;
    margin-bottom: 20px;
    font-size: 14px;
    border: 1px solid #EAEDF3;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(108, 111, 115, 0.1);
    display: flex;
    .title-doc {
      color: #9EA0A5;
      flex: 0 0 75%;
      display: inline-block;
      padding-right: 20px;
    }
    .download-doc{
      border-left: 1px solid #EAEDF3;
      padding-left: 10px;
      display: inline-block;
      flex: 0 0 25%;
      display: flex;
      align-items: center;
      span {
        color: var(--blue);
        margin-right: 10px;
      }
    }
    @media ${device.tablet}{
      .title-doc{
        flex: 0 0 85%;
      }
      .download-doc{
        flex: 0 0 15%;
      }
    }
  }
`

export default () => {
  return (
    <Layout>
      <HeroPage title="Congreso de Choluteca" tags="Memorias Congreso" bgImage={Choluteca}/>
      <Wrapper>
        <Container>
         
        <h3>Documentos para leer o descargar</h3>

        <ListBlockWrapper>
          <li className="ListBlock">
            <span className="title-doc">CActitud, Productividad y Resultados para Empresarios de la leche por Sigfrido Burgos Flores, Experto en motivación</span>
            <a className="download-doc" target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/4e9Qc1aIhf7B5vLCUBL39x/8aee600068bfa2e0f8986d8086c3311d/Actitud__Productividad_y_Resultados_para_Empresarios_de_la_leche_por_Sigfrido_Burgos_Flores__Experto_en_motivacio__n..pdf">
              <span>Descargar</span>
              <FaFilePdf style={{fill: 'red', verticalAlign: 'middle'}}/>
            </a>
          </li>
          <li className="ListBlock">
            <span className="title-doc">utrición mineral y su impacto en el ganado lechero por Rodolfo Zumbado de ZINPRO</span>
            <a className="download-doc" target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/SnMCOBzm88qfwXD7kk66w/e714505503e8bbaa7e5b1cd325a416cc/Nutricio__n_mineral_y_su_impacto_en_el_ganado_lechero_por_Rodolfo_Zumbado_de_ZINPRO..pdf">
              <span>Descargar</span>
              <FaFilePdf style={{fill: 'red', verticalAlign: 'middle'}}/>
            </a>
          </li>
          <li className="ListBlock">
            <span className="title-doc">Revisión, casos y manejo del Síndrome de SILA por Julio Alberto Lemus, Experto en Nutrición de ALIANZA</span>
            <a className="download-doc" target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/wnFJ3Qa3EIx3bxgas2piX/ea5db0ebd01480581fe85762f226f694/Revisio__n__casos_y_manejo_del_Si__ndrome_de_SILA_por_Julio_Alberto_Lemus__Experto_en_Nutricio__n_de_ALIANZA..pdf">
              <span>Descargar</span>
              <FaFilePdf style={{fill: 'red', verticalAlign: 'middle'}}/>
            </a>
          </li>
          <li className="ListBlock">
            <span className="title-doc">Sistemas Silvopastoriles y Buenas Prácticas Ganaderas</span>
            <a className="download-doc" target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/1PnQ5DSFl6N4I5BHhGEsZU/78a6dedc66b2d57ebc9d842460e72d04/Sistemas_Silvopastoriles_y_Buenas_Pra__cticas_Ganaderas.pdf">
              <span>Descargar</span>
              <FaFilePdf style={{fill: 'red', verticalAlign: 'middle'}}/>
            </a>
          </li>
          <li className="ListBlock">
            <span className="title-doc">Transformando los desafíos actuales que enfrenta la industria láctea en oportunidades</span>
            <a className="download-doc" target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/1aw46dHoNjafultF8UW3OU/5c9a15f3a2aa18100471be6fa1fe5835/Transformando_los_desafi__os_actuales_que_enfrenta_la_industria_la__ctea_en_oportunidades.pdf">
              <span>Descargar</span>
              <FaFilePdf style={{fill: 'red', verticalAlign: 'middle'}}/>
            </a>
          </li>
          <li className="ListBlock">
            <span className="title-doc">Trastornos del ciclo estral en la hembra bovina</span>
            <a className="download-doc" target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/2u5aefjD3hJoivHIElw9gV/a56dcc9ab0b7132e5b1379d284c27a89/Trastornos_del_ciclo_estral_en_la_hembra_bovina.pdf">
              <span>Descargar</span>
              <FaFilePdf style={{fill: 'red', verticalAlign: 'middle'}}/>
            </a>
          </li>
          <li className="ListBlock">
            <span className="title-doc">Tratamiento de los Residuos Sólidos y su Aprovechamiento en Granjas Lecheras por Gabriel Fong Mazariegos</span>
            <a className="download-doc" target="_blank" rel="noopener noreferrer" href="https://downloads.ctfassets.net/zg4fwo9e8dmk/79B2Bt5w7uHZNBxcga7q7R/04d9a79dcd1535d623179af38a90110d/Tratamiento_de_los_Residuos_So__lidos_y_su_Aprovechamiento_en_Granjas_Lecheras_por_Gabriel_Fong_Mazariegos.pdf">
              <span>Descargar</span>
              <FaFilePdf style={{fill: 'red', verticalAlign: 'middle'}}/>
            </a>
          </li>

        </ListBlockWrapper>

        <h3>Patrocinan</h3>

        <Sponsors />

        <Link to="/memorias-congresos" style={{color: 'var(--green)'}}> <FaArrowLeft style={{verticalAlign: 'middle',marginRight: '5px'}}/> Regresar</Link>     

        </Container>
      </Wrapper>
    </Layout>
  )
}