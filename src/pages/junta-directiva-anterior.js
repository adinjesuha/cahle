import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import HeroPage from '../components/heroPage'

const Wrapper = styled.section`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
  ul.lists{
    font-family: Roboto;
    color: var(--text);
    margin-left: 15px;
    list-style: disc;
  }
`

export default () => {
  return (
    <Layout>
      <HeroPage title="Junta Directiva Anterior" tags="Nuestra Gente" bgImage={"junta-directiva"}/>
      <Wrapper>
        <Container>
          <div className="row justify-content-center">
            <h2 className="main-title variant-title">Periodo 2017-2019</h2>
            <div className="col-lg-9">
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
                  Vicente Murillo Cabrera
                  </div>
                  <div className="cell" data-title="Cargo">
                  Vice-presidente
                  </div>
                </div>
                <div className="c-row">
                  <div className="cell" data-title="Nombre">
                  Mario Sánchez
                  </div>
                  <div className="cell" data-title="Cargo">
                  Secretario
                  </div>
                </div>
                <div className="c-row">
                  <div className="cell" data-title="Nombre">
                  Anabel Gallardo
                  </div>
                  <div className="cell" data-title="Cargo">
                  Tesorerao
                  </div>
                </div>
                <div className="c-row">
                  <div className="cell" data-title="Nombre">
                  Jorge Antonio Handal
                  </div>
                  <div className="cell" data-title="Cargo">
                  Vocal I
                  </div>
                </div>
                <div className="c-row">
                  <div className="cell" data-title="Nombre">
                  Leopoldo Durán Puerto
                  </div>
                  <div className="cell" data-title="Cargo">
                  Vocal II
                  </div>
                </div>
                <div className="c-row">
                  <div className="cell" data-title="Nombre">
                  Paolo Santalena
                  </div>
                  <div className="cell" data-title="Cargo">
                  Vocal III
                  </div>
                </div>
                <div className="c-row">
                  <div className="cell" data-title="Nombre">
                  José Manuel España
                  </div>
                  <div className="cell" data-title="Cargo">
                  Comisión Fiscalizadora
                  </div>
                </div>
                <div className="c-row">
                  <div className="cell" data-title="Nombre" datatype>
                  Edgar Alfredo Oliva
                  </div>
                  <div className="cell" data-title="Cargo">
                  Comisión Fiscalizadora
                  </div>
                </div>
                <div className="c-row">
                  <div className="cell" data-title="Nombre">
                  José Luis Gallardo
                  </div>
                  <div className="cell" data-title="Cargo">
                  Comisión Fiscalizadora
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  )
}