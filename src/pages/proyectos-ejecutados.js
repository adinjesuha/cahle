import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import HeroPage from '../components/heroPage'
import Check from '../images/icons/check.svg'

import ProyectosEjecutados from '../images/proyectos-ejecutados.jpg'

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
      h2{
        margin: 0;
      }
    }
  }
  ul{
    list-style: none;
    margin: 0;
    li{
      position: relative;
      padding-left: 25px;
      margin-bottom: 5px;
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
    }
  }
`

export default () => {
  return (
    <Layout>
      <HeroPage title="Proyectos Ejecutados" tags="asociados" bgImage={ProyectosEjecutados}/>
      <Container>
        <Wrapper>
          <div className="content-list">
            <div className="content-number">
              <div className="circle">
                <span>1</span>
              </div>
            </div>
            <div className="content-data">
              <h2 className="sub-title">Fortalecimiento a los programas de control y erradicación de la encefalopatía espongiforme bovina (EEB)</h2>
              <p className="main-text main-text__dark">Donación de laboratorio para análisis de leche en SENASA.</p>
            </div>
          </div>
          <div className="content-list">
            <div className="content-number">
              <div className="circle">
                <span>2</span>
              </div>
            </div>
            <div className="content-data">
              <h2 className="sub-title">Inseminación Artificial</h2>
              <p className="main-text main-text__dark">Proyecto piloto en los departamentos de Yoro, Olancho y Francisco Morazán. (beneficiados 450 vientres).</p>
            </div>
          </div>
          <div className="content-list">
            <div className="content-number">
              <div className="circle">
                <span>3</span>
              </div>
            </div>
            <div className="content-data">
              <h2 className="sub-title">Fortalecimiento de los sistemas de certificación de inocuidad de los productos agropecuarios de los pequeños y medianos productores de SENASA</h2>
              <p className="main-text main-text__dark">Donación de un equipo de laboratorio (Contador de células somáticas).</p>
            </div>
          </div>
          <div className="content-list">
            <div className="content-number">
              <div className="circle">
                <span>4</span>
              </div>
            </div>
            <div className="content-data">
              <h2 className="sub-title">Apoyo a la promoción del desarrollo de la cadena láctea de las Américas</h2>
              <p className="main-text main-text__dark">Vinculación de las instituciones del sector lácteo panamericano en la 37 reunión del consejo directivo de FEPALE.</p>
            </div>
          </div>
          <div className="content-list">
            <div className="content-number">
              <div className="circle">
                <span>5</span>
              </div>
            </div>
            <div className="content-data">
              <h2 className="sub-title">Apoyo a la sostenibilidad energética del Centro de recolección y enfriamiento de leche</h2>
              <p className="main-text main-text__dark">La Patagonia. (Sistema fotovoltaico y 2 biodigestores).</p>
            </div>
          </div>
          <div className="content-list">
            <div className="content-number">
              <div className="circle">
                <span>6</span>
              </div>
            </div>
            <div className="content-data">
              <h2 className="sub-title">Incentivo económico para la obtención de animales y desarrollar el mejoramiento genético de los hatos</h2>
              <p className="main-text main-text__dark">Subasta ganadera organizada por CAFOGAH, 26 productores beneficiados. </p>
            </div>
          </div>
          <div className="content-list">
            <div className="content-number">
              <div className="circle">
                <span>7</span>
              </div>
            </div>
            <div className="content-data">
              <h2 className="sub-title">Asistencia técnica en alianza con Zamorano, SAGO y AGAA</h2>
              <p className="main-text main-text__dark">Unos 400 productores atendidos, capacitados en:</p>
              <ul>
                <li className="list">Nutrición y alimentación</li>
                <li className="list">Manejo eficiente de pastoreo</li>
                <li className="list">Sanidad</li>
                <li className="list">Reproducción</li>
                <li className="list">Administración (Registros de finca)</li>    
                <li className="list">Buenas prácticas de ordeño</li>
                <li className="list">Calidad de la leche</li>
                <li className="list">Diseño de instalaciones</li>
                <li className="list">Crianza y manejo de reemplazos</li>
              </ul>
            </div>
          </div>
          <div className="content-list">
            <div className="content-number">
              <div className="circle">
                <span>8</span>
              </div>
            </div>
            <div className="content-data">
              <h2 className="sub-title">Campaña ¡Sí a la leche!</h2>
              <p className="main-text main-text__dark">Publicidad (vallas publicitarias, espacios pagados en internet, radio y televisión).</p>
              <p className="main-text main-text__dark">Concursos (2 familias ganadoras).</p>
              <p className="main-text main-text__dark">Donación de libros (8,000 niños beneficiados).</p>
            </div>
          </div>
          <div className="content-list">
            <div className="content-number">
              <div className="circle">
                <span>9</span>
              </div>
            </div>
            <div className="content-data">
              <h2 className="sub-title">Inseminación Artificial. Donación de un termo de inseminación al CREL</h2>
              <p className="main-text main-text__dark">Sociedad Medina Fernández ubicado en San Antonio, Cortés, 20 productores beneficiados.</p>
            </div>
          </div>
        </Wrapper>
      </Container>
    </Layout>
  )
}