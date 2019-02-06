import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

import Logo from '../images/svg-icons/logo.svg' 

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  flex: 0 0 20%;
  h1{
    margin: 0;
    margin-left: 5px;
    color: white;
    font-family: 'montserrat';
    font-size: 22px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }
`

const LogoWrapper  = () => (
  <Wrapper>
    <Link to="/" style={{lineHeight: '0'}}>
      <Logo />
    </Link>
    <Link to="/">
      <h1>CAHLE</h1>
    </Link>
  </Wrapper>
)

export default LogoWrapper
