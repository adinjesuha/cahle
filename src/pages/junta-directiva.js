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
      <HeroPage title="Junta Directiva" tags="acerca de" bgImage={Junta}/>
      <Wrapper>
        <Container>
          <Flexcard>
            <FlexImage>
              <figure style={{margin:"20px 20px 0 0"}}>
                <img src={Pic} alt="Presidente de CAHLE"/>
              </figure>
            </FlexImage>
            <FlexContent>
              <h2>Héctor Alberto Ferreira</h2>
              <p>Presitende CAHLE</p>
              <p style={{textAlign: 'justify'}}>Para iniciar es preciso agradecer el apoyo de la junta directiva, personal técnico y administrativo de la Cámara Hondureña de la Leche (CAHLE), gracias a todos por fortalecer esta Cámara y convertirla en una fuente inagotable de conocimiento, amistad y compañerismo. </p> 
            </FlexContent>
          </Flexcard>
          <p style={{textAlign: 'justify'}}>Deseo manifestar mi intención de trabajar para mantener y mejorar las condiciones que nos permitan promover y fomentar la competitividad y el desarrollo de la ganadería. Sin duda alguna, una de mis estrategias está dirigida al fortalecimiento y acción del gremio velando porque las políticas públicas se logren implementar de manera adecuada y asertiva.</p>
          <p style={{textAlign: 'justify'}}>Comparto con ustedes el hecho de que son múltiples los beneficios que la ganadería genera en Honduras al representar uno de los pilares más importantes de la economía. Favorece la generación de más de cuatrocientos mil empleos directos y contribuye con aproximadamente el 13% del PIB agropecuario. Estas variables económicas generadas por una cultura ganadera bovina que aún se mantiene en el país, a pesar de múltiples dificultades y limitaciones que enfrentan, favorece de manera significativa la seguridad alimentaria y evita entre otros factores, la emigración hacia las ciudades urbanas y al exterior.</p>
          <p style={{textAlign: 'justify'}}>Ante las razones antes expuestas, necesitamos fortalecer la ganadería de manera que apunte hacia el progreso. Por eso hoy quiero invitar al sector ganadero que no está organizado, a que nos acompañe para construir juntos un plan desarrollo pensando en la integralidad del desarrollo rural, por ese campo con inversión, con empleo, un campo con visión emprendedora.</p>
          <p style={{textAlign: 'justify'}}>Hoy me siento agradecido ya que el ser presidente de CAHLE, para mi representa el reconocimiento a la labor de tantas personas, a la labor de pequeños, medianos y grandes ganaderos nacionales que se levantan todos los días a trabajar, que van a sus ordeños, que venden sus productos. </p>
          <p style={{textAlign: 'justify'}}>Finalmente permítanme despedirme diciéndoles a ustedes: gracias, infinitas gracias por su trabajo por este país y a la vez motivarles a que, con su deseo de crecer, apostemos a que nuestra ganadería sea productiva.</p>
          <p style={{marginBottom: '40px', textAlign: 'justify'}}>Muchas Gracias.</p>
          <div className="wrapper">
            <div className="table">
            
              <div className="row header">
                <div className="cell">
                  Nombre
                </div>
                <div className="cell">
                  Cargo
                </div>
              </div>
              
              <div className="row">
                <div className="cell" data-title="Nombre">
                Vicente Murillo Cabrera
                </div>
                <div className="cell" data-title="Cargo">
                Vice-presidente
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Nombre">
                Mario Sánchez
                </div>
                <div className="cell" data-title="Cargo">
                Secretario
                </div>
              </div>
              
              <div className="row">
                <div className="cell" data-title="Nombre">
                Anabel Gallardo Ponce
                </div>
                <div className="cell" data-title="Cargo">
                Tesorera
                </div>
              </div>
              
              <div className="row">
                <div className="cell" data-title="Nombre">
                Jorge Antonio Handal
                </div>
                <div className="cell" data-title="Cargo">
                Vocal I
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Nombre">
                Leopoldo Durán Puerto
                </div>
                <div className="cell" data-title="Cargo">
                Vocal II
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Nombre">
                Pablo Santalena
                </div>
                <div className="cell" data-title="Cargo">
                Vocal III
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Nombre">
                José Manuel España
                </div>
                <div className="cell" data-title="Cargo">
                Comisión Fiscalizadora
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Nombre" datatype>
                Edgar Alfredo Oliva
                </div>
                <div className="cell" data-title="Cargo">
                Comisión Fiscalizadora
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Nombre">
                José Luis Gallardo
                </div>
                <div className="cell" data-title="Cargo">
                Comisión Fiscalizadora
                </div>
              </div>
            
            </div>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  )
}