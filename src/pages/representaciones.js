import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import Representaciones from '../images/representaciones.jpg'
import HeroPage from '../components/heroPage'
import Image from '../components/image'

const Wrapper = styled.div`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
  p{
    text-align: center;
  }
  .image-container{
    background-color: white;
    padding: 10px;
    width: 100%;
    min-height: 250px;
  }
`


export default () => {
  return (
    <Layout>
      <HeroPage title="Representaciones" tags="asociados" bgImage={Representaciones}/>
      <Wrapper>
        <Container>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2 className="main-title variant-title">Formamos parte de</h2>
            </div>
            <div className="col-lg-9">
              <Container>
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <Image filename={"fenagh"}/>
                  </div>
                  <div className="col-lg-4">
                    <Image filename={"fepale"}/>
                  </div>
                  <div className="col-lg-4">
                    <Image filename={"fecalac"}/>
                  </div>
                </div>
              </Container>
            </div>
            <div className="col-lg-9">
              <p className="main-text">“Con nuestra participación en cada una de estas organizaciones se promueve el desarrollo del sector lácteo en toda la región y actúa como foro de vinculación en los diferentes segmentos de la cadena”</p>
            </div>
          </div>
        </Container>
      </Wrapper> 
    </Layout>
  )
}
