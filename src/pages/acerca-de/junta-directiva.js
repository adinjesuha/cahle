import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/layout'
import Container from '../../components/container'
import Vision from '../../images/vision.jpg'
import Pic from '../../images/Ferreira.png'
import { device } from '../../styles/breakpoints'

const Wrapper = styled.div`
  padding: 70px 0;
`
const Hero = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
  background-image: url(${Vision});
  background-position: center center;
  background-size: cover;
  padding: 300px 0 100px;
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
      <Hero>
        <Container>
          <Title>Junta Directiva</Title>
        </Container>
      </Hero>
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
              <p>Para iniciar es preciso agradecer el apoyo de la junta directiva, personal técnico y administrativo de la Cámara Hondureña de la Leche (CAHLE), gracias a todos por fortalecer esta Cámara y convertirla en una fuente inagotable de conocimiento, amistad y compañerismo.</p> 
            </FlexContent>
          </Flexcard>
          <p>Deseo manifestar mi intención de trabajar para mantener y mejorar las condiciones que nos permitan promover y fomentar la competitividad y el desarrollo de la ganadería. Sin duda alguna, una de mis estrategias está dirigida al fortalecimiento y acción del gremio velando porque las políticas públicas se logren implementar de manera adecuada y asertiva.
              Comparto con ustedes el hecho de que son múltiples los beneficios que la ganadería genera en Honduras al representar uno de los pilares más importantes de la economía. Favorece la generación de más de cuatrocientos mil empleos directos y contribuye con aproximadamente el 13% del PIB agropecuario. Estas variables económicas generadas por una cultura ganadera bovina que aún se mantiene en el país, a pesar de múltiples dificultades y limitaciones que enfrentan, favorece de manera significativa la seguridad alimentaria y evita entre otros factores, la emigración hacia las ciudades urbanas y al exterior.
              Ante las razones antes expuestas, necesitamos fortalecer la ganadería de manera que apunte hacia el progreso. Por eso hoy quiero invitar al sector ganadero que no está organizado, a que nos acompañe para construir juntos un plan desarrollo pensando en la integralidad del desarrollo rural, por ese campo con inversión, con empleo, un campo con visión emprendedora.
              Hoy me siento agradecido ya que el ser presidente de CAHLE, para mi representa el reconocimiento a la labor de tantas personas, a la labor de pequeños, medianos y grandes ganaderos nacionales que se levantan todos los días a trabajar, que van a sus ordeños, que venden sus productos. 
              Finalmente permítanme despedirme diciéndoles a ustedes: gracias, infinitas gracias por su trabajo por este país y a la vez motivarles a que, con su deseo de crecer, apostemos a que nuestra ganadería sea productiva.</p>
              <p style={{marginBottom: '40px'}}>Muchas Gracias.</p>
          <div className="wrapper">
            <div className="table">
            
              <div className="row header">
                <div className="cell">
                  Nombre
                </div>
                <div className="cell">
                  Cargo
                </div>
                <div className="cell">
                  E-mail
                </div>
              </div>
              
              <div className="row">
                <div className="cell" data-title="Nombre">
                Vicente Murillo Cabrera
                </div>
                <div className="cell" data-title="Cargo">
                Vice-presidente
                </div>
                <div className="cell" data-title="E-mail">
                correo@e-mail.com
                </div>
              </div>
              
              <div className="row">
                <div className="cell" data-title="Nombre">
                Anabel Gallardo Ponce
                </div>
                <div className="cell" data-title="Cargo">
                Tesorera
                </div>
                <div className="cell" data-title="E-mail">
                correo@e-mail.com
                </div>
              </div>
              
              <div className="row">
                <div className="cell" data-title="Nombre">
                Jorge Antonio Handal
                </div>
                <div className="cell" data-title="Cargo">
                Vocal I
                </div>
                <div className="cell" data-title="E-mail">
                correo@e-mail.com
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Nombre">
                Leopoldo Durán Puerto
                </div>
                <div className="cell" data-title="Cargo">
                Vocal II
                </div>
                <div className="cell" data-title="E-mail">
                correo@e-mail.com
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Nombre">
                Pablo Santalena
                </div>
                <div className="cell" data-title="Cargo">
                Vocal III
                </div>
                <div className="cell" data-title="E-mail">
                correo@e-mail.com
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Nombre">
                José Manuel España
                </div>
                <div className="cell" data-title="Cargo">
                Comisión Fiscalizadora
                </div>
                <div className="cell" data-title="E-mail">
                correo@e-mail.com
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Nombre" datatype>
                Edgar Alfredo Oliva
                </div>
                <div className="cell" data-title="Cargo">
                Comisión Fiscalizadora
                </div>
                <div className="cell" data-title="E-mail">
                correo@e-mail.com
                </div>
              </div>

              <div className="row">
                <div className="cell" data-title="Nombre">
                José Luis Gallardo
                </div>
                <div className="cell" data-title="Cargo">
                Comisión Fiscalizadora
                </div>
                <div className="cell" data-title="E-mail">
                correo@e-mail.com
                </div>
              </div>
            
            </div>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  )
}