import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import Vision from '../images/vision.jpg'
import HeroPage from '../components/heroPage'
import Image from '../components/image'

const Wrapper = styled.div`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
  figure{
    margin: 20px 0;
    text-align: center;
    figcaption{
      padding: 0;
      margin: 15px 0;
      font-size: 12px;
      color: var(--text);
      strong{
        font-weight: bolder !important;
      }
    }
  }
`



const blog = () => (
  <Layout>
    <HeroPage title="Perfil Comercial" bgImage={Vision}/>
    <Wrapper>
      <Container>
        <div className="row justify-content-center">
          <h2 className="main-title variant-title">Perfil comercial de productos lácteos en Honduras</h2>
          <div className="col-lg-9">
            <h3 className="sub-title">Análisis cuantitativo: Comercio</h3>
            <p className="main-text">El sector de productos lácteos y sus derivados es un sector importante en Honduras tal como se muestra en el gráfico 1. El valor total de las exportaciones de estos productos en el marco del DR-CAFTA ha crecido en los últimos 11 años y ha alcanzado aproximadamente, 21 millones de dólares en 2017 con un volumen que sobrepasa las 9 mil toneladas métricas de acuerdo a la información proporcionada por al Sistema de Estadísticas de Comercio de Estadística (SIECA 2019). </p>
          </div>
          <div className="col-lg-9">
            <figure style={{}}>
              <Image filename={"grafico-01"}/>
              <figcaption><strong>Gráfico 1.</strong> Exportación de productos lácteos y sus derivados de Honduras (2006-2017) <br/> <strong>Fuente:</strong> Cámara Hondureña de la Leche (CAHLE), con base en la información del Sistema de Estadísticas de la SIECA, 2019.</figcaption>
            </figure>
          </div>
          <div className="col-lg-9">
            <p className="main-text">Complementario a lo anterior, el sector lácteo y sus derivados está conformado por diversos productos cuya materia prima es la leche fluida, pero su consumo y sus exportaciones se distribuye en diferentes formas. En el cuadro 1 se muestran los principales productos lácteos que exporta Honduras con un nivel de desagregación de seis dígitos según el Sistema Arancelario Centroamericano (SAC). En el lapso de tiempo analizado, el queso fresco (sin madurar) es el principal producto exportado por el país (33%), seguido del queso fundido (30%), la mantequilla (15.5%), otros tipos de quesos (10.9%) y el yogur (9.6%). Se agregan de igual manera otros productos con menor participación como ser queso rallado o en polvo y el lactosuero aglutinando el 0.6% restante. </p>
          </div>
          <div className="col-lg-9">
            <figure style={{margin:"40px 0", textAlign: "center"}}>
              <Image filename={"cuadro-1"}/>
              <figcaption className="main-text" style={{fontSize: '12px'}}><strong>Cuadro 1.</strong> Descomposición de los diferentes productos lácteos exportados desde Honduras (2006-2017) <br/> <strong>Fuente:</strong> Cámara Hondureña de la Leche (CAHLE), con base en la información del Sistema de Estadísticas de la SIECA, 2019.</figcaption>
            </figure>
          </div>
          <div className="col-lg-9">
            <p className="main-text">Cabe mencionar que, las cifras presentadas en este análisis son oficiales, esto quiere decir que, solo incluyen las transacciones realizadas en el mercado formal reportadas por las diferentes instituciones y disponibles a través de la SIECA, por lo que vale la pena recalcar que el sector cuenta con importantes niveles de comercio informal cuyos datos no están disponibles y por ende no son considerados. </p>
          </div>
          <div className="col-lg-9">
            <figure>
              <Image filename={"cuadro-2"}/>
              <figcaption><strong>Cuadro 2.</strong> Exportaciones de Honduras por país de destino (2006-2017). <br/> <strong>Fuente:</strong> Cámara Hondureña de la Leche (CAHLE), con base en la información del Sistema de Estadísticas de la SIECA, 2019. </figcaption>
            </figure>
          </div>
          <div className="col-lg-9">
            <p className="main-text">Como se observa en el gráfico 2, en la mayoría de los casos la relación comercial entre Honduras y los demás países a los que exporta es bidireccional, lo que quiere decir que hay importación y exportación al mismo tiempo. La balanza comercial entre Honduras, República Dominicana, Guatemala y El Salvador es positiva siendo con este último el comercio intrarregional más importante. No obstante, el país ha registrado un deterioro (déficit) en gran medida con Estados Unidos (-38,159tm) y Nicaragua (-43,948tm) pese al dinamismo en las exportaciones de productos lácteos y sus derivados, </p>
          </div>
          <div className="col-lg-9">
            <figure>
              <Image filename={"grafico-02"}/>
              <figcaption><strong>Gráfico 2.</strong> Relación bidireccional entre Honduras y los países a los que exporta (2006-2017) <br/> <strong>Fuente:</strong> Cámara Hondureña de la Leche (CAHLE), con base en la información del Sistema de Estadísticas de la SIECA, 2019. </figcaption>
            </figure>
          </div>
          <div className="col-lg-9">
            <h3 className="sub-title">Importaciones hondureñas de lácteos provenientes de EUA (2006-2016)</h3>
            <p className="main-text">Para el sector lácteo, los gráficos 3,4,5,6 y 7 muestran las cantidades pactadas en el acuerdo DR-CAFTA entre productores hondureños y el mercado estadounidense. </p>
            <p className="main-text">Puede apreciarse que la importación de leche en polvo (gráfico 3) como los quesos (gráfico 5) son los productos que mayor dinamismo muestran de acuerdo a las partidas y cantidades negociadas en el acuerdo (DR-CAFTA).</p>
          </div>
          <div className="col-lg-9">
            <figure>
              <Image filename={"grafico-03"}/>
              <figcaption><strong>Gráfico 3.</strong> Leche en polvo: Contingente arancelario vs Importaciones (2006-2016). (Partidas: 0402.10.00, 0402.21.11, 0402.21.12, 0402.21.21, 0402.21.22, y 0402.29.00.) <br/> <strong>Fuente:</strong> Cámara Hondureña de la Leche (CAHLE), con base en la información del Sistema de Estadísticas de la SIECA, 2019. </figcaption>
            </figure>
            <figure>
              <Image filename={"grafico-04"}/>
              <figcaption><strong>Gráfico 4.</strong> Mantequilla: Contingente arancelario vs Importaciones (2006-2016). (Partidas: 0405.10.00, 0405.20.00, y 0405.90.90) <br/> <strong>Fuente:</strong> Cámara Hondureña de la Leche (CAHLE), con base en la información del Sistema de Estadísticas de la SIECA, 2019.</figcaption>
            </figure>
            <figure>
              <Image filename={"grafico-05"}/>
              <figcaption><strong>Gráfico 5.</strong> Queso: Contingente arancelario vs Importaciones (2006-2017).  (Partidas: 0406.10.00, 0406.20.90, 0406.30.00, 0406.90.10, 0406.90.20, 0406.90.90) <br/> <strong>Fuente:</strong> Cámara Hondureña de la Leche (CAHLE), con base en la información del Sistema de Estadísticas de la SIECA, 2019.</figcaption>
            </figure>
          </div>
          <div className="col-lg-9">
            <p className="main-text">De los productos analizados, vale la pena observar el comportamiento de las importaciones de queso (gráfico 5), de helados (figura 6) y de otros productos lácteos (figura 7) ya que, a diferencia de la leche en polvo (figura 3) y la mantequilla (figura 4) quienes muestran variabilidad entre años, estos productos muestran una tendencia de crecimiento interanual con relación a la entrada en vigencia del DR-CAFTA por lo que la dinámica observada podría incidir en la dirección de las acciones a futuro para el mejor aprovechamiento del tratado por parte de Honduras. </p>
          </div>
          <div className="col-lg-9">
            <figure>
              <Image filename={"grafico-06"}/>
              <figcaption><strong>Gráfico 6.</strong> Helados: Contingente arancelario vs Importaciones (2006-2016). (Partida: 2105.00.00) <br/> <strong>Fuente:</strong> Cámara Hondureña de la Leche (CAHLE), con base en la información del Sistema de Estadísticas de la SIECA, 2019.</figcaption>
            </figure>
            <figure>
              <Image filename={"grafico-07"}/>
              <figcaption><strong>Gráfico 7.</strong> Otros productos lácteos: Contingente arancelario vs Importaciones (2006-2016). (Partida: 2202.90.90 (solamente bebidas a base de leche)). <br/> <strong>Fuente:</strong> Cámara Hondureña de la Leche (CAHLE), con base en la información del Sistema de Estadísticas de la SIECA, 2019.</figcaption>
            </figure>
          </div>
          <div className="col-lg-9">
            <h2 className="sub-title">Exportaciones hondureñas de lácteos con destino a Estados Unidos (2006-2016)</h2>
            <figure>
              <Image filename={"grafico-08"}/>
              <figcaption><strong>Gráfico 8.</strong> Queso: Contingente arancelario vs Exportaciones de Honduras (2006-2017)(Partidas: 04061008, 04061018, 04061028, 04061038, 04061048, 04061058, 04061068, 04061078, 04061088, 04062028, 04062033, 04062039, 04062048, 04062053, 04062063, 04062067, 04062071, 04062075, 04062079, 04062083, 04062087, 04062091, 04063018, 04063028, 04063038, 04063048, 04063053, 04063063, 04063067, 04063071, 04063075, 04063079, 04063083, 04063087, 04063091, 04064070, 04069012, 04069018, 04069032, 04069037, 04069042, 04069048, 04069054, 04069068, 04069074, 04069078, 04069084, 04069088, 04069092, 04069094, 04069097 19019036.) <br/><strong>Fuente:</strong> Cámara Hondureña de la Leche (CAHLE), con base en la información del Centro Internacional de Comercio (ITC) 2019.</figcaption>
            </figure>
            <figure>
              <Image filename={"grafico-09"}/>
              <figcaption><strong>Gráfico 9.</strong> Mantequilla: Contingente arancelario vs Exportaciones de Honduras (2006-2017)(Partidas: 04013075, 04022190, 04039065 (Crema Agria Seca 35-45% grasa), 04039078 (Crema Agria Seca >45% grasa), 04051020, 04052030, 04059020, 21069026, 21069036). <br/> <strong>Fuente:</strong> Cámara Hondureña de la Leche (CAHLE), con base en la información del Centro Internacional de Comercio (ITC) 2019.</figcaption>
            </figure>
          </div>
          <div className="col-lg-9">
            <p className="main-text">De las partidas negociadas en el DR-CAFTA, Honduras ha logrado exportar queso y mantequilla hacia los Estados Unidos. En las gráficas 8 y 9 que corresponden al comercio entre Honduras y los Estados Unidos muestra que las exportaciones hondureñas han tenido un limitado dinamismo durante el periodo, en tanto sus importaciones han aumentado de manera constante, como se ha explicado en el apartado anterior, provocando una brecha importante entre ambas variables. Si este patrón de comportamiento de las exportaciones e importaciones se mantiene el déficit comercial de Honduras con los Estados Unidos presentará riesgos para la economía hondureña. </p>
          </div>
          <div className="col-lg-9">
            <h3 className="sub-title">Consumo de lácteos</h3>
            <p className="main-text">Pese a que los productos derivados de la leche entre otras características representan un aporte excelente de proteína y son una fuente natural de calcio, zinc, magnesio, potasio, fósforo, vitamina D, vitaminas del Complejo B, entre otros, el consumo en Centroamérica es desigual. </p>
            <p className="main-text">En el gráfico 10 se muestra la distribución de consumo de productos lácteos en Centroamérica. Para el año 2017, el país con mayor consumo fue Costa Rica con 216.08 L., seguido de El Salvador (165.77 L.) y Panamá (127.94 L.). Por otra parte, los países con el menor consumo de productos lácteos fueron Honduras (105.16 L.), Nicaragua (87.59 L.) y Guatemala (64.46 L.). </p>
            <p className="main-text">A nivel de región, Costa Rica lidera el consumo per cápita de productos lácteos por habitante al año. No obstante, el promedio de consumo en la región es de 110.07 kg por persona de acuerdo con los datos brindados por la Federación centroamericana del sector lácteo (FECALAC 2018). </p>
            <p className="main-text">La Organización Mundial de la Salud (OMS) por sus amplios beneficios en la salud de niños, jóvenes y adultos recomienda la ingesta de al menos 160 litros por cada persona al año por lo que exhorta a la población a incluir lácteos en su dieta diaria.</p>
          </div>
          <div className="col-lg-9">
            <figure>
              <Image filename={"grafico-10"}/>
              <figcaption><strong>Gráfico 10.</strong> Centroamérica: consumo per cápita (L) de productos lácteos en 2015. <br/>
              <strong>Fuente:</strong> FECALAC 2018, con datos de FAO 2018, World Bank 2018 y Aduanas 2018.</figcaption>
            </figure>
          </div>
          <div className="col-lg-9">
            <h3 className="sub-title">Generación de empleo</h3>
            <p className="main-text">La agricultura en general, pero la ganadería y producción láctea en especial, son relevantes en términos de generación de empleo y como fuente de productos de exportación, a lo que se debe sumar su peso en la seguridad alimentaria de la región. No obstante, el nivel de organización en el país es incipiente, tal como se mencionó en apartados anteriores, la mayor parte de la producción nacional se encuentra albergada en el sector informal de la economía.</p>
            <p className="main-text">En términos generales, el sector agrícola en el país es sumamente relevante. Directamente un 35.8% de la población empleada trabaja en este sector (gráfico 11) (CEPAL 2018) e indirectamente la industria juega un rol fundamental, ya que se encuentra organizada con otros actores de la cadena para procesar y vender la leche a los consumidores. Las actividades de procesamiento desde la pasteurización hasta la fabricación del yogur y otros productos, no solo agregan valor a la leche cruda, sino que además crean puestos de trabajo. Evidencias documentadas en otros países indican que, por cada 100 litros de leche comercializada se crean entre 1,2 y 5,7 puestos de trabajo de tiempo completo (Omore et al. 2011). De acuerdo con la FAO (2016) de existir 150 millones de fincas lecheras a nivel mundial, es posible que el sector contribuya con el sustento de mil millones de personas en el mundo. </p>
          </div>
          <div className="col-lg-9">
            <figure>
              <Image filename={"grafico-11"}/>
              <figcaption><strong>Gráfico 11.</strong> Centroamérica: salario mínimo en agricultura, comercio / servicios y manufacturas y empleo en agricultura, 2013-2014 (En dólares mensuales y porcentajes) <br/> <strong>Fuente:</strong> CEPAL (2018) sobre la base de datos de WageIndicator, 2016, DHAC 2014 y Banco Mundial 2016. </figcaption>
            </figure>
          </div>
          <div className="col-lg-9">
            <p className="main-text">Pese a la importancia que tiene el sector en el país, muestra niveles de ingresos menores al resto de los sectores productivos con salarios que se encuentran por debajo de la media en la región con excepción de Costa Rica y Panamá. Lamentablemente esto representa un desafío para los trabajadores en especial para aquellos cuya producción es familiar. </p>
            <p className="main-text">Hablando de género en la cadena de lácteos, el empleo de hombres en Honduras representa un 50.2% según las cifras del Banco Mundial (2016) y de acuerdo con el Fondo Internacional de Desarrollo Agrícola (IFAD 2014) las mujeres en áreas rurales trabajan más que los hombres como producción familiar y a pequeña escala, pero solo un 20% es remunerado por su labor lo que convierte en desafío, contabilizar correctamente su trabajo en las actividades agrícolas. Las fincas son dirigidas por hombres como cabeza de la familia lo que resulta en una menor apreciación la participación de la mujer en el proceso de producción.</p>
          </div>
          <div className="col-lg-9">
            <figure>
              <Image filename={"grafico-12"}/>
              <figcaption><strong>Gráfico 12.</strong> Centroamérica: algunos indicadores de género en el mercado laboral (En porcentajes) <br/> <strong>Fuente:</strong> CEPAL (2018), sobre la base de datos “World Development Indicators” del Banco Mundial, 2016.</figcaption>
            </figure>
          </div>
          <div className="col-lg-9">
            <h3 className="sub-title">Bibliografía</h3>
            <ul className="bibliography">
              <li>Banco Mundial (2016). Doing Business. [en línea], Washington, D.C., World Bank.</li>
              <li>Disponible en: <a className="animate-link" target="_blank" rel="noopener noreferrer" href="http://www.doingbusiness.org">http://www.doingbusiness.org</a></li>
              <li>2016. World Development Indicators. [en línea], Washington, D.C., Disponible en: <a className="animate-link" target="_blank" rel="noopener noreferrer" href="http://data.worldbank.org/datacatalog/world-development-indicators">http://data.worldbank.org/datacatalog/world-development-indicators</a>.</li>
              <li>CEPAL. Comisión económica para América Latina y El Caribe. 2018. La cadena regional de valor de la industria de lácteos en Centroamérica. </li>
              <li>FECALAC. Federación centroamericana del sector lácteo. 2018. Situación del sector lácteo centroamericano. Taller regional Buenas prácticas pecuarias en ganado bovino de leche y calidad de leche cruda. CR</li>
              <li>FAO. Food and Agriculture Organization of the United Nations. 2016. El sector mundial: datos. </li>
              <li>IFAD. International Fund for Agricultural Development. 2014. Gender and Rural Development Brief - Central America and Mexico. [en línea], Roma, Italia, Disponible en: <a className="animate-link" target="_blank" rel="noopener noreferrer" href="https://www.ifad.org/documents/10180/25dffac9-e28c-4c5c-b7f8-7332e62f09ff">https://www.ifad.org/documents/10180/25dffac9-e28c-4c5c-b7f8-7332e62f09ff</a></li>
              <li>Omore A.; Mulindo C.; Islam F.; Khan I. 2011. Employment generation through small scale dairy marketing and processing. Experiences from Kenya, Bangladesh and Ghana. ILRI: Nairobi y FAO: Roma.</li>
            </ul>
          </div>
        </div>
        </Container>
      </Wrapper>
  </Layout>
)

export default blog