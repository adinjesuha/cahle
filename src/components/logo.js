import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

import Logo from '../images/svg-icons/logo-2.svg' 

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0 0;
  flex: 0 0 20%;
  h1{
    margin: 0;
    margin-left: 20px;
    color: var(--blue);
    font-size: 12px;
    font-weight: 700;
    line-height: 1.4;
  }
`

const LogoWrapper  = () => (
  <Wrapper>
    <Link to="/">
      <Logo />
    </Link>
    {/* <Link to="/">
      <h1>Cámara <br/> hondureña <br/>de la leche</h1>
    </Link> */}
  </Wrapper>
)

export default LogoWrapper

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 10px 0;
//   flex: 0 0 20%;
//   h1{
//     margin: 0;
//     margin-left: 5px;
//     color: white;
//     font-family: 'montserrat';
//     font-size: 22px;
//     font-weight: 700;
//     line-height: 1.4;
//     letter-spacing: 1.2px;
//     text-transform: uppercase;
//   }
// `
