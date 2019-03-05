import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import Check from '../images/icons/check.svg'
import { device } from '../styles/breakpoints'
import Junta from '../images/junta-directiva.jpg' 
import HeroPage from '../components/heroPage'

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

const Flexcard = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet}{
    flex-direction: row;
  }
`
const FlexImage = styled.div`
  flex: 0 0 100%;
  @media ${device.tablet}{
    flex: 0 0 40%;
  }
  @media ${device.laptop}{
    flex: 0 0 30%;
  }
`

const FlexContent = styled.div`
  flex: 0 0 100%;
  @media ${device.tablet}{
    flex: 0 0 60%;
  }
  @media ${device.laptop}{
    flex: 0 0 70%;
  }
`

export default () => {
  return (
    <Layout>
      <HeroPage title="CREL'S" tags="asociados" bgImage={Junta}/>
      <Wrapper>
        <Container>
          
          <h2>¿Qué es un centro de recolección y enfriamiento de leche (CREL)?</h2>
          
          <p style={{textAlign: 'justify'}}>Un CREL es una estructura productiva y organizativa de propiedad colectiva creada por una organización de ganaderos con la finalidad de tener un espacio dónde recolectar y acopiar la leche de sus fincas para la comercialización en frío a otra empresa procesadora de lácteos y así obtener un mejor precio de venta. La organización favorece la reducción de costos fijos de producción, ya que el transporte del producto primario se realiza en conjunto y los insumos se adquieren en grandes volúmenes a un menor precio. Esto permite mejorar la rentabilidad y la sostenibilidad de las empresas ganaderas que contribuyen al bienestar de las comunidades rurales (Guerra et al. 2011).</p>
          
          <h2>¿Cómo surge la idea de los centros de acopio?</h2>
          
          <p style={{textAlign: 'justify'}}>El sector lácteo en los países en desarrollo a menudo fue dirigido en el pasado por una industria lechera central estatal o controlada por el estado de grandes proporciones. Una creciente tendencia hacia la privatización ha resultado en la desregulación de aquellas industrias ineficientes y mal administradas, ofreciendo una ventana de oportunidad para la entrada de la industria privada en el sector lechero. Esta singular combinación de circunstancias ha representado tanto desafíos como oportunidades para los productores y procesadores de pequeña escala en los países en desarrollo (Bennett et al. 2001 citado por Guerra et al. 2011).</p>

          <p style={{textAlign: 'justify'}}>Diferentes investigadores expresan que existe un mercado siempre creciente en los centros urbanos. El crecimiento de las poblaciones urbanas, los mejores niveles de educación y el aumento del ingreso, desembocaron en un masivo incremento de la demanda de productos lácteos. El desafío es organizar el acopio de leche segura y de buena calidad y proveer una oferta constante de leche y productos lácteos de calidad que satisfaga las demandas del mercado, lo que se logra en parte con los CREL. A la vez, deberá satisfacerse la demanda del mercado con productos con valor agregado destinados a consumidores con diversos niveles de ingreso. Los gobiernos por su parte, buscan modos de reducir las importaciones de alimentos que pesan sobremanera en los presupuestos nacionales y, especialmente, en las escasas divisas extranjeras (Guerra et al. 2011).</p>
          
          <h2>Antecedentes</h2>

          <p style={{textAlign: 'justify'}}>En el año 2008 el precio de la leche alcanzó niveles exorbitantes, no obstante, estos cayeron a fin de año por la demanda en países como India y China. Finalizando el 2009 el precio repuntó nuevamente por varias razones: 1) la recuperación de la confianza entre los consumidores chinos después de la crisis provocada por la contaminación con melamina1 de las fórmulas lácteas para infantes, a fines del 2008; 2) la contracción de los suministros procedentes de Oceanía y 3) las compras sostenidas por parte de varios países asiáticos y de algunos países exportadores de petróleo (FAO 2010). Estos precios auspiciaron el interés de grandes empresas procesadoras de lácteos en Centroamérica, por establecer relaciones contractuales con grupos de productores organizados para comprarles el volumen total de leche o parte de esta. Estas alianzas dieron origen a los centros de recolección y enfriamiento de leche (CREL) en Guatemala, Honduras, Nicaragua y Costa Rica (Barrios 2008, Prins et ál. 2008, López Soriano 2009).</p>
          <p style={{textAlign: 'justify'}}>En Honduras se crearon por iniciativa de las organizaciones de productores con apoyo de la industria láctea y financiado por el gobierno de los Estados Unidos. El proyecto, inició en el 2001 siendo ejecutado por la cooperativa Land O'Lakes. Los objetivos de esta iniciativa básicamente radicaron en: aumentar los ingresos y empleo, mejorar el acceso a los mercados y la competitividad del sector, involucrar a la industria láctea de EE.UU. en la prestación de asistencia técnica y comercial en actividades del país y / o región de acogida, mejorar la nutrición de los niños y las mujeres embarazadas y fortalecer las organizaciones regionales del sector lácteo.</p>

          <p style={{textAlign: 'justify'}}>En la actualidad el país cuenta con 126 centros de recolección y enfriamiento de leche distribuidos en 11 departamentos del territorio nacional (Colón, Yoro, Atlántida, Olancho, Cortés, Copán, Francisco Morazán, Choluteca, Comayagua, El Paraíso y Santa Bárbara), algunos de estos se impulsaron con la ayuda de <b>FENAGH, LACTHOSA y SAG</b>, y a partir del 2014 con el apoyo de la Cámara Hondureña de la Leche (CAHLE) con proyectos de inseminación artificial y asistencia técnica. </p>

          <h5><em>Cuadro 1.</em> Centros de recolección y enfriamiento de leche distribuidos por departamento y municipio en Honduras. <em>Fuente:</em> Cámara hondureña de la leche (2019).</h5>

          <div className="wrapper">
            <div className="table">
            
              <div className="row header">
                <div className="cell">
                  Departamento
                </div>
                <div className="cell">
                  Municipio
                </div>
                <div className="cell">
                  N° de CREL
                </div>
                <div className="cell">
                  N° de productores
                </div>
              </div>
              
              <div className="row">
                <div className="cell" data-title="Departamento">
                Colón
                </div>
                <div className="cell" data-title="Municipio">
                Bonito Oriental, Trujillo, Sabá, Sonaguera
                </div>
                <div className="cell" data-title="N° CREL">
                52
                </div>
                <div className="cell" data-title="N° Productores">
                1551
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Departamento">
                Yoro
                </div>
                <div className="cell" data-title="Municipio">
                Olanchito, Victoria, El Negrito, Morazán
                </div>
                <div className="cell" data-title="N° CREL">
                28
                </div>
                <div className="cell" data-title="N° Productores">
                561
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Departamento">
                Atlántida
                </div>
                <div className="cell" data-title="Municipio">
                Jutiapa, Ceiba, Esparta, San Francisco
                </div>
                <div className="cell" data-title="N° CREL">
                19
                </div>
                <div className="cell" data-title="N° Productores">
                281
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Departamento">
                Olancho
                </div>
                <div className="cell" data-title="Municipio">
                San Esteban, Juticalpa y Gualaco
                </div>
                <div className="cell" data-title="N° CREL">
                9
                </div>
                <div className="cell" data-title="N° Productores">
                125
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Departamento">
                Cortés
                </div>
                <div className="cell" data-title="Municipio">
                Omoa, San Fco. de Yojoa, San Antonio de Cortés
                </div>
                <div className="cell" data-title="N° CREL">
                8
                </div>
                <div className="cell" data-title="N° Productores">
                116
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Departamento">
                Copán
                </div>
                <div className="cell" data-title="Municipio">
                La Jigua, Santa Rita, Santa Rosa
                </div>
                <div className="cell" data-title="N° CREL">
                4
                </div>
                <div className="cell" data-title="N° Productores">
                92
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Departamento">
                Francisco Morazán
                </div>
                <div className="cell" data-title="Municipio">
                San Antonio de Oriente
                </div>
                <div className="cell" data-title="N° CREL">
                2
                </div>
                <div className="cell" data-title="N° Productores">
                42
                </div>
              </div>
              
              <div className="row">
                <div className="cell" data-title="Departamento">
                Choluteca
                </div>
                <div className="cell" data-title="Municipio">
                Namasigue
                </div>
                <div className="cell" data-title="N° CREL">
                1
                </div>
                <div className="cell" data-title="N° Productores">
                19
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Departamento">
                Santa Bárbara
                </div>
                <div className="cell" data-title="Municipio">
                San José, Ilama
                </div>
                <div className="cell" data-title="N° CREL">
                1
                </div>
                <div className="cell" data-title="N° Productores">
                15
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Departamento">
                Comayagua
                </div>
                <div className="cell" data-title="Municipio">
                Taulabé
                </div>
                <div className="cell" data-title="N° CREL">
                1
                </div>
                <div className="cell" data-title="N° Productores">
                13
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Departamento">
                El Paraíso
                </div>
                <div className="cell" data-title="Municipio">
                Jamastrán
                </div>
                <div className="cell" data-title="N° CREL">
                1
                </div>
                <div className="cell" data-title="N° Productores">
                5
                </div>
              </div>

            </div>
          </div>

          <p style={{textAlign: 'justify'}}>La industria de la leche en Honduras generalmente acopia el producto a través de estos centros de recolección y enfriamiento de leche quienes fungen como intermediarios entre el productor y las plantas industriales. La industria fija precios de compra por cada litro de leche dependiendo del mercado, de la distancia de donde se encuentren los centros de acopio, del volumen de entrega y calidad de la misma (PYMERURAL y PRONAGRO 2010).</p>

          <p style={{textAlign: 'justify'}}>En su mayoría, los CREL se encuentran en zonas rurales, los productores llevan la leche cruda utilizando la tracción animal o vehículo y es almacenada en tanques de refrigeración. Dado que la leche es un producto altamente perecedero (Castillo 2015), las fincas de los productores asociados se encuentran relativamente cerca a cada centro de acopio. El tamaño, así como el tipo de infraestructura varía de acuerdo con las condiciones de producción. Por ejemplo, sitios donde existe un gran número de productores organizados permiten que puedan ofrecer otros servicios como la venta de productos agropecuarios y heno a bajos costos en comparación con precios de mercado (García 2018). </p>

          <p style={{textAlign: 'justify'}}>Como parte del control de higiene y calidad de la leche, cada CREL cuenta con un funcionario que hace las veces de receptor y administrador; es quien realiza al menos dos pruebas básicas y sencillas: de sedimentación y de alcohol. Para la primera utiliza un sedimentador que mediante discos de algodón detecta la presencia de impurezas en la leche. La segunda es positiva si al mezclar alcohol con la leche se observan partículas coaguladas de caseína (proteína de la leche), lo cual determina si se acepta o no el producto (García 2018). Las razones de rechazo, por lo general, se asocian a problemas de higiene en el ordeño y al tiempo transcurrido entre este y la entrega de la leche al centro de acopio (Guerra et al. 2011). A mayor tiempo transcurrido, ocurre una mayor proliferación de bacterias causantes de la acidez (Nardone et al. 2010). Algunos centros de acopio cuentan con plantas de procesamiento para transformar la leche cruda que no cumple con las exigencias de la industria en subproductos como queso y mantequilla. </p>

          <p style={{textAlign: 'justify'}}>La conformación de los CREL ha traído múltiples beneficios al sector lechero del país. Por ejemplo, los productores socios participan en programas de asistencia técnica y son capacitados sobre buenas prácticas ganaderas enfocadas a mejorar la producción, la calidad e higiene de la leche. Una buena calidad les asegura mejores ingresos, debido a que la industria establece una diferenciación de precios entre la leche tipo “A”, que básicamente es de excelente calidad y se destina a productos con una mayor vida de anaquel y la leche tipo “B”, con menor vida de anaquel y por ende menor precio. Aunado a lo anterior, existe un mecanismo de asociatividad que ha logrado un impulso en el desarrollo de pequeños productores, tienen un mercado asegurado bajo contratos previamente establecidos lo cual representa una situación ventajosa ya que por lo general las procesadoras artesanales no garantizan estabilidad en cuanto a compras o precios a lo largo del año y especialmente en la época de invierno (o mayor producción de leche). </p>

          <h3 style={{fontStyle: 'italic'}}>Bibliografía</h3>
          <ul>
            <li>Barrios, C. 2008. Estudio de mercado de productos pecuarios en tres zonas piloto del proyecto “Desarrollo Participativo de Alternativas de Uso Sostenible de la Tierra para Áreas de Pasturas Degradadas en América Central” (Proyecto NORUEGA-PD). 108 p. (Serie Técnica, Informe Técnico no. 371). Disponible en <a style={{color: "var(--green)"}} target="_blank" rel="noopener noreferrer" href="http://orton.catie.ac.cr/repdoc/A2694e/A2694e.pdf">http://orton.catie.ac.cr/repdoc/A2694e/A2694e.pdf</a></li>
            <li>Castillo, E. 2015. Influencia del tratamiento térmico de la leche en la elaboración de productos lácteos. Trujillo, Perú, Universidad Nacional de Trujillo.</li>
            <li>FAO (Organización de las Naciones Unidas para la Agricultura y la Alimentación) 2010. Perspectivas alimentarias: análisis de los mercados mundiales (en línea). Disponible en <a style={{color: "var(--green)"}} target="_blank" rel="noopener noreferrer" href="http://www.fao.org/docrep/012/ak349s/ak349s00.pdf">http://www.fao.org/docrep/012/ak349s/ak349s00.pdf</a></li>
            <li>Guerra, K.; Villanueva, C.; Soriano, M.; Moya, E. 2011. Recolección y comercialización de leche en la subcuenca del río Copán, Honduras: La experiencia de los ganaderos en la conformación del centro de recolección y enfriamiento de leche “Jorge Bueso Arias”. 1ª ed. Turrialba, C.R.: CATIE. 35p.:il. – (Serie técnica. Boletín técnico / CATIE; no. 45). </li>
            <li>García, A. 2018. Análisis económico de prácticas silvopastoriles y buenas prácticas ganaderas para mejorar la resiliencia climática en fincas productoras de leche en el municipio de Olanchito, Departamento de Yoro, Honduras. Tesis Mag. Sc. Turrialba, Costa Rica, CATIE. 98p.</li>
            <li>López Soriano, M. 2009. Análisis de la agrocadena de lácteos en la zona sur de Costa Rica. Tesis Mag. Sc. Turrialba, Costa Rica, CATIE. 159 p.</li>
            <li>Nardone, A; Ronchi, B; Lacetera, N; Ranieri, M. S; Bernabucci, U. 2010. Effects of climate changes on animal production and sustainability of livestock systems. Livestock Science 130(1-3):57–69.</li>
            <li>Prins, C; Junkin, R; Barriga, M; Orozco, P; Virginio, EDM, Aguilar, A. 2008. Abriendo puertas de confianza: reconstrucción y análisis de la experiencia de FondeAgro (en línea). Tegucigalpa, Honduras, MAGFOR-FondeAgro.</li>
            <li>PYMERURAL (Pequeña y mediana empresa del sector rural); PRONAGRO (Programa nacional de desarrollo agroalimentario). 2010. Análisis de la cadena de valor láctea de Honduras. 52 p.</li>
          </ul>

        </Container>
      </Wrapper>
    </Layout>
  )
}