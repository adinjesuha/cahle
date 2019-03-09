import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'
import Check from '../images/icons/check.svg'
import Olanchito from '../images/olanchito.jpg'
import HeroPage from '../components/heroPage'
import { FaArrowLeft } from 'react-icons/fa';

const Wrapper = styled.div`
  padding: 70px 0;
  ul{
    list-style: none;
    margin: 0;
    li{
      position: relative;
      padding-left: 25px;
      margin-bottom: 20px;
      font-size: 14px;
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
      a{
        color: var(--base-medium);
      }
    }
  }
`

export default () => {
  return (
    <Layout>
      <HeroPage title="Congreso de Choluteca" tags="Memorias Congreso" bgImage={Olanchito}/>
      <Wrapper>
        <Container>
         
        <h3>Documentos para leer o descargar</h3>

        <ul>
          <li>
            <a style={{color: "var(--blue)"}} target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/4e9Qc1aIhf7B5vLCUBL39x/8aee600068bfa2e0f8986d8086c3311d/Actitud__Productividad_y_Resultados_para_Empresarios_de_la_leche_por_Sigfrido_Burgos_Flores__Experto_en_motivacio__n..pdf">Actitud, Productividad y Resultados para Empresarios de la leche por Sigfrido Burgos Flores, Experto en motivación.</a>
          </li>
          <li>
            <a style={{color: "var(--blue)"}} target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/SnMCOBzm88qfwXD7kk66w/e714505503e8bbaa7e5b1cd325a416cc/Nutricio__n_mineral_y_su_impacto_en_el_ganado_lechero_por_Rodolfo_Zumbado_de_ZINPRO..pdf">Nutrición mineral y su impacto en el ganado lechero por Rodolfo Zumbado de ZINPRO.</a>
          </li>
          <li>
            <a style={{color: "var(--blue)"}} target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/wnFJ3Qa3EIx3bxgas2piX/ea5db0ebd01480581fe85762f226f694/Revisio__n__casos_y_manejo_del_Si__ndrome_de_SILA_por_Julio_Alberto_Lemus__Experto_en_Nutricio__n_de_ALIANZA..pdf">Revisión, casos y manejo del Síndrome de SILA por Julio Alberto Lemus, Experto en Nutrición de ALIANZA.</a>
          </li>
          <li>
            <a style={{color: "var(--blue)"}} target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/1PnQ5DSFl6N4I5BHhGEsZU/78a6dedc66b2d57ebc9d842460e72d04/Sistemas_Silvopastoriles_y_Buenas_Pra__cticas_Ganaderas.pdf">Sistemas Silvopastoriles y Buenas Prácticas Ganaderas.</a>
          </li>
          <li>
            <a style={{color: "var(--blue)"}} target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/1aw46dHoNjafultF8UW3OU/5c9a15f3a2aa18100471be6fa1fe5835/Transformando_los_desafi__os_actuales_que_enfrenta_la_industria_la__ctea_en_oportunidades.pdf">Transformando los desafíos actuales que enfrenta la industria láctea en oportunidades.</a>
          </li>
          <li>
            <a style={{color: "var(--blue)"}} target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/2u5aefjD3hJoivHIElw9gV/a56dcc9ab0b7132e5b1379d284c27a89/Trastornos_del_ciclo_estral_en_la_hembra_bovina.pdf">Trastornos del ciclo estral en la hembra bovina.</a>
          </li>
          <li>
            <a style={{color: "var(--blue)"}} target="_blank" rel="noopener noreferrer" href="https://downloads.ctfassets.net/zg4fwo9e8dmk/79B2Bt5w7uHZNBxcga7q7R/04d9a79dcd1535d623179af38a90110d/Tratamiento_de_los_Residuos_So__lidos_y_su_Aprovechamiento_en_Granjas_Lecheras_por_Gabriel_Fong_Mazariegos.pdf">Tratamiento de los Residuos Sólidos y su Aprovechamiento en Granjas Lecheras por Gabriel Fong Mazariegos.</a>
          </li>
        </ul>

        <Link to="/memorias-congresos" style={{color: 'var(--green)'}}> <FaArrowLeft style={{verticalAlign: 'middle',marginRight: '5px'}}/> Regresar</Link>     

        </Container>
      </Wrapper>
    </Layout>
  )
}