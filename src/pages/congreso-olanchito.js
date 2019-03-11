import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'
import Olanchito from '../images/olanchito.jpg'
import HeroPage from '../components/heroPage'
import { FaArrowLeft, FaFilePdf } from 'react-icons/fa'
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
      <HeroPage title="Congreso de Olanchito" tags="Memorias Congreso" bgImage={Olanchito}/>
      <Wrapper>
        <Container>
         
          <h3>Documentos del Congreso</h3>
        
          <ListBlockWrapper>
            <li className="ListBlock">
              <span className="title-doc">Calidad de Leche y oportunidades de mejora en la eficiencia de producir leche por Zamorano</span>
              <a className="download-doc" target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/4Mj52QPjDgRekU2RS5IrPx/2340005cd673e49ce34a49b72e69a52c/Calidad_de_Leche_y_oportunidades_de_mejora_en_la_eficiencia_de_producir_leche_por_Zamorano.pdf">
                <span>Descargar</span>
                <FaFilePdf style={{fill: 'red', verticalAlign: 'middle'}}/>
              </a>
            </li>
            <li className="ListBlock">
              <span className="title-doc">Conservacion del suelo por David Schvartzman</span>
              <a className="download-doc" target="_blank" rel="noopener noreferrer" href="https:/assets.ctfassets.net/zg4fwo9e8dmk/FadEhpFcKWXXDi7Pf7Yyd/82917c1c966570e84a0e990bf31ee4ab/Conservacion_del_suelo_por_David_Schvartzman.pdf">
                <span>Descargar</span>
                <FaFilePdf style={{fill: 'red', verticalAlign: 'middle'}}/>
              </a>
            </li>
            <li className="ListBlock">
              <span className="title-doc">Curva de acumulación y utilización forrajera en híbridos de Urochloa de última generación por Álvaro Bernal Flores</span>
              <a className="download-doc" target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/3mKiROjI08byiT5UJzsrJ0/c92a7d36e3a57b6bf7a8b03c456d8590/Curva_de_acumulacio__n_y_utilizacio__n_forrajera_en_hi__bridos_de_Urochloa_de_u__ltima_generacio__n_por_A__lvaro_Bernal_Flor.pdf">
                <span>Descargar</span>
                <FaFilePdf style={{fill: 'red', verticalAlign: 'middle'}}/>
              </a>
            </li>
            <li className="ListBlock">
              <span className="title-doc">El Perfil Metabólico una alternativa para mejorar la fertilidad del hato por John J. Hincapié</span>
              <a className="download-doc" target="_blank" rel="noopener noreferrer" href="https://downloads.ctfassets.net/zg4fwo9e8dmk/20Ag6yjjQgCgvEzpWv27dE/8fbcbedde7e6b041533073fda56660f9/El_Perfil_Metabo__lico_una_alternativa_para_mejorar_la_fertilidad_del_hato_por_John_J._Hincapie__.pdf">
                <span>Descargar</span>
                <FaFilePdf style={{fill: 'red', verticalAlign: 'middle'}}/>
              </a>
            </li>
            <li className="ListBlock">
              <span className="title-doc">Factores ambientales que afectan algunos indicadores productivos y reproductivos del ganado en Honduras por Manuel Antonio Valladares.</span>
              <a className="download-doc" target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/hySQn0wurgVMkJNS2CsFN/64232e3f7cfcc6c7bcf6a2f0d97e1432/Factores_ambientales_que_afectan_algunos_indicadores_productivos_y_reproductivos_del_ganado_en_Honduras_por_Manuel_Antonio_V.pdf">
                <span>Descargar</span>
                <FaFilePdf style={{fill: 'red', verticalAlign: 'middle'}}/>
              </a>
            </li>
            <li className="ListBlock">
              <span className="title-doc">Herramientas genéticas de selección en ganado lechero por Mauricio Chinchilla Lizano</span>
              <a className="download-doc" target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/1OZV4GefbHP2mHEBukUtLg/5f11217925e505d7e8d701f564894f52/Herramientas_gene__ticas_de_seleccio__n_en_ganado_lechero_por_Mauricio_Chinchilla_Lizano.pdf">
                <span>Descargar</span>
                <FaFilePdf style={{fill: 'red', verticalAlign: 'middle'}}/>
              </a>
            </li>
            <li className="ListBlock">
              <span className="title-doc">Impacto económico de la crianza de la ternera en la finca por Grupo Nutec</span>
              <a className="download-doc" target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/7DvrCxwopldlxTMLj5d6uR/22f96c941e3ca902369862ad3e6d831e/Impacto_econo__mico_de_la_crianza_de_la_ternera_en_la_finca_por_Grupo_Nutec.pdf">
                <span>Descargar</span>
                <FaFilePdf style={{fill: 'red', verticalAlign: 'middle'}}/>
              </a>
            </li>
            <li className="ListBlock">
              <span className="title-doc">Los Sistemas Silvopastoriles como estrategia para mejorar la productividad y reducir los impactos del cambio climático en fincas ganaderas por CATIE </span>
              <a className="download-doc" target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/34vdc0UQCcvT0dka8BIE9s/7a2f9870cd8294fab8885b1fff1a310e/Los_Sistemas_Silvopastoriles_como_estrategia_para_mejorar_la_productividad__y_reducir_los_impactos_del_cambio_clima__tico_en.pdf">
                <span>Descargar</span>
                <FaFilePdf style={{fill: 'red', verticalAlign: 'middle'}}/>
              </a>
            </li>
            <li className="ListBlock">
              <span className="title-doc">Manejo eficiente de la nutrición en establos lecheros por Jeffry Sánchez Salas, MSc </span>
              <a className="download-doc" target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/1J8NYyfnraQ4CQYMB4yKxo/538ad896824a2b63c9752c179fa99c84/Manejo_eficiente_de_la_nutricio__n_en_establos_lecheros_por_Jeffry_Sa__nchez_Salas__MSc.pdf">
                <span>Descargar</span>
                <FaFilePdf style={{fill: 'red', verticalAlign: 'middle'}}/>
              </a>
            </li>
            <li className="ListBlock">
              <span className="title-doc">Minerales en la producción bovina por Ivan Dario Pino Giraldo</span>
              <a className="download-doc" target="_blank" rel="noopener noreferrer" href="https://downloads.ctfassets.net/zg4fwo9e8dmk/3wMswr72WtWxHhscZH6fVF/baadc8944624aedcce94c8d1a1139e47/Minerales_en_la_produccio__n_bovina_por_Ivan_Dario_Pino_Giraldo.pdf">
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