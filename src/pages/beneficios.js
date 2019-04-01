import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import HeroPage from '../components/heroPage'
import { FaAngleDown } from 'react-icons/fa'

import Beneficios from '../images/beneficios.jpg'
import { device } from '../styles/breakpoints'

const Wrapper = styled.section`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
  .force-margin{
    margin-bottom: 30px;
  }
  .number{
    font-size: 14px;
    color: var(--mantis);
    margin-right: 5px;
    display: block;
  }
  .content-block{
    background-color: white;
    height: 100%;
    padding: 25px 20px;
    border-radius: 4px;
    >h3{
      margin-top: 0;
    }
    > p{
      margin-bottom: 0;
    }
    @media ${device.laptop}{
      min-height: 300px;
    }
  }
`

const CTASection = styled.section`
  background-color: var(--anti-flash-white);
  .accordion-title{
    padding: 30px;
    text-align: center;
    > h2{
      color: var(--oxford-blue);
    }
  }
`

const AccordionWrapper = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  border: 1px solid var(--light);
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(108, 111, 115, 0.1);
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
      background: var(--light);
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
          <div className="accordion-panel">
            <div 
              onClick={this.toggle} 
              className={this.state.blockContent ? 'accordion-item is-expanded' : 'accordion-item'}
            >
              <h2 className="sub-title sub-title__small">Conoce los requisitos</h2>
              <FaAngleDown />
            </div>
            <div className={this.state.blockContent ? 'accordion-content is-expanded' : 'accordion-content'}>
              <div>
                <ol>
                  <li className="list">Ser productor, procesador, o comercializador de la leche.</li>
                  <li className="list">Presentar solicitud de ingreso (original) por escrito a la Junta Directiva de la CAHLE, la que decidirá en sesión ordinaria su afiliación</li>
                  <li className="list">Contar con el reconocimiento de al menos dos miembros de la Junta Directiva (firmantes de la solicitud de ingreso)</li>
                  <li className="list">Fotografía</li>
                  <li className="list">Copia de la Identidad</li>
                  <li className="list">Copia de RTN</li>
                  <li className="list">Copia del fierro</li>
                  <li className="list">Pagar una cuota única de afiliación de L. 1,000.00 y una membresía mensual de L. 100.00 lo cual le da al asociado el derecho de participar en toda actividad económica educativa o social de la CAHLE</li>
                  <li className="list">Presentar cualquier otra información requerida por la Junta Directiva</li>
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
      <Wrapper>
        <Container>
          <div className="row">
            <div className="col-lg-4 force-margin">
              <div className="content-block">
                <h3 className="sub-title"><span className="number">01</span>Ferias y exposiciones</h3>
                <p className="main-text main-text__dark">Realizamos actos de presencia en los eventos que nuestros socios desarrollan y publicamos notas informativas de los mismos.</p>
              </div>
            </div>
            <div className="col-lg-4 force-margin">   
              <div className="content-block">
                <h3 className="sub-title"><span className="number">02</span>Soporte técnico</h3>
                <p className="main-text">Brindamos capacitaciones y asistencia técnica en formato abierto a productores individuales o grupos de organizaciones asociadas en temas de actualidad relacionados con el rubro. </p>
              </div> 
            </div>
            <div className="col-lg-4 force-margin">
              <div className="content-block">
                <h3 className="sub-title"><span className="number">03</span>Tarifas preferenciales</h3>
                <p className="main-text">Aplicables a todos nuestros eventos y/o servicios.</p>
              </div>
            </div>
            <div className="col-lg-4 force-margin">
              <div className="content-block">
                <h3 className="sub-title"><span className="number">04</span>Representación</h3>
                <p className="main-text">Defendemos los intereses de nuestros agremiados, emitimos las posiciones de nuestros socios y buscamos espacios políticos para hacerlos valer. </p>
              </div>
            </div>
            <div className="col-lg-4 force-margin">
              <div className="content-block">
                <h3 className="sub-title"><span className="number">05</span>Alianzas y convenios</h3>
                <p className="main-text">Gestionamos convenios con otras instituciones para facilitar que los proyectos de capacitación y asesoría tengan mayor cobertura y éxito. </p>
              </div>
            </div>
            <div className="col-lg-4 force-margin">
              <div className="content-block">
                <h3 className="sub-title"><span className="number">06</span>Encuentros</h3>
                <p className="main-text">Realizamos encuentros entre productores con el objetivo de intercambiar experiencias y desarrollar el crecimiento del rubro.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="content-block">
                <h3 className="sub-title"><span className="number">07</span>Competitividad</h3>
                <p className="main-text">Financiamos la investigación científica con el objetivo de usar los hallazgos adquiridos para resolver los problemas y poder guiar al sector hacia una mejora en la productividad de las fincas.</p>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
      <CTASection>
        <div className="accordion-title">
          <h2 className="main-title">¿Quieres afiliarte?</h2>
        </div>
        <AccordionSection />
      </CTASection>
    </Layout>
  )
}