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
      <HeroPage title="Junta Directiva Actual" tags="acerca de" bgImage={Junta}/>
      <Wrapper>
        <Container>

          <div className="wrapper">
            <div className="table">
            
              <div className="c-row header">
                <div className="cell">
                  Nombre
                </div>
                <div className="cell">
                  Cargo
                </div>
              </div>

              <div className="c-row">
                <div className="cell" data-title="Nombre">
                Héctor Alberto Ferreira
                </div>
                <div className="cell" data-title="Cargo">
                Presidente
                </div>
              </div>
              
              <div className="c-row">
                <div className="cell" data-title="Nombre">
                Jorge Antonio Handal
                </div>
                <div className="cell" data-title="Cargo">
                Vice-presidente
                </div>
              </div>

              <div className="c-row">
                <div className="cell" data-title="Nombre">
                Vicente Murillo Cabrera
                </div>
                <div className="cell" data-title="Cargo">
                Secretario
                </div>
              </div>
              
              <div className="c-row">
                <div className="cell" data-title="Nombre">
                José Manuel España Herrera
                </div>
                <div className="cell" data-title="Cargo">
                Tesorerao
                </div>
              </div>
              
              <div className="c-row">
                <div className="cell" data-title="Nombre">
                Leopoldo Durán Puerto
                </div>
                <div className="cell" data-title="Cargo">
                Vocal I
                </div>
              </div>

              <div className="c-row">
                <div className="cell" data-title="Nombre">
                Gilberto Moreno
                </div>
                <div className="cell" data-title="Cargo">
                Vocal II
                </div>
              </div>

              <div className="c-row">
                <div className="cell" data-title="Nombre">
                Juan Sauceda
                </div>
                <div className="cell" data-title="Cargo">
                Vocal III
                </div>
              </div>

              <div className="c-row">
                <div className="cell" data-title="Nombre">
                Edgar Oliva
                </div>
                <div className="cell" data-title="Cargo">
                Vocal IV
                </div>
              </div>

              <div className="c-row">
                <div className="cell" data-title="Nombre">
                Anabel Gallardo
                </div>
                <div className="cell" data-title="Cargo">
                Comisión Fiscalizadora
                </div>
              </div>

              <div className="c-row">
                <div className="cell" data-title="Nombre" datatype>
                Adalberto García
                </div>
                <div className="cell" data-title="Cargo">
                Comisión Fiscalizadora
                </div>
              </div>

              <div className="c-row">
                <div className="cell" data-title="Nombre">
                Medardo Guevara
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