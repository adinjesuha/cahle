import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/layout'
import Container from '../../components/container'
import Vision from '../../images/vision.jpg'
import { device } from '../../styles/breakpoints'
import { asociados } from '../../utils/menuConfig'
import LeftNav from '../../components/leftNav'
import Check from '../../images/icons/check.svg'


const Wrapper = styled.div`
  padding: 70px 0;
  text-align: justify;
  h2{
    margin: 30px auto 25px;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--main-blue);
  }
  ul{
    list-style: none;
    margin: 0;
  }
`
const Hero = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
  margin-top: -80px;
  background-image: url(${Vision});
  background-position: center center;
  background-size: cover;
  padding: 300px 0 50px;
  height:  60vh;
  &::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
  }
`
const Title = styled.h1`
  font-size: 54px;
  line-height: 54px;
  font-weight: bold;
  margin-bottom: 5px;
  position: relative;
`

const StyleLi = styled.li`
  position: relative;
  padding-left: 25px;
  margin-bottom: 20px;
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
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
`
const BoxRight = styled.div`
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  flex: 0 0 100%;
  @media ${device.tablet}{
    flex: 0 0 70%;
  }
`
const BoxLeft = styled.div`
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  flex: 0 0 0%;
  padding-right:60px;
  display: none;
  @media ${device.laptop}{
    display: block;
    flex: 0 0 30%;
  }
`
const NestedUl = styled.ul`
  padding-top: 25px;
  list-style: default;
`

export default () => {
  return (
    <Layout>
      <Hero>
        <Container>
          <Title>Beneficios</Title>
        </Container>
      </Hero>
      <Wrapper>
        <Container>
          <Flex>
            <BoxLeft>
              <LeftNav title="Asociados" data={asociados} />
            </BoxLeft>
            <BoxRight>
              <div>
                <h2>Beneficios de los Asociados</h2>
                <ul>
                  <StyleLi><b>Ferias y exposiciones:</b> Realizamos actos de presencia en los eventos que nuestros socios desarrollan y publicamos notas informativas de los mismos.</StyleLi>
                  <StyleLi><b>Soporte técnico:</b> Brindamos capacitaciones y asistencia técnica en formato abierto a productores individuales o grupos de organizaciones asociadas en temas de actualidad relacionados con el rubro. </StyleLi>
                  <StyleLi><b>Tarifas preferenciales:</b> Aplicables a todos nuestros eventos y/o servicios.</StyleLi>
                  <StyleLi><b>Representación:</b> Defendemos los intereses de nuestros agremiados, emitimos las posiciones de nuestros socios y buscamos espacios políticos para hacerlos valer. </StyleLi>
                  <StyleLi><b>Alianzas y convenios:</b> Gestionamos convenios con otras instituciones para facilitar que los proyectos de capacitación y asesoría tengan mayor cobertura y éxito. </StyleLi>
                  <StyleLi><b>Encuentros:</b> Realizamos encuentros entre productores con el objetivo de intercambiar experiencias y desarrollar el crecimiento del rubro.</StyleLi>
                  <StyleLi><b>Competitividad:</b> Financiamos la investigación científica con el objetivo de usar los hallazgos adquiridos para resolver los problemas y poder guiar al sector hacia una mejora en la productividad de las fincas.</StyleLi>
                </ul>
              </div>
              <div>
                <h2>Proyectos Ejecutados</h2>
                <ul>
                  <StyleLi><b>Fortalecimiento a los programas de control y erradicación de la encefalopatía espongiforme bovina (EEB):</b> Donación de laboratorio para análisis de leche en SENASA.</StyleLi>
                  <StyleLi><b>Inseminación Artificial:</b> Proyecto piloto en los departamentos de Yoro, Olancho y Francisco Morazán. (beneficiados 450 vientres).</StyleLi>
                  <StyleLi><b>Fortalecimiento de los sistemas de certificación de inocuidad de los productos agropecuarios de los pequeños y medianos productores de SENASA:</b> Donación de un equipo de laboratorio (Contador de células somáticas).</StyleLi>
                  <StyleLi><b> Apoyo a la promoción del desarrollo de la cadena láctea de las Américas:</b> (Vinculación de las instituciones del sector lácteo panamericano en la 37 reunión del consejo directivo de FEPALE).</StyleLi>
                  <StyleLi><b> Apoyo a la sostenibilidad energética del Centro de recolección y enfriamiento de leche:</b> La Patagonia. (Sistema fotovoltaico y 2 biodigestores).</StyleLi>
                  <StyleLi><b>Encuentros:</b> Realizamos encuentros entre productores con el objetivo de intercambiar experiencias y desarrollar el crecimiento del rubro.</StyleLi>
                  <StyleLi><b>Incentivo económico para la obtención de animales y desarrollar el mejoramiento genético de los hatos, (Subasta ganadera organizada por CAFOGA):</b> 26 productores beneficiados. </StyleLi>
                  <StyleLi>
                    <b>Asistencia técnica en alianza con Zamorano, SAGO y AGAA (unos 400 productores atendidos), capacitados en:</b>
                    <NestedUl>
                      <li>1. Nutrición y alimentación</li>
                      <li>2. Manejo eficiente de pastoreo</li>
                      <li>3. Sanidad</li>
                      <li>4. Reproducción</li>
                      <li>5. Administración (Registros de finca)</li>
                      <li>6. Buenas prácticas de ordeño</li>
                      <li>7. Calidad de la leche</li>
                      <li>8. Diseño de instalaciones</li>
                      <li>10. Crianza y manejo de reemplazos</li>
                    </NestedUl>  
                  </StyleLi>
                  <StyleLi>
                    <b>Campaña ¡Sí a la leche!</b>
                    <NestedUl>
                      <li>1. Publicidad (vallas publicitarias, espacios pagados en internet, radio y televisión).</li>
                      <li>2. Concursos (2 familias ganadoras)</li>
                      <li>3. Donación de libros (8,000 niños beneficiados)</li>
                    </NestedUl>
                  </StyleLi>
                  <StyleLi><b>Inseminación Artificial. Donación de un termo de inseminación al CREL:</b> Sociedad Medina Fernández ubicado en ubicado en San Antonio, Cortés. (20 productores beneficiados).</StyleLi>
                </ul>
              </div>
            </BoxRight>
          </Flex>
        </Container>
      </Wrapper>
    </Layout>
  )
}