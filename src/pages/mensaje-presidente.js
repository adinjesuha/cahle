import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import Pic from '../images/Ferreira.png'
import { device } from '../styles/breakpoints'
import Junta from '../images/junta-directiva.jpg' 
import HeroPage from '../components/heroPage'

const Wrapper = styled.div`
  padding: 70px 0;
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
  h2{
    margin-bottom: 0;
  }
  flex: 0 0 100%;
  span{
    color: var(--light-text);
    margin: 0;
  }
  @media ${device.tablet}{
    flex: 0 0 60%;
  }
  @media ${device.laptop}{
    flex: 0 0 70%;
  }
`

const RadiusImage = styled.figure`
  margin: 20px 20px 0 0;
  img{
    background-color: var(--bg-light);
    border-radius: 50%;
  }
`

export default () => {
  return (
    <Layout>
      <HeroPage title="Mensaje del Presidente" tags="acerca de" bgImage={Junta}/>
      <Wrapper>
        <Container>
          <Flexcard>
            <FlexImage>
              <RadiusImage>
                <img src={Pic} alt="Presidente de CAHLE"/>
              </RadiusImage>
            </FlexImage>
            <FlexContent>
              <h2 className="sub-title">Héctor Alberto Ferreira</h2>
              <span>Presidente CAHLE</span>
              <p className="main-text main-text__dark">Para iniciar es preciso agradecer el apoyo de la junta directiva, personal técnico y administrativo de la Cámara Hondureña de la Leche (CAHLE), gracias a todos por fortalecer esta Cámara y convertirla en una fuente inagotable de conocimiento, amistad y compañerismo. </p> 
              <p className="main-text main-text__dark">Deseo manifestar mi intención de trabajar para mantener y mejorar las condiciones que nos permitan promover y fomentar la competitividad y el desarrollo de la ganadería. Sin duda alguna, una de mis estrategias está dirigida al fortalecimiento y acción del gremio velando porque las políticas públicas se logren implementar de manera adecuada y asertiva.</p>
            </FlexContent>
          </Flexcard>
          
          <p className="main-text main-text__dark">Comparto con ustedes el hecho de que son múltiples los beneficios que la ganadería genera en Honduras al representar uno de los pilares más importantes de la economía. Favorece la generación de más de cuatrocientos mil empleos directos y contribuye con aproximadamente el 13% del PIB agropecuario. Estas variables económicas generadas por una cultura ganadera bovina que aún se mantiene en el país, a pesar de múltiples dificultades y limitaciones que enfrentan, favorece de manera significativa la seguridad alimentaria y evita entre otros factores, la emigración hacia las ciudades urbanas y al exterior.</p>
          <p className="main-text main-text__dark">Ante las razones antes expuestas, necesitamos fortalecer la ganadería de manera que apunte hacia el progreso. Por eso hoy quiero invitar al sector ganadero que no está organizado, a que nos acompañe para construir juntos un plan desarrollo pensando en la integralidad del desarrollo rural, por ese campo con inversión, con empleo, un campo con visión emprendedora.</p>
          <p className="main-text main-text__dark">Hoy me siento agradecido ya que el ser presidente de CAHLE, para mi representa el reconocimiento a la labor de tantas personas, a la labor de pequeños, medianos y grandes ganaderos nacionales que se levantan todos los días a trabajar, que van a sus ordeños, que venden sus productos. </p>
          <p className="main-text main-text__dark">Finalmente permítanme despedirme diciéndoles a ustedes: gracias, infinitas gracias por su trabajo por este país y a la vez motivarles a que, con su deseo de crecer, apostemos a que nuestra ganadería sea productiva.</p>
          <p className="main-text main-text__dark">Muchas Gracias.</p>
        </Container>
      </Wrapper>
    </Layout>
  )
}