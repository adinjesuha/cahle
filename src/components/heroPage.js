import React from 'react'
import styled from "styled-components"

import { device } from '../styles/breakpoints'
import Image from './image'

const Wrapper =styled.div`
  position: relative;
`

const ImageWrapper = styled.div`
  background-color: var(--oxford-blue);
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 20vh;
  min-height: 300px;
  /*
    Ensure golden ratio for the hero size while limiting it to some extend to
    the viewport width
  */
  overflow: hidden;
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.5);
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
    font-size: 25px;
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
  @media ${device.mobileS}{
    padding: 0;
    h1{
      font-size: 34px;
    }
  }
  @media ${device.tablet}{
    
    h1{
      font-size: 54px;
    }
  }
`

const HeroPage = props => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image filename={props.bgImage}/>
      </ImageWrapper>
      <FutureTitle>
        <span>{props.tags}</span>
        <h1>{props.title}</h1>
      </FutureTitle>
    </Wrapper> 
  ) 
}

export default HeroPage