import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components"

import { device } from '../styles/breakpoints'

const Wrapper =styled.div`
  position: relative;
  z-index: 100;
  min-height: 300px;
  height: 50vh;
  @media ${device.tablet}{
    height: 70vh;
  }
`

const HeroImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
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

export default ({heroData, title, tags}) => {
  const myImage = getImage(heroData)
  return (
    <Wrapper>
      <HeroImage
        image={myImage}
      />
      <FutureTitle>
        <span>{tags}</span>
        <h1>{title}</h1>
      </FutureTitle>
    </Wrapper>
)}
