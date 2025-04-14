import React from 'react'
import styled from 'styled-components'

import StyledBackgroundSection from '../styledBackground'
import LogoCongreso from '../../images/logo-congreso-ix.png'

const ContentBackground = styled.div`
  max-width: 320px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    margin-top: 20px;
    width: 100%;
    min-width: 280px;
  }
`

const HeroBg = () => (
  <StyledBackgroundSection>
    <ContentBackground>
      <img 
        src={LogoCongreso}
        alt="Congreso de la leche 2025"
      />
    </ContentBackground>
  </StyledBackgroundSection>
)

export default HeroBg