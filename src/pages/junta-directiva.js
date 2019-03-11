import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import Junta from '../images/junta-directiva.jpg' 
import HeroPage from '../components/heroPage'

const Wrapper = styled.div`
  padding: 70px 0;
`

export default () => {
  return (
    <Layout>
      <HeroPage title="Junta Directiva" tags="acerca de" bgImage={Junta}/>
      <Wrapper>
        <Container>

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
                Héctor Alberto Ferreira
                </div>
                <div className="cell" data-title="Cargo">
                Presidente
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