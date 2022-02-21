import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import SubscribeForm from '../components/Congreso/formCongress'
import { device } from '../styles/breakpoints'

const Wrapper = styled.div`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
  .price{
    h2, h3{
      color: var(--oxford-blue) !important;
    }
    h3{
      margin-bottom: 15px;
    }
    p{
      margin: 0;
      margin-bottom: 10px;
    }
    &__category{
      border-bottom: 1px solid var(--anti-flash-white);
      padding-bottom: 20px;
      &--note{
        font-size: 12px;
        font-weight: bold;
      }
      &:last-child{
        border-bottom: 0px;
      }
    }
  }
`

const HeroSection = styled.div`
  width: 100%;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h2{
    color: var(--oxford-blue);
    font-size: 32px;
    text-transform: uppercase;
    margin-top: 80px;
  }
  @media ${device.tablet}{
    height: 40vh;
    h2{
      font-size: 38px;
    }
  }
`


const CongresoInscripciones = () => {
  return (
    <Layout>
      <Wrapper>
        <Container>
          <HeroSection>
            <h2>Inscripciones del Congreso</h2>
          </HeroSection>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="price">
                <h2>Valores de la Inscripción</h2>
                <div className="price__category">
                  <h3>Estudiantes</h3>
                  <p className="main-text navy">Hasta el 30 de marzo: <strong> Lps.400.00</strong></p>
                  <p className="main-text navy">Del 01 al 29 de abril: <strong> Lps. 500.00</strong></p>
                  <span className="price__category--note">Estudiantes con carnet de grado de carreras en ciencias agroalimentarias (agronomía, agro negocios, economía agrícola, zootecnia, medicina veterinaria, tecnología de alimentos, ingeniería de alimentos, etc.)</span>
                </div>
                <div className="price__category">
                  <h3>Asociados CAHLE</h3>
                  <p className="main-text navy">Hasta el 30 de marzo: <strong> Lps. 500.00</strong></p>
                  <p className="main-text navy">Del 01 al 29 de abril: <strong> Lps. 600.00</strong></p>
                </div>
                <div className="price__category">
                  <h3>Cuota general nacionales</h3>
                  <p className="main-text navy">Hasta el 30 de marzo: <strong> Lps. 600.00</strong></p>
                  <p className="main-text navy">Del 01 al 29 de abril: <strong> Lps. 700.00</strong></p>
                </div>
                <div className="price__category">
                  <h3>Cuota general extranjeros</h3>
                  <p className="main-text navy">Hasta el 30 de marzo: <strong> US$ 40.00</strong></p>
                  <p className="main-text navy">Del 01 al 29 de abril: <strong> US$ 50.00</strong></p>
                </div>
                <div className="price__category">
                  <h3>Pagos de la inscripción:</h3>
                  <p className="main-text navy">Cuenta de ahorro en Lempiras: <strong> Banco de Occidente: 21401173406-2</strong></p>
                  <p className="main-text navy">Cuenta en Dólares: <strong>Banco de Occidente: 124010129573</strong></p>
                  <p className="main-text navy"><strong>*Cuentas a nombre de Cámara Hondureña de la Leche.</strong></p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <SubscribeForm />
            </div>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default CongresoInscripciones