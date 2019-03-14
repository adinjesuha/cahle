import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import HeroPage from '../components/heroPage'
import { device } from '../styles/breakpoints'
import { FaCaretDown } from 'react-icons/fa'



import Beneficios from '../images/beneficios.jpg'

const Wrapper = styled.section`
  margin: 70px 0;
  .content-list{
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    .content-number {
      margin-right: 20px;
      .circle{
        width: 40px;
        height: 40px;
        border: 1px solid var(--green);
        border-radius: 50%;
        position: relative;
        background: var(--green);
        span{
          margin: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 14px;
          color: white;
          font-weight: 600;
        }
      }
    }
    .content-data {
      h3{
        margin: 0;
      }
    }
  }
`

const AccordionWrapper = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  border: 1px solid #ececec;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(108, 111, 115, 0.1);
  .accordion-title{
    padding: 30px;
    border-bottom: 1px solid #ececec;
  }
  .accordion-panel{
    padding: 30px 30px 40px;
    .accordion-item{
      border-radius: 0;
      padding: 15px 30px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background 0.3s ease;
      color: var(--green);
      background: var(--blue);
      &.is-expanded {
        background: #eff1f5;
        transition: background 0.3s ease;
      }
    }
    .accordion-content{
      overflow: hidden;
      max-height: 0;
      transition: max-height .5s;
      margin: 0;
      padding: 0 30px;
      border-radius: 4px;
      div {
        padding: 30px 0;
        margin: 0;
        opacity: 0;
        transition: .5s;
        > ol{
          padding-left: 20px;
          li{
            margin-bottom: 15px;
          }
        } 
      }
      &.is-expanded {
        max-height: 500px;
        overflow: hidden;
        div {
          opacity: 1;
        }
      }
    }
  }
  h3{
    margin: 0;
    font-weight: 400;
  }

`

class AccordionSection extends React.Component{

  state = {
    blockContent: false
  }

  toggle = ()  => {
    this.setState({ 
      blockContent : !this.state.blockContent
    });
  }

  render(){
    return(
      <AccordionWrapper>
        <div>
          <div className="accordion-title">
            <h3>¿Quieres afiliarte?...</h3>
          </div>
          <div className="accordion-panel">
            <div 
              onClick={this.toggle} 
              className={this.state.blockContent ? 'accordion-item is-expanded' : 'accordion-item'}
            >
              <h3>Conoce los requisitos</h3>
              <FaCaretDown />
            </div>
            <div className={this.state.blockContent ? 'accordion-content is-expanded' : 'accordion-content'}>
              <div>
                <ol>
                  <li>Ser productor, procesador, o comercializador de la leche.</li>
                  <li>Presentar solicitud de ingreso (original) por escrito a la Junta Directiva de la CAHLE, la que decidirá en sesión ordinaria su afiliación</li>
                  <li>Contar con el reconocimiento de al menos dos miembros de la Junta Directiva (firmantes de la solicitud de ingreso)</li>
                  <li>Fotografía</li>
                  <li>Copia de la Identidad</li>
                  <li>Copia de RTN</li>
                  <li>Copia del fierro</li>
                  <li>Pagar una cuota única de afiliación de L. 1,000.00 y una membresía mensual de L. 100.00 lo cual le da al asociado el derecho de participar en toda actividad económica educativa o social de la CAHLE</li>
                  <li>Presentar cualquier otra información requerida por la Junta Directiva</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </AccordionWrapper>
    )
  }
}

export default () => {
  return (
    <Layout>
      <HeroPage title="Beneficios de los Asociados" tags="asociados" bgImage={Beneficios}/>
      <Container>
        <Wrapper>
          <div className="content-list">
            <div className="content-number">
              <div className="circle">
                <span>1</span>
              </div>
            </div>
            <div className="content-data">
              <h3>Ferias y exposiciones: </h3>
              <p>Realizamos actos de presencia en los eventos que nuestros socios desarrollan y publicamos notas informativas de los mismos.</p>
            </div>
          </div>
          <div className="content-list">
            <div className="content-number">
              <div className="circle">
                <span>2</span>
              </div>
            </div>
            <div className="content-data">
              <h3>Soporte técnico: </h3>
              <p>Brindamos capacitaciones y asistencia técnica en formato abierto a productores individuales o grupos de organizaciones asociadas en temas de actualidad relacionados con el rubro. </p>
            </div>
          </div>
          <div className="content-list">
            <div className="content-number">
              <div className="circle">
                <span>3</span>
              </div>
            </div>
            <div className="content-data">
              <h3>Tarifas preferenciales: </h3>
              <p>Aplicables a todos nuestros eventos y/o servicios.</p>
            </div>
          </div>
          <div className="content-list">
            <div className="content-number">
              <div className="circle">
                <span>4</span>
              </div>
            </div>
            <div className="content-data">
              <h3>Representación: </h3>
              <p>Defendemos los intereses de nuestros agremiados, emitimos las posiciones de nuestros socios y buscamos espacios políticos para hacerlos valer. </p>
            </div>
          </div>
          <div className="content-list">
            <div className="content-number">
              <div className="circle">
                <span>5</span>
              </div>
            </div>
            <div className="content-data">
              <h3>Alianzas y convenios: </h3>
              <p>Gestionamos convenios con otras instituciones para facilitar que los proyectos de capacitación y asesoría tengan mayor cobertura y éxito. </p>
            </div>
          </div>
          <div className="content-list">
            <div className="content-number">
              <div className="circle">
                <span>6</span>
              </div>
            </div>
            <div className="content-data">
              <h3>Encuentros: </h3>
              <p>Realizamos encuentros entre productores con el objetivo de intercambiar experiencias y desarrollar el crecimiento del rubro.</p>
            </div>
          </div>
          <div className="content-list">
            <div className="content-number">
              <div className="circle">
                <span>7</span>
              </div>
            </div>
            <div className="content-data">
              <h3>Competitividad: </h3>
              <p>Financiamos la investigación científica con el objetivo de usar los hallazgos adquiridos para resolver los problemas y poder guiar al sector hacia una mejora en la productividad de las fincas.</p>
            </div>
          </div>
          <AccordionSection />
        </Wrapper>
      </Container>
    </Layout>
  )
}