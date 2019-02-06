import React from 'react'
import Img from "gatsby-image";
import styled from "styled-components"

import Container from './container'
import { device } from '../styles/breakpoints'

const Hero = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
  margin-top: -80px;
  background-image: url(${props => props.imageURL});
  background-position: center center;
  background-size: cover;
  padding: 300px 0 50px;
  &::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
  }
`

const HeroImage = styled(Img)`
  /*
    Ensure golden ratio for the hero size while limiting it to some extend to
    the viewport width
  */
  height: 70vh;
`
const FutureTitle = styled.div`
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  text-align: left;
  padding: 0 20px;
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
  <Hero imageURL={heroData.file.url}>
    <FutureTitle>
      <span>{tags}</span>
      <h1>{title}</h1>
    </FutureTitle>
  </Hero>
)
