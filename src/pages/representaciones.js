import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import Fenagh from '../images/fenagh.png'
import Fepale from '../images/fepale.jpg'
import Fecalac from '../images/fecalac.png'
import Representaciones from '../images/representaciones.jpg'
import HeroPage from '../components/heroPage'

const Wrapper = styled.div`
  margin: 70px 0;
  h2{
    text-align: center;
  }
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  figure{
    width: 100%;
    img{
      max-width: 100%;
    }
  }
  
`

export default () => {
  return (
    <Layout>
      <HeroPage title="Representaciones" tags="asociados" bgImage={Representaciones}/>
      <Container>
        <Wrapper>
          <h2 className="main-title">Formamos parte de</h2>
          <FlexContainer> 
            <figure>
              <img src={Fenagh} alt="Logo FENAGH"/>
            </figure>
            <figure>
              <img src={Fepale} alt="Logo FEPALE"/>
            </figure>
            <figure>
              <img src={Fecalac} alt="Logo FECALAC"/>
            </figure>
          </FlexContainer> 
          <p className="main-text main-text__dark">“Con nuestra participación en cada una de estas organizaciones se promueve el desarrollo del sector lácteo en toda la región y actúa como foro de vinculación en los diferentes segmentos de la cadena”.</p>
        </Wrapper> 
      </Container>
    </Layout>
  )
}
