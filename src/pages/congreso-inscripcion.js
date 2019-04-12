import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import SubscribeForm from '../components/subscribeForm'

const Wrapper = styled.div`
  background-color: var(--background);
  width: 100%;
  padding: 170px 0 70px;
  .inscripciones-congreso{
    p{
      font-size: 14px !important;
      color: var(--text);
      strong{
        font-weight: 500;
      }
    }
    .divider-block{
      padding-right: 10px;
      margin-right: 10px;
      border-right: 1px solid var(--ceil);
    }
  }
`



export default () => {
  return (  
    <Layout>
      <Wrapper>
        <Container>  
          <h2 className="main-title variant-title">Inscripciones del Congreso</h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-6">
                  <div className="inscripciones-congreso">
                    <p className="main-text">Utilice el formulario adjunto para solicitar su registro al VII Congreso Nacional de la Leche</p>
                    <p className="main-text"><strong>IMPORTANTE:</strong> Sólo se aprueban las inscripciones de las personas que envíen el comprobante de pago escaneado al correo electrónico: <a className="animate-link" href="mailto:administracion@cahle.org"><strong>administracion@cahle.org</strong></a></p>
                    <h3 className="sub-title">Valores de la inscripción:</h3>
                    <div>
                      <p><strong>Asociados CAHLE (L.)</strong></p>
                      <p className="main-text">
                        <span className="divider-block">Hasta el 01 de julio: 350.00</span>
                        <span>Del 02 al 01 de agosto: 400.00</span>
                      </p>
                    </div>
                    <div>
                      <p><strong>Estudiantes * (L.)</strong></p>
                      <p className="main-text">
                        <span className="divider-block">Hasta el 01 de julio: 250.00</span>
                        <span>Del 02 al 01 de agosto: 300.00</span>
                      </p>
                    </div>
                    <div>
                      <p><strong>Cuota general nacionales (L.)</strong></p>
                      <p className="main-text">
                        <span className="divider-block">Hasta el 01 de julio: 500.00</span>
                        <span>Del 02 al 01 de agosto: 600.00</span>
                      </p>
                    </div>
                    <div>
                      <p><strong>Cuota general extranjeros (L.)</strong></p>
                      <p className="main-text"> 
                        <span className="divider-block">Hasta el 01 de julio: 25.00</span>
                        <span>Del 02 al 01 de agosto: 30.00</span>
                      </p>
                    </div>
                    <p className="main-text">* Estudiantes con carnet de grado de carreras en ciencias agroalimentarias (agronomía, agro negocios, economía agrícola, zootecnia, medicina veterinaria, tecnología de alimentos, ingeniería de alimentos, etc.)</p>
                    <h3 className="sub-title">Pago de la inscripción:</h3>
                    <p className="main-text">Cuenta en Lempiras. Banco de Occidente: <strong>21401159911-4</strong> a nombre de <strong>Cámara Hondureña de la Leche.</strong></p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <SubscribeForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  )
}