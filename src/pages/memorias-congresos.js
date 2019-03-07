import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import Check from '../images/icons/check.svg'
import Crel from '../images/CREL.jpg' 
import HeroPage from '../components/heroPage'
import Slider from '../components/Slider';

import Abt from '../images/logos-olanchito/abt.png'
import Alliansa from '../images/logos-olanchito/alliansa.jpg'
import Aseal from '../images/logos-olanchito/aseal.jpg'
import Atlantida from '../images/logos-olanchito/atlantida.png'
import Bayer from '../images/logos-olanchito/bayer.png'
import Cadelga from '../images/logos-olanchito/cadelga.png'
import Cafogah from '../images/logos-olanchito/cafogah.jpg'
import Camosa from '../images/logos-olanchito/camosa.jpg'
import Catie from '../images/logos-olanchito/catie.jpg'
import Colono from '../images/logos-olanchito/colono.png'
import Confianza from '../images/logos-olanchito/confianza.png'
import Coolbot from '../images/logos-olanchito/coolbot.png'
import Disatyr from '../images/logos-olanchito/disatyr.jpg'
import Fenagh from '../images/logos-olanchito/fenagh.png'
import Finca from '../images/logos-olanchito/finca.png'
import Fn from '../images/logos-olanchito/fn.png'
import Induvet from '../images/logos-olanchito/induvet.jpg'
import Lacthosa from '../images/logos-olanchito/lacthosa.png'
import Leyde from '../images/logos-olanchito/leyde.png'
import Moncatex from '../images/logos-olanchito/moncatex.png'
import Moravia from '../images/logos-olanchito/moravia.jpg'
import Nativet from '../images/logos-olanchito/nativet.png'
import Pagro from '../images/logos-olanchito/pagro.jpg'
import Sag from '../images/logos-olanchito/sag.png'
import Sago from '../images/logos-olanchito/sago.png'
import Semex from '../images/logos-olanchito/semex.jpg'
import Solintsa from '../images/logos-olanchito/solintsa.jpg'
import TecAgricola from '../images/logos-olanchito/tecnologia-agricola.png'
import TecLechera from '../images/logos-olanchito/tecnologia-lechera.jpg'
import Tecun from '../images/logos-olanchito/tecun.jpg'
import UnahTec from '../images/logos-olanchito/unah-tec-agua.jpeg'
import Zamorano from '../images/logos-olanchito/zamorano.png'

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

const ConfigSliderContent = styled.div`
  width: 33.33%;
  height: 200px; 
  margin: 0 0.5em; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  
`

const images = [Abt, Alliansa, Aseal, Atlantida, Bayer, Cadelga, Cafogah, Camosa, Catie, Colono, Confianza, Coolbot, Disatyr, Fenagh, Finca, Fn, Induvet, Lacthosa, Leyde, Moncatex, Moravia, Nativet, Pagro, Sag, Sago, Semex, Solintsa, TecAgricola, TecLechera, Tecun, UnahTec, Zamorano];

export default () => {
  return (
    <Layout>
      <HeroPage title="Memorias Congreso" tags="documentación" bgImage={Crel}/>
      <Wrapper>
        <Container>
          
          <h3>I Congreso Nacional Lechero, San Pedro Sula, Cortés 2013</h3>

          <h3>II Congreso Nacional Lechero, Juticalpa, Olancho 2014</h3>

          <h3>III Congreso Nacional Lechero, Yoro 2015</h3>

          <h3>IV Congreso Nacional Lechero, San Pedro Sula 2016</h3>
         
          <h3>V Congreso Nacional Lechero, Olanchito, Yoro 2017</h3>
        
          <ul>
            <li>
              <a style={{color: "var(--blue)"}} target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/4Mj52QPjDgRekU2RS5IrPx/2340005cd673e49ce34a49b72e69a52c/Calidad_de_Leche_y_oportunidades_de_mejora_en_la_eficiencia_de_producir_leche_por_Zamorano.pdf">Calidad de Leche y oportunidades de mejora en la eficiencia de producir leche por Zamorano.</a>
            </li>
            <li>
              <a style={{color: "var(--blue)"}} target="_blank" rel="noopener noreferrer" href="https:/assets.ctfassets.net/zg4fwo9e8dmk/FadEhpFcKWXXDi7Pf7Yyd/82917c1c966570e84a0e990bf31ee4ab/Conservacion_del_suelo_por_David_Schvartzman.pdf">Conservacion del suelo por David Schvartzman.</a>
            </li>
            <li>
              <a style={{color: "var(--blue)"}} target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/3mKiROjI08byiT5UJzsrJ0/c92a7d36e3a57b6bf7a8b03c456d8590/Curva_de_acumulacio__n_y_utilizacio__n_forrajera_en_hi__bridos_de_Urochloa_de_u__ltima_generacio__n_por_A__lvaro_Bernal_Flor.pdf">Curva de acumulación y utilización forrajera en híbridos de Urochloa de última generación por Álvaro Bernal Flores.</a>
            </li>
            <li>
              <a style={{color: "var(--blue)"}} target="_blank" rel="noopener noreferrer" href="https://downloads.ctfassets.net/zg4fwo9e8dmk/20Ag6yjjQgCgvEzpWv27dE/8fbcbedde7e6b041533073fda56660f9/El_Perfil_Metabo__lico_una_alternativa_para_mejorar_la_fertilidad_del_hato_por_John_J._Hincapie__.pdf">El Perfil Metabólico una alternativa para mejorar la fertilidad del hato por John J. Hincapié.</a>
            </li>
            <li>
              <a style={{color: "var(--blue)"}} target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/hySQn0wurgVMkJNS2CsFN/64232e3f7cfcc6c7bcf6a2f0d97e1432/Factores_ambientales_que_afectan_algunos_indicadores_productivos_y_reproductivos_del_ganado_en_Honduras_por_Manuel_Antonio_V.pdf">Factores ambientales que afectan algunos indicadores productivos y reproductivos del ganado en Honduras por Manuel Antonio Valladares.</a>
            </li>
            <li>
              <a style={{color: "var(--blue)"}} target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/1OZV4GefbHP2mHEBukUtLg/5f11217925e505d7e8d701f564894f52/Herramientas_gene__ticas_de_seleccio__n_en_ganado_lechero_por_Mauricio_Chinchilla_Lizano.pdf">Herramientas genéticas de selección en ganado lechero por Mauricio Chinchilla Lizano.</a>
            </li>
            <li>
              <a style={{color: "var(--blue)"}} target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/7DvrCxwopldlxTMLj5d6uR/22f96c941e3ca902369862ad3e6d831e/Impacto_econo__mico_de_la_crianza_de_la_ternera_en_la_finca_por_Grupo_Nutec.pdf">Impacto económico de la crianza de la ternera en la finca por Grupo Nutec.</a>
            </li>
            <li>
              <a style={{color: "var(--blue)"}} target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/34vdc0UQCcvT0dka8BIE9s/7a2f9870cd8294fab8885b1fff1a310e/Los_Sistemas_Silvopastoriles_como_estrategia_para_mejorar_la_productividad__y_reducir_los_impactos_del_cambio_clima__tico_en.pdf">Los Sistemas Silvopastoriles como estrategia para mejorar la productividad y reducir los impactos del cambio climático en fincas ganaderas por CATIE.</a>
            </li>
            <li>
              <a style={{color: "var(--blue)"}} target="_blank" rel="noopener noreferrer" href="https://assets.ctfassets.net/zg4fwo9e8dmk/1J8NYyfnraQ4CQYMB4yKxo/538ad896824a2b63c9752c179fa99c84/Manejo_eficiente_de_la_nutricio__n_en_establos_lecheros_por_Jeffry_Sa__nchez_Salas__MSc.pdf">Manejo eficiente de la nutrición en establos lecheros por Jeffry Sánchez Salas, MSc.</a>
            </li>
            <li>
              <a style={{color: "var(--blue)"}} target="_blank" rel="noopener noreferrer" href="https://downloads.ctfassets.net/zg4fwo9e8dmk/3wMswr72WtWxHhscZH6fVF/baadc8944624aedcce94c8d1a1139e47/Minerales_en_la_produccio__n_bovina_por_Ivan_Dario_Pino_Giraldo.pdf">Minerales en la producción bovina por Ivan Dario Pino Giraldo.</a>
            </li>
          </ul>

          <Container>
            <h2 style={{textAlign: 'center', color: 'var(--blue)'}}>PATROCINADORES</h2>
            <div style={{margin: '60px 0'}}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }} />
              <Slider
                options={{
                  autoPlay: 4000,
                  pauseAutoPlayOnHover: true,
                  fullscreen: true,
                  adaptiveHeight: true,
                  groupCells: true,
                  pageDots: false
                }}
              >
                {images.map((image, index) => (
                  <ConfigSliderContent  key={index}>
                    <img src={image} alt=""/>
                  </ConfigSliderContent>
                ))}
              </Slider>
            </div>
          </Container>

          <h3>VI Congreso Nacional Lechero, Choluteca, Choluteca (2018)</h3>

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

          <h3>VII Congreso Nacional Lechero, La Ceiba, Atlantida (2019)</h3>

        </Container>
      </Wrapper>
    </Layout>
  )
}