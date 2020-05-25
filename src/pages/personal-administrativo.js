import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import HeroPage from '../components/heroPage'

const Wrapper = styled.div`
  padding: 70px 0;
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
  .cell{
    color: var(--text);
    font-family: roboto;
  }
  .header > .cell{
    color: white !important;
    font-family: Montserrat;
  }
`

export default () => {
  return (
    <Layout>
      <HeroPage title="Personal Administrativo" tags="Nuestra Gente" bgImage={"junta-directiva"}/>
      <Wrapper>
        <Container>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="table">
                <div className="c-row header">
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
                <div className="c-row">
                  <div className="cell" data-title="Nombre">
                  Carmen A. García
                  </div>
                  <div className="cell" data-title="Cargo">
                  Directora Ejecutiva
                  </div>
                  <div className="cell" data-title="E-mail">
                    <a href="mailto:camaradelaleche@gmail.com">camaradelaleche@gmail.com</a>
                  </div>
                </div>
                <div className="c-row">
                  <div className="cell" data-title="Nombre">
                    Edward Ordóñez
                  </div>
                  <div className="cell" data-title="Cargo">
                    Dirección Técnica de Campo
                  </div>
                  <div className="cell" data-title="E-mail">
                    <a href="mailto:tecnicodecampocahle@gmail.com">tecnicodecampocahle@gmail.com</a>
                  </div>
                </div>
                <div className="c-row">
                  <div className="cell" data-title="Nombre" datatype>
                    Carmen Chávez
                  </div>
                  <div className="cell" data-title="Cargo">
                    Ingeniera de Negocios
                  </div>
                  <div className="cell" data-title="E-mail">
                    <a href="mailto:admoncahle@gmail.com ">admoncahle@gmail.com </a>
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
