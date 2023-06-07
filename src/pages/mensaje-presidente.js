import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import Image from '../components/image'
import HeroPage from '../components/heroPage'

const Wrapper = styled.div`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
`


export default () => {
  return (
    <Layout>
      <HeroPage title="Mensaje del Presidente" tags="Nuestra Gente" bgImage={"junta-directiva"}/>
      <Wrapper>
        <Container>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-4">
                  <Image filename={"Gilberto"}/>
                </div>
                <div className="col-lg-8">
                  <h2 className="sub-title">Lic. Gilberto Moreno</h2>
                  <span>Presidente de CAHLE</span>
                  <p className="main-text">Para iniciar es preciso agradecer el apoyo de la junta directiva, personal técnico y administrativo de la Cámara Hondureña de la Leche (CAHLE), gracias a todos por fortalecer esta Cámara y convertirla en una fuente inagotable de conocimiento, amistad y compañerismo. </p> 
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <p className="main-text">Deseo manifestar mi intención de trabajar para mantener y mejorar las condiciones que nos permitan promover y fomentar la competitividad y el desarrollo de la ganadería. Sin duda alguna, una de mis estrategias está dirigida al fortalecimiento y acción del gremio velando porque las políticas públicas se logren implementar de manera adecuada y asertiva.</p>
              <p className="main-text">Comparto con ustedes el hecho de que son múltiples los beneficios que la ganadería genera en Honduras al representar uno de los pilares más importantes de la economía. Favorece la generación de más de cuatrocientos mil empleos directos y contribuye con aproximadamente el 13% del PIB agropecuario. Estas variables económicas generadas por una cultura ganadera bovina que aún se mantiene en el país, a pesar de múltiples dificultades y limitaciones que enfrentan, favorece de manera significativa la seguridad alimentaria y evita entre otros factores, la emigración hacia las ciudades urbanas y al exterior.</p>
              <p className="main-text">Ante las razones antes expuestas, necesitamos fortalecer la ganadería de manera que apunte hacia el progreso. Por eso hoy quiero invitar al sector ganadero que no está organizado, a que nos acompañe para construir juntos un plan desarrollo pensando en la integralidad del desarrollo rural, por ese campo con inversión, con empleo, un campo con visión emprendedora.</p>
              <p className="main-text">Hoy me siento agradecido ya que el ser presidente de CAHLE, para mi representa el reconocimiento a la labor de tantas personas, a la labor de pequeños, medianos y grandes ganaderos nacionales que se levantan todos los días a trabajar, que van a sus ordeños, que venden sus productos. </p>
              <p className="main-text">Finalmente permítanme despedirme diciéndoles a ustedes: gracias, infinitas gracias por su trabajo por este país y a la vez motivarles a que, con su deseo de crecer, apostemos a que nuestra ganadería sea productiva.</p>
              <p className="main-text">Muchas Gracias.</p>
            </div>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  )
}