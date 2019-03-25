import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import Objetivos from '../images/objetivos.jpg'
import HeroPage from '../components/heroPage' 

export default () => {
  return (
    <Layout>
      <HeroPage title="Historia, Misión, Visión y Objetivos" tags="acerca de" bgImage={Objetivos}/>
      <Container>
        
      </Container>
    </Layout>
  )
}