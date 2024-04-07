import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import SubscribeForm from '../components/Congreso/formCongress'
import { device } from '../styles/breakpoints'
import Steps from '../images/steps.jpg'

const Wrapper = styled.div`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
  h2, h3{
    color: var(--oxford-blue) !important;
  }
  .price{
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
            <div className="col-lg-8">
              <div className="price">
                <h2>Valores de la inscripción:</h2>
                <div className="table">
                  <div className="c-row header">
                    <div className="cell">Categoría</div>
                    <div className="cell">Hasta el 31 de marzo</div>
                    <div className="cell">Del 01 de abril al 02 de mayo</div>
                  </div>
                  <div className="c-row">
                    <div className="cell" data-title="Categoría">
                      <p>* Estudiantes (L.)</p>
                    </div>
                    <div className="cell" data-title="Hasta el 31 de marzo">
                      <p>500.00</p>
                    </div>
                    <div className="cell" data-title="Del 01 de abril al 02 de mayo">
                      <p>600.00</p>
                    </div>
                  </div> 
                  <div className="c-row">
                    <div className="cell" data-title="Categoría">
                      <p>Asociados CAFOGAH y CAHLE (L.)</p>
                    </div>
                    <div className="cell" data-title="Hasta el 31 de marzo">
                      <p>600.00</p>
                    </div>
                    <div className="cell" data-title="Del 01 de abril al 02 de mayo">
                      <p>700.00</p>
                    </div>
                  </div> 
                  <div className="c-row">
                    <div className="cell" data-title="Categoría">
                      <p>Cuota general nacionales (L.)</p>
                    </div>
                    <div className="cell" data-title="Hasta el 31 de marzo">
                      <p>700.00</p>
                    </div>
                    <div className="cell" data-title="Del 01 de abril al 02 de mayo">
                      <p>800.00</p>
                    </div>
                  </div> 
                  <div className="c-row">
                    <div className="cell" data-title="Categoría">
                      <p>Cuota general extranjeros ($.)</p>
                    </div>
                    <div className="cell" data-title="Hasta el 31 de marzo">
                      <p>50.00</p>
                    </div>
                    <div className="cell" data-title="Del 01 de abril al 02 de mayo">
                      <p>60.00</p>
                    </div>
                  </div> 
                </div>
                <p className="main-text navy">* Estudiantes con carnet de grado de carreras en ciencias agroalimentarias (agronomía, agro negocios, economía agrícola, zootecnia, medicina veterinaria, tecnología de alimentos, ingeniería de alimentos, etc.)</p>
              </div>
              <h2>Pago de la inscripción:</h2>
              <p className="main-text navy">Banco de Occidente <br /> A nombre de la Asociación de Beneficio Mutuo Cámara Hondureña de la Leche <br />RTN 0801 9018 008314 <br />Cuenta de ahorro en Lempiras # 21401173406-2</p>
            </div>
            <div className="col-lg-8">
              <h2>Registro:</h2>
              <p className="main-text navy">Utilice el formulario adjunto para solicitar su registro al IX Congreso Nacional de la Leche</p>
              <SubscribeForm />
            </div>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default CongresoInscripciones