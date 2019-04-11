import React from 'react'
import Img from "gatsby-image";
import styled from "styled-components"

import { device } from '../styles/breakpoints'

const Wrapper =styled.div`
  position: relative;
  z-index: 100;
`

const HeroImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  min-height: 300px;
  /*
    Ensure golden ratio for the hero size while limiting it to some extend to
    the viewport width
  */
  height: 50vh;
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
  @media ${device.tablet}{
    height: 70vh;
  }
`
const FutureTitle = styled.div`
  position: absolute;
  width: 100%;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  max-width: 920px;
  text-transform: uppercase;
  padding: 0 1rem;
  h1{
    font-size: 34px;
    line-height: 54px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  span{
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Montserrat';
  }
  @media ${device.tablet}{
    padding: 0;
    h1{
      font-size: 54px;
      line-height: 54px;
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
`

export default ({heroData, title, tags}) => (
  <Wrapper>
    <HeroImage 
      fluid={heroData.fluid}
    />
    <FutureTitle>
      <span>{tags}</span>
      <h1>{title}</h1>
    </FutureTitle>
  </Wrapper>
)
