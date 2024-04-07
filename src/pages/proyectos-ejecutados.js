import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

import Layout from '../components/layout'
import Container from '../components/container'
import HeroPage from '../components/heroPage'

const Wrapper = styled.section`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
  ul.lists{
    font-family: Roboto;
    color: var(--text);
    margin-left: 15px;
    list-style: disc;
  }
`

export default () => {
  return (
    <Layout>
      <HeroPage title="Proyectos Ejecutados" tags="asociados" bgImage={"proyectos-ejecutados"}/>
      <Wrapper>
        <Container>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <ul className="bibliography">
                <li>
                  <p className="main-text"><strong>Fortalecimiento a los programas de control y erradicación de la encefalopatía espongiforme bovina (EEB)</strong></p>
                  <p className="main-text">Donación de laboratorio para análisis de leche en SENASA.</p>
                </li>
                <li>
                  <p className="main-text"><strong>Inseminación Artificial</strong></p>
                  <p className="main-text">Proyecto piloto en los departamentos de Yoro, Olancho y Francisco Morazán. (beneficiados 450 vientres).</p>
                </li>
                <li>
                  <p className="main-text"><strong>Fortalecimiento de los sistemas de certificación de inocuidad de los productos agropecuarios de los pequeños y medianos productores de SENASA</strong></p>
                  <p className="main-text">Donación de un equipo de laboratorio (Contador de células somáticas).</p>
                </li>
                <li>
                  <p className="main-text"><strong>Apoyo a la promoción del desarrollo de la cadena láctea de las Américas</strong></p>
                  <p className="main-text">Vinculación de las instituciones del sector lácteo panamericano en la 37 reunión del consejo directivo de FEPALE.</p>
                </li>
                <li>
                  <p className="main-text"><strong>Apoyo a la sostenibilidad energética del Centro de recolección y enfriamiento de leche</strong></p>
                  <p className="main-text">La Patagonia. (Sistema fotovoltaico y 2 biodigestores).</p>
                </li>
                <li>
                  <p className="main-text"><strong>Incentivo económico para la obtención de animales y desarrollar el mejoramiento genético de los hatos</strong></p>
                  <p className="main-text">Subasta ganadera organizada por CAFOGAH, 26 productores beneficiados.{" "}
                    <Link className="animate-link" to="/noticias-y-eventos/cahle-financia-genetica-bovina">
                      <strong>Leer noticia</strong>
                    </Link>
                  </p>
                  <p className="main-text">Segunda Gran Subasta de Genética Bovina.{" "}
                    <Link className="animate-link" to="/noticias-y-eventos/segunda-gran-subasta-de-genetica-bovina">
                      <strong>Leer noticia</strong>
                    </Link>
                  </p>
                </li>
                <li>
                  <p className="main-text"><strong>Asistencia técnica en alianza con Zamorano, SAGO y AGAA</strong></p>
                  <p className="main-text">Unos 400 productores atendidos, capacitados en:</p>
                  <ul className="lists">
                    <li>Nutrición y alimentación</li>
                    <li>Manejo eficiente de pastoreo</li>
                    <li>Sanidad</li>
                    <li>Reproducción</li>
                    <li>Administración (Registros de finca)</li>    
                    <li>Buenas prácticas de ordeño</li>
                    <li>Calidad de la leche</li>
                    <li>Diseño de instalaciones</li>
                    <li>Crianza y manejo de reemplazos</li>
                  </ul>
                </li>
                <li>
                  <p className="main-text"><strong>Campaña ¡Sí a la leche!</strong></p>
                  <p className="main-text">Publicidad (vallas publicitarias, espacios pagados en internet, radio y televisión).</p>
                  <p className="main-text">Concursos (2 familias ganadoras).</p>
                  <p className="main-text">Donación de libros (8,000 niños beneficiados).</p>
                  <Link className="animate-link" to="/noticias-y-eventos/fomentando-el-consumo-de-leche-en-los-infantes">Leer noticia</Link>
                  <p className="main-text">Donación de 100,000 litros de leche <strong>=</strong> a 100,000 sonrisas.</p>
                  <Link className="animate-link" to="/noticias-y-eventos/100-mil-vasos-de-leche-100-mil-sonrisas">Leer noticia</Link>
                </li>
                <li>
                  <p className="main-text"><strong>Inseminación Artificial. Donación de un termo de inseminación al CREL</strong></p>
                  <p className="main-text main-text__dark">Sociedad Medina Fernández ubicado en San Antonio, Cortés, 20 productores beneficiados.</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  )
}