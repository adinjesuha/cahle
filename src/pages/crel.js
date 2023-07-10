import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import HeroPage from '../components/heroPage'
import Creles from '../images/creles.png'

const Wrapper = styled.div`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
  .cell{
    color: var(--text);
    font-family: roboto;
  }
  .header > .cell{
    color: white !important;
    font-family: Montserrat;
  }
`

export default () => {
  return (
    <Layout>
      <HeroPage title="CREL" tags="Asociados" bgImage={"crel-image"}/>
      <Wrapper>
        <Container>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h3 className="sub-title">¿Qué es un centro de recolección y enfriamiento de leche (CREL)?</h3>
              <p className="main-text">Un CREL es una estructura productiva y organizativa de propiedad colectiva creada por una organización de ganaderos con la finalidad de tener un espacio dónde recolectar y acopiar la leche de sus fincas para la comercialización en frío a otra empresa procesadora de lácteos y así obtener un mejor precio de venta. La organización favorece la reducción de costos fijos de producción, ya que el transporte del producto primario se realiza en conjunto y los insumos se adquieren en grandes volúmenes a un menor precio. Esto permite mejorar la rentabilidad y la sostenibilidad de las empresas ganaderas que contribuyen al bienestar de las comunidades rurales (Guerra et al. 2011).</p>
            </div>
            <div className="col-lg-10">
              <h3 className="sub-title">¿Cómo surge la idea de los centros de acopio?</h3>
              <p className="main-text main-text__dark">El sector lácteo en los países en desarrollo a menudo fue dirigido en el pasado por una industria lechera central estatal o controlada por el estado de grandes proporciones. Una creciente tendencia hacia la privatización ha resultado en la desregulación de aquellas industrias ineficientes y mal administradas, ofreciendo una ventana de oportunidad para la entrada de la industria privada en el sector lechero. Esta singular combinación de circunstancias ha representado tanto desafíos como oportunidades para los productores y procesadores de pequeña escala en los países en desarrollo (Bennett et al. 2001 citado por Guerra et al. 2011).</p>
              <p className="main-text">Diferentes investigadores expresan que existe un mercado siempre creciente en los centros urbanos. El crecimiento de las poblaciones urbanas, los mejores niveles de educación y el aumento del ingreso, desembocaron en un masivo incremento de la demanda de productos lácteos. El desafío es organizar el acopio de leche segura y de buena calidad y proveer una oferta constante de leche y productos lácteos de calidad que satisfaga las demandas del mercado, lo que se logra en parte con los CREL. A la vez, deberá satisfacerse la demanda del mercado con productos con valor agregado destinados a consumidores con diversos niveles de ingreso. Los gobiernos por su parte, buscan modos de reducir las importaciones de alimentos que pesan sobremanera en los presupuestos nacionales y, especialmente, en las escasas divisas extranjeras (Guerra et al. 2011).</p>
            </div>
            <div className="col-lg-10">
              <h3 className="sub-title">Antecedentes</h3>
              <p className="main-text">En el año 2008 el precio de la leche alcanzó niveles exorbitantes, no obstante, estos cayeron a fin de año por la demanda en países como India y China. Finalizando el 2009 el precio repuntó nuevamente por varias razones: 1) la recuperación de la confianza entre los consumidores chinos después de la crisis provocada por la contaminación con melamina1 de las fórmulas lácteas para infantes, a fines del 2008; 2) la contracción de los suministros procedentes de Oceanía y 3) las compras sostenidas por parte de varios países asiáticos y de algunos países exportadores de petróleo (FAO 2010). Estos precios auspiciaron el interés de grandes empresas procesadoras de lácteos en Centroamérica, por establecer relaciones contractuales con grupos de productores organizados para comprarles el volumen total de leche o parte de esta. Estas alianzas dieron origen a los centros de recolección y enfriamiento de leche (CREL) en Guatemala, Honduras, Nicaragua y Costa Rica (Barrios 2008, Prins et ál. 2008, López Soriano 2009).</p>
              <p className="main-text">En Honduras se crearon por iniciativa de las organizaciones de productores con apoyo de la industria láctea y financiado por el gobierno de los Estados Unidos. El proyecto, inició en el 2001 siendo ejecutado por la cooperativa Land O'Lakes. Los objetivos de esta iniciativa básicamente radicaron en: aumentar los ingresos y empleo, mejorar el acceso a los mercados y la competitividad del sector, involucrar a la industria láctea de EE.UU. en la prestación de asistencia técnica y comercial en actividades del país y / o región de acogida, mejorar la nutrición de los niños y las mujeres embarazadas y fortalecer las organizaciones regionales del sector lácteo.</p>

              <p className="main-text">En la actualidad el país cuenta con 135 centros de recolección y enfriamiento de leche distribuidos en 11 departamentos del territorio nacional: Colón (43), Yoro (40), Atlántida (23), Olancho (10), Cortés (6), Copán (5), Choluteca (3), Francisco Morazán (2), Comayagua (1), Santa Bárbara (1), El Paraíso (1). Algunos de estos CREL en un principio se impulsaron con la ayuda de FENAGH, LACTHOSA y SAG, a partir del 2014 hasta la fecha con el apoyo de la Cámara Hondureña de la Leche (CAHLE) con proyectos de inseminación artificial y asistencia técnica y en la actualidad se han sumado otras instituciones de apoyo al rubro como HEIFER Internacional.</p>
            </div>
            <div className="col-lg-10">
              <p className="main-text"><strong>Cuadro 1.</strong> Centros de recolección y enfriamiento de leche distribuidos por departamento y municipio en Honduras. <em>Fuente:</em> Cámara hondureña de la leche (2019).</p>
            </div>
            <div className="col-lg-10">
              <div className="wrapper">
                <div className="table">
                
                  <div className="c-row header">
                    <div className="cell">NOMBRE PROVEEDOR</div>
                    <div className="cell">UBICACIÓN</div>
                    <div className="cell">DEPARTAMENTO</div>
                  </div>
                  
                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ADAN RIVERA Y ASOC.</div>
                    <div className="cell" data-title="Municipio">CORRALITOS, JUTIAPA</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ALMENDARES CRUZ MURILLO Y ASOC.</div>
                    <div className="cell" data-title="Municipio">YARUCA, CEIBA</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">AMAYA Y ASOC.</div>
                    <div className="cell" data-title="Municipio">LAS MARÍAS, JUTIAPA</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ANDRADE SÁNCHEZ Y ASOC.</div>
                    <div className="cell" data-title="Municipio">EL DIAMANTE</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">AUGUSTO GRAUNARD Y ASOC.</div>
                    <div className="cell" data-title="Municipio">SALITRAN, JUTIAPA</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">CERROS CLAROS Y ASOC.</div>
                    <div className="cell" data-title="Municipio">DESCOMBROS, JUTIAPA</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">DANIEL POSAS Y ASOC.</div>
                    <div className="cell" data-title="Municipio">CANTOR, JUTIAPA</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">EULALIO ISAUL HERNÁNDEZ Y ASOC.</div>
                    <div className="cell" data-title="Municipio">CALIFORNIA, JUTIAPA</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">GARCÍA ORELLANA Y ASOC.</div>
                    <div className="cell" data-title="Municipio">CEIBITA WAY, ESPARTA</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">HUMBERTO BONILLA Y ASOC.</div>
                    <div className="cell" data-title="Municipio">CEFALÚ, JUTIAPA</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">JOSÉ OBDULIO ORELLANA Y ASOC.</div>
                    <div className="cell" data-title="Municipio">TOMALÁ, JUTIAPA</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">LA PROSPERIDAD S. DE R.L.</div>
                    <div className="cell" data-title="Municipio">EL DULCE, JUTIAPA</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">LECHE FRÍA Y ASOC.</div>
                    <div className="cell" data-title="Municipio">AGUACATE LÍNEA, JUTIAPA</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">LEONEL CASTELLANOS Y/O FRANCISCO HERNÁNDEZ</div>
                    <div className="cell" data-title="Municipio">SAN FRANCISCO</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">MATUTE NAVARRO Y ASOC.</div>
                    <div className="cell" data-title="Municipio">SAPOTE, JUTIAPA</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>
                  
                  <div className="c-row">
                    <div className="cell" data-title="Departamento">NATAREN Y ASOC.</div>
                    <div className="cell" data-title="Municipio">LOS OLANCHITOS, JUTIAPA</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">OLIVA MELGAR Y ASOC.</div>
                    <div className="cell" data-title="Municipio">VENUS</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">OSCAR RODRÍGUEZ Y ASOC. (CENTRO DE REC. DE LECHE SAN FRANCISCO)</div>
                    <div className="cell" data-title="Municipio">SANTA ANA, SAN FRANCISCO</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">POSAS ROMERO Y ASOC.</div>
                    <div className="cell" data-title="Municipio">AGUACATE MONTAÑA, JUTIAPA</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">RÍOS CABALLERO Y ASOC.</div>
                    <div className="cell" data-title="Municipio">ENTELINA, JUTIAPA</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">RIVERA SANTOS Y ASOC.</div>
                    <div className="cell" data-title="Municipio">CORRALITOS, JUTIAPA</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. COLECTIVA TELMA CASTAÑEDA</div>
                    <div className="cell" data-title="Municipio">ARIZONA, TELA</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ULLOA RODRÍGUEZ Y ASOC.</div>
                    <div className="cell" data-title="Municipio">LIMERAS, JUTIAPA</div>
                    <div className="cell" data-title="N° CREL">ATLÁNTIDA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">AGASAM</div>
                    <div className="cell" data-title="Municipio">SAN MARCOS DE COLÓN</div>
                    <div className="cell" data-title="N° CREL">CHOLUTECA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">CREL LA ILUSIÓN</div>
                    <div className="cell" data-title="Municipio">CHOLUTECA</div>
                    <div className="cell" data-title="N° CREL">CHOLUTECA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">CREL LA PATAGONIA S. DE R.L. DE C.V.</div>
                    <div className="cell" data-title="Municipio">NAMASIGÜE</div>
                    <div className="cell" data-title="N° CREL">CHOLUTECA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">AGASA S.A.</div>
                    <div className="cell" data-title="Municipio">LA ABISCINIA, TOCOA </div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ALEMAN ACOSTA Y ASOC.</div>
                    <div className="cell" data-title="Municipio">LIS LIS, BALFATE</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ASOC. DE AGRICUL. GANAD. RIO ARRIBA (AGARAT)</div>
                    <div className="cell" data-title="Municipio">RÍO ARRIBA, TRUJILLO</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ASOC. DE PROD. DE LECHE DE IRINEO (APROLEI)</div>
                    <div className="cell" data-title="Municipio">IRINEOS, TRUJILLO</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ASOC. DE PROD. DE LECHE Y DERIVAD. LA DANTA</div>
                    <div className="cell" data-title="Municipio">LAS PILAS, TRUJILLO</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ASOC. PROD. DE LECHE DE IRIONA (APRODELI)</div>
                    <div className="cell" data-title="Municipio">SAMBITA, SICO</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ASOC. PROD. DE LECHE Y DERIVAD. CERRO AZUL</div>
                    <div className="cell" data-title="Municipio">UNIÓN POSEÑA, BONITO ORIENTAL</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ASOC. PROD. LECHE Y DERIV. CATRACHO (APROLCA)</div>
                    <div className="cell" data-title="Municipio">BONITO ORIENTAL</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ASOC. PROD. LECHE Y DERIV. SOCIOS GANADEROS</div>
                    <div className="cell" data-title="Municipio">BONITO ORIENTAL</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">PLANTEL, BONITO ORIENTAL</div>
                    <div className="cell" data-title="Municipio">PLAYA GANADO, BONITO ORIENTAL</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ASOC. PRODUC. DE LECHE Y DERIVADOS CANAAN</div>
                    <div className="cell" data-title="Municipio">PLANTEL, BONITO ORIENTAL</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">CENTRO DE RECOLECCIÓN DE LECHE PINTO S.A</div>
                    <div className="cell" data-title="Municipio">PLANTEL, BONITO ORIENTAL</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">CENTRO RECOLECTOR DE LECHE EL RANCHO</div>
                    <div className="cell" data-title="Municipio">PLANES, SONAGUERA</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">CORRALES Y ASOC.</div>
                    <div className="cell" data-title="Municipio">SAN JOSÉ DE CORRALES</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">CREL JOSÉ OSCAR CEDILLO Y ASOC.</div>
                    <div className="cell" data-title="Municipio">QUEBRADA DE AGUA</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">CREL PLANES S. DE R.L</div>
                    <div className="cell" data-title="Municipio">PLANES, SONAGUERA</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">CRÚZ AGUILAR Y ASOC.</div>
                    <div className="cell" data-title="Municipio">SONAGUERA</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">EMPRESA ASOCIATIVA CAMPESINA 27 DE MAYO</div>
                    <div className="cell" data-title="Municipio">EL 15, TOCOA</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">EMPRESA DE PRODUCTOS LÁCTEOS S.A. EAPROL</div>
                    <div className="cell" data-title="Municipio">SANTA ROSA DE AGUÁN</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ESCOBAR PORTILLO Y ASOC.</div>
                    <div className="cell" data-title="Municipio">PARMAS, SONAGUERA</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">GANADEROS UNIDOS S. DE R.L</div>
                    <div className="cell" data-title="Municipio">DOS BOCAS, SANTA ROSA DE AGUÁN</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">MARTÍNEZ FLORES Y ASOC.</div>
                    <div className="cell" data-title="Municipio">SABANA DE UTILA, SONAGUERA</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">MURILLO VALLECILLO Y ASOC.</div>
                    <div className="cell" data-title="Municipio">ELIXIR, SABÁ</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ORTÍZ Y ASOC.</div>
                    <div className="cell" data-title="Municipio">EL COCO, TRUJILLO</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SANTOS CRISANTO Y ASOC.</div>
                    <div className="cell" data-title="Municipio">RÍO ESTEBAN, BALFATE</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. COL. GAN. LAS VEGAS ENCUENT. EL NOVILLO AGAVEN</div>
                    <div className="cell" data-title="Municipio">EL NOVILLO, TOCOA</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. COLECT. CRUZ LOBO Y ASOC.</div>
                    <div className="cell" data-title="Municipio">FRANCIA, LIMÓN</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. COLECTIVA ANTÚNEZ SANDOVAL Y ASOC.</div>
                    <div className="cell" data-title="Municipio">PALMICHAL, BONITO ORIENTAL</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. COLECTIVA BORJAS RAMOS Y ASOC. / CREL LAUDA</div>
                    <div className="cell" data-title="Municipio">LIMONCITO, LIMÓN</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. COLECTIVA CANELAS HERNÁNDEZ Y ASOC.</div>
                    <div className="cell" data-title="Municipio">LA ESPERANZA, BONITO ORIENTAL</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. COLECTIVA CÁRDENAS ZELAYA Y ASOC.</div>
                    <div className="cell" data-title="Municipio">BONITO ORIENTAL</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. COLECTIVA LÓPEZ URBINA Y ASOC.</div>
                    <div className="cell" data-title="Municipio">RIGORES, TRUJILLO</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. COLECTIVA MARTÍNEZ PAZ Y ASOC.</div>
                    <div className="cell" data-title="Municipio">BONITO ORIENTAL</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. COLECTIVA RAMOS ARNOLD Y ASOC.</div>
                    <div className="cell" data-title="Municipio">DOS BOCAS, SANTA ROSA DE AGUÁN</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. COLECTVA MONGE BARRIENTOS Y ASOC.</div>
                    <div className="cell" data-title="Municipio">EL 60, LIMÓN</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. COLETIVA WALDIR VALLADARES Y ASOC.</div>
                    <div className="cell" data-title="Municipio">LA ESPERANZA, BONITO ORIENTAL</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. DE PRODUC. DE LECHE CHACALAPA Y ASOC.</div>
                    <div className="cell" data-title="Municipio">CHACALAPA, TRUJILLO</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. DE PRODUC. DE LECHE COLECTIVA RIGORES</div>
                    <div className="cell" data-title="Municipio">RIGORES, TRUJILLO </div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. DE PRODUCT. DE LECHE CHIRINOS Y ASOC.</div>
                    <div className="cell" data-title="Municipio">PLAYA GANADO, BONITO ORIENTAL</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. DE PRODUCT. DE LECHE LA ESPERANZA S.A</div>
                    <div className="cell" data-title="Municipio">LA ESPERANZA, BONITO ORIENTAL</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. DE PRODUCT. LECHE AGALAC Y ASOC. S.A</div>
                    <div className="cell" data-title="Municipio">CHACALAPA, TRUJILLO</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. DE PRODUCTORES DE LAS ICOTEAS S.A</div>
                    <div className="cell" data-title="Municipio">ICOTEAS, BONITO ORIENTAL</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOCIEDAD SOGAABI</div>
                    <div className="cell" data-title="Municipio">LA ABISCINIA, TOCOA </div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ZÚNIGA Y ASOC.</div>
                    <div className="cell" data-title="Municipio">SABÁ</div>
                    <div className="cell" data-title="N° CREL">COLÓN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">MARLENY NIETO Y SUCESORES</div>
                    <div className="cell" data-title="Municipio">TAULABÉ</div>
                    <div className="cell" data-title="N° CREL">COMAYAGUA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ASOC. GANAD. DE EL PARAISO COPAN (AGAPAC)</div>
                    <div className="cell" data-title="Municipio">EL PARAÍSO</div>
                    <div className="cell" data-title="N° CREL">COPÁN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ASOC. PRODUCTORES LÁCTEOS STA ROSA COPAN / APROLAC</div>
                    <div className="cell" data-title="Municipio">DULCE NOMBRE</div>
                    <div className="cell" data-title="N° CREL">COPÁN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">EMP. DE SERV. MÚLTIPLES SAN ANTONIO COPAN / EMPRESAC</div>
                    <div className="cell" data-title="Municipio">SAN ANTONIO DE COPÁN</div>
                    <div className="cell" data-title="N° CREL">COPÁN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">JORGE BUESO ARIAS Y ASOC.</div>
                    <div className="cell" data-title="Municipio">SANTA RITA</div>
                    <div className="cell" data-title="N° CREL">COPÁN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. COLECTIVA TÁBORA MADRID Y ASOC.</div>
                    <div className="cell" data-title="Municipio">LA JIGUA</div>
                    <div className="cell" data-title="N° CREL">COPÁN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ALTEG / AGAT</div>
                    <div className="cell" data-title="Municipio">TEGUCIGALPITA, OMOA</div>
                    <div className="cell" data-title="N° CREL">CORTÉS</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">GIILBERTO CERROS Y ASOC.</div>
                    <div className="cell" data-title="Municipio">NUEVA GRANADA, SAN ANTONIO</div>
                    <div className="cell" data-title="N° CREL">CORTÉS</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">RODRÍGUEZ ALVARADO Y ASOC.</div>
                    <div className="cell" data-title="Municipio">CUYAMEL, CORTÉS</div>
                    <div className="cell" data-title="N° CREL">CORTÉS</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. COLECTIVA PAZ SABILLÓN Y ASOC.</div>
                    <div className="cell" data-title="Municipio">SAN BUENAVENTURA</div>
                    <div className="cell" data-title="N° CREL">CORTÉS</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. FERNÁNDEZ MEDINA Y ASOC.</div>
                    <div className="cell" data-title="Municipio">SAN ANTONIO DE CORTÉS</div>
                    <div className="cell" data-title="N° CREL">CORTÉS</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOCIEDAD SABILLÓN FERNÁNDEZ</div>
                    <div className="cell" data-title="Municipio">SAN BUENAVENTURA</div>
                    <div className="cell" data-title="N° CREL">CORTÉS</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOSALAC SOC. COLECTIVA DE R.L</div>
                    <div className="cell" data-title="Municipio">ARAULÍ, DANLÍ</div>
                    <div className="cell" data-title="N° CREL">EL PARAISO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">AGAVICAN</div>
                    <div className="cell" data-title="Municipio">VILLA DE SAN FRANCISCO</div>
                    <div className="cell" data-title="N° CREL">FRANCISCO MORAZÁN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">AGAZA</div>
                    <div className="cell" data-title="Municipio">ZAMORANO</div>
                    <div className="cell" data-title="N° CREL">FRANCISCO MORAZÁN</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">CENTRO RECOL. DE LECHE ALMAGOR S.DE R.L</div>
                    <div className="cell" data-title="Municipio">SAN ESTEBAN</div>
                    <div className="cell" data-title="N° CREL">OLANCHO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">COOPERATIVA COAPLEGUAL</div>
                    <div className="cell" data-title="Municipio">GUALACO</div>
                    <div className="cell" data-title="N° CREL">OLANCHO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">CREL 10 DE MAYO (OLANCHO)</div>
                    <div className="cell" data-title="Municipio">LA CONCEPCIÓN JUTICALPA</div>
                    <div className="cell" data-title="N° CREL">OLANCHO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">CREL DE BECERRA (OLANCHO)</div>
                    <div className="cell" data-title="Municipio">SAN FRANCISCO DE BECERRA</div>
                    <div className="cell" data-title="N° CREL">OLANCHO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">CREL LA VENTA (OLANCHO)</div>
                    <div className="cell" data-title="Municipio">LA VENTA, JUTICALPA</div>
                    <div className="cell" data-title="N° CREL">OLANCHO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">RUBY LOBO Y ASOC. (OLANCHO)</div>
                    <div className="cell" data-title="Municipio">EL BIJAGUAL JUTICALPA</div>
                    <div className="cell" data-title="N° CREL">OLANCHO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. COLECTIVA BUENOS AMIGOS</div>
                    <div className="cell" data-title="Municipio">CASA QUEMADA, SAN ESTEBAN </div>
                    <div className="cell" data-title="N° CREL">OLANCHO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. COLECTIVA CARMEN MUNGUÍA Y ASOC.</div>
                    <div className="cell" data-title="Municipio">TAZAGERA</div>
                    <div className="cell" data-title="N° CREL">OLANCHO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. COLECTIVA TULIO HERNÁN CROZIER Y ASOC.</div>
                    <div className="cell" data-title="Municipio">SAN ESTEBAN</div>
                    <div className="cell" data-title="N° CREL">OLANCHO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. COLECTIVA ULISES ANTÚNEZ Y ASOC.</div>
                    <div className="cell" data-title="Municipio">SAN ESTEBAN</div>
                    <div className="cell" data-title="N° CREL">OLANCHO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOC. COLECTIVA SABILLÓN PAZ Y ASOC.</div>
                    <div className="cell" data-title="Municipio">SAN JOSÉ DE ORIENTE, ILAMA</div>
                    <div className="cell" data-title="N° CREL">SANTA BÁRBARA</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ACOSTA OSEGUERA Y ASOC.</div>
                    <div className="cell" data-title="Municipio">TERRERO, OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">AGASUB</div>
                    <div className="cell" data-title="Municipio">CHANCAYA</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">AGATY (ASOC. GANADEROS TULANGUARES YORO)</div>
                    <div className="cell" data-title="Municipio">YORO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ANDINO MUNGUÍA Y ASOC.</div>
                    <div className="cell" data-title="Municipio">CALPULES, OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">APROLARY</div>
                    <div className="cell" data-title="Municipio">AYAPA</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">APROLELY</div>
                    <div className="cell" data-title="Municipio">LOCOMAPA</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">APROLET</div>
                    <div className="cell" data-title="Municipio">TRINIDAD</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ASOC. GANAD. AGRICUL. DE LOMAS YORO (AGALOMY)</div>
                    <div className="cell" data-title="Municipio">YORO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ASOC. PROD. LECHE DEL VALLE YORO (APROLEVY)</div>
                    <div className="cell" data-title="Municipio">PUNTA OCOTE</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">ASOC. PRODUCTORA LACTEOS YORO (APROLY) SRL</div>
                    <div className="cell" data-title="Municipio">YORO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">BUSTILLO MARTÍNEZ Y ASOC.</div>
                    <div className="cell" data-title="Municipio">SANTA BÁRBARA, OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">CÁRCAMO MARTÍNEZ Y ASOC.</div>
                    <div className="cell" data-title="Municipio">EL OCOTE, OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">CENTRO RECOLECTOR LAS MERCEDES S.DE R.L</div>
                    <div className="cell" data-title="Municipio">PUNTA OCOTE</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">COSME ROBERTO ISAULA MAYORQUIN / CREL MORAZAN</div>
                    <div className="cell" data-title="Municipio">MORAZÁN</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">CREL CUPERTINO FUGÓN</div>
                    <div className="cell" data-title="Municipio">EL MEDIO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">CREL LA BENDICIÓN S.DE R.L DE C.V</div>
                    <div className="cell" data-title="Municipio">PUNTA OCOTE</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">CREL SUPERACIÓN Y ASOC.</div>
                    <div className="cell" data-title="Municipio">SAN MARCOS, OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">CRELCA CALPULES ALDEA</div>
                    <div className="cell" data-title="Municipio">CALPULES, OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">CRUZ NÚÑEZ Y ASOC.</div>
                    <div className="cell" data-title="Municipio">SAN MARCOS, OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">EDY BONILLA Y ASOC.</div>
                    <div className="cell" data-title="Municipio">WISILKA, YORITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">EL EDEN Y ASOC.</div>
                    <div className="cell" data-title="Municipio">OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">FABRICIO PUERTO Y ASOC.</div>
                    <div className="cell" data-title="Municipio">LA SABANA, OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">FUENTES Y ASOC.</div>
                    <div className="cell" data-title="Municipio">LIMONES, OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">HEBERTO CHIRINOS PONCE Y ASOC.</div>
                    <div className="cell" data-title="Municipio">JUNCAL, OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">JERÓNIMO ARMIN FIGUEROA Y ASOC.</div>
                    <div className="cell" data-title="Municipio">SAN FRANCISCO, OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">JOSÉ RIGOBERTO LOPEZ BURDET Y ASOC.</div>
                    <div className="cell" data-title="Municipio">YORO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">LECHE Y DERIVADOS MORAZÁN S.A (LEYDEM)</div>
                    <div className="cell" data-title="Municipio">MORAZÁN</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">LEOPOLDO DURÁN DUEÑAS Y ASOC.</div>
                    <div className="cell" data-title="Municipio">SAN PATRICIO, OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">MARTÍNEZ HERNÁNDEZ Y ASOC.</div>
                    <div className="cell" data-title="Municipio">MALOA, OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">MARTÍNEZ LOBO Y ASOC.</div>
                    <div className="cell" data-title="Municipio">ARENAL</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">MEJÍA RODRÍGUEZ Y ASOC.</div>
                    <div className="cell" data-title="Municipio">LA ENVIDIA, OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">NUEVA ALIANZA</div>
                    <div className="cell" data-title="Municipio">OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">PADILLA SARMIENTO Y ASOC.</div>
                    <div className="cell" data-title="Municipio">TEPUSTECA</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">PROLENY S. DE R. L. DE C. V.</div>
                    <div className="cell" data-title="Municipio">NEGRITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">PUERTO BUSTILLO Y ASOC.</div>
                    <div className="cell" data-title="Municipio">TEJERAS</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">PUERTO LOZANO Y ASOC.</div>
                    <div className="cell" data-title="Municipio">SAN GERÓNIMO, OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SALINAS GONZÁLES Y ASOC.</div>
                    <div className="cell" data-title="Municipio">COYOLES, OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SALVADOR FIGUEROA Y ASOC.</div>
                    <div className="cell" data-title="Municipio">EL BAMBÚ, OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOPROLE SAN FRANCISCO DE ASÍS</div>
                    <div className="cell" data-title="Municipio">SAN FRANCISCO, OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                  <div className="c-row">
                    <div className="cell" data-title="Departamento">SOPROLEC Y ASOC.</div>
                    <div className="cell" data-title="Municipio">COYOLES, OLANCHITO</div>
                    <div className="cell" data-title="N° CREL">YORO</div>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-lg-14">
              <img src={Creles} alt="Agafam Congreso de la leche 2020"/>
              <div className="col-lg-9">
                <p className="main-text"><strong>Figura 1.</strong> Ubicación geográfica de los CREL activos en Honduras y promedios de producción de leche entregados diariamente a la industria (LACTHOSA y LEYDE). <em>Fuente:</em> CAHLE (2023).</p>
              </div>
            </div>

            <div className="col-lg-10">
              <p className="main-text">La industria de la leche en Honduras generalmente acopia el producto a través de estos centros de recolección y enfriamiento de leche quienes fungen como intermediarios entre el productor y las plantas industriales. La industria fija precios de compra por cada litro de leche dependiendo del mercado, de la distancia de donde se encuentren los centros de acopio, del volumen de entrega y calidad de la misma (PYMERURAL y PRONAGRO 2010).</p>

              <p className="main-text">En su mayoría, los CREL se encuentran en zonas rurales, los productores llevan la leche cruda utilizando la tracción animal o vehículo y es almacenada en tanques de refrigeración. Dado que la leche es un producto altamente perecedero (Castillo 2015), las fincas de los productores asociados se encuentran relativamente cerca a cada centro de acopio. El tamaño, así como el tipo de infraestructura varía de acuerdo con las condiciones de producción. Por ejemplo, sitios donde existe un gran número de productores organizados permiten que puedan ofrecer otros servicios como la venta de productos agropecuarios y heno a bajos costos en comparación con precios de mercado (García 2018). </p>

              <p className="main-text">Como parte del control de higiene y calidad de la leche, cada CREL cuenta con un funcionario que hace las veces de receptor y administrador; es quien realiza al menos dos pruebas básicas y sencillas: de sedimentación y de alcohol. Para la primera utiliza un sedimentador que mediante discos de algodón detecta la presencia de impurezas en la leche. La segunda es positiva si al mezclar alcohol con la leche se observan partículas coaguladas de caseína (proteína de la leche), lo cual determina si se acepta o no el producto (García 2018). Las razones de rechazo, por lo general, se asocian a problemas de higiene en el ordeño y al tiempo transcurrido entre este y la entrega de la leche al centro de acopio (Guerra et al. 2011). A mayor tiempo transcurrido, ocurre una mayor proliferación de bacterias causantes de la acidez (Nardone et al. 2010). Algunos centros de acopio cuentan con plantas de procesamiento para transformar la leche cruda que no cumple con las exigencias de la industria en subproductos como queso y mantequilla. </p>

              <p className="main-text">La conformación de los CREL ha traído múltiples beneficios al sector lechero del país. Por ejemplo, los productores socios participan en programas de asistencia técnica y son capacitados sobre buenas prácticas ganaderas enfocadas a mejorar la producción, la calidad e higiene de la leche. Una buena calidad les asegura mejores ingresos, debido a que la industria establece una diferenciación de precios entre la leche tipo “A”, que básicamente es de excelente calidad y se destina a productos con una mayor vida de anaquel y la leche tipo “B”, con menor vida de anaquel y por ende menor precio. Aunado a lo anterior, existe un mecanismo de asociatividad que ha logrado un impulso en el desarrollo de pequeños productores, tienen un mercado asegurado bajo contratos previamente establecidos lo cual representa una situación ventajosa ya que por lo general las procesadoras artesanales no garantizan estabilidad en cuanto a compras o precios a lo largo del año y especialmente en la época de invierno (o mayor producción de leche).</p>
            </div>
            <div className="col-lg-10">
              <h3 className="sub-title sub-title__small">Bibliografía</h3>
              <ul className="bibliography">
                <li>Barrios, C. 2008. Estudio de mercado de productos pecuarios en tres zonas piloto del proyecto “Desarrollo Participativo de Alternativas de Uso Sostenible de la Tierra para Áreas de Pasturas Degradadas en América Central” (Proyecto NORUEGA-PD). 108 p. (Serie Técnica, Informe Técnico no. 371). Disponible en <a className="animate-link" target="_blank" rel="noopener noreferrer" href="http://orton.catie.ac.cr/repdoc/A2694e/A2694e.pdf">http://orton.catie.ac.cr/repdoc/A2694e/A2694e.pdf</a></li>
                <li>Castillo, E. 2015. Influencia del tratamiento térmico de la leche en la elaboración de productos lácteos. Trujillo, Perú, Universidad Nacional de Trujillo.</li>
                <li>FAO (Organización de las Naciones Unidas para la Agricultura y la Alimentación) 2010. Perspectivas alimentarias: análisis de los mercados mundiales (en línea). Disponible en <a className="animate-link" target="_blank" rel="noopener noreferrer" href="http://www.fao.org/docrep/012/ak349s/ak349s00.pdf">http://www.fao.org/docrep/012/ak349s/ak349s00.pdf</a></li>
                <li>Guerra, K.; Villanueva, C.; Soriano, M.; Moya, E. 2011. Recolección y comercialización de leche en la subcuenca del río Copán, Honduras: La experiencia de los ganaderos en la conformación del centro de recolección y enfriamiento de leche “Jorge Bueso Arias”. 1ª ed. Turrialba, C.R.: CATIE. 35p.:il. – (Serie técnica. Boletín técnico / CATIE; no. 45). </li>
                <li>García, A. 2018. Análisis económico de prácticas silvopastoriles y buenas prácticas ganaderas para mejorar la resiliencia climática en fincas productoras de leche en el municipio de Olanchito, Departamento de Yoro, Honduras. Tesis Mag. Sc. Turrialba, Costa Rica, CATIE. 98p.</li>
                <li>López Soriano, M. 2009. Análisis de la agrocadena de lácteos en la zona sur de Costa Rica. Tesis Mag. Sc. Turrialba, Costa Rica, CATIE. 159 p.</li>
                <li>Nardone, A; Ronchi, B; Lacetera, N; Ranieri, M. S; Bernabucci, U. 2010. Effects of climate changes on animal production and sustainability of livestock systems. Livestock Science 130(1-3):57–69.</li>
                <li>Prins, C; Junkin, R; Barriga, M; Orozco, P; Virginio, EDM, Aguilar, A. 2008. Abriendo puertas de confianza: reconstrucción y análisis de la experiencia de FondeAgro (en línea). Tegucigalpa, Honduras, MAGFOR-FondeAgro.</li>
                <li>PYMERURAL (Pequeña y mediana empresa del sector rural); PRONAGRO (Programa nacional de desarrollo agroalimentario). 2010. Análisis de la cadena de valor láctea de Honduras. 52 p.</li>
              </ul>
            </div>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  )
}