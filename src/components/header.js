import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import DesktopNav from './desktopNav'
import { device } from "../styles/breakpoints";
import Logo from '../images/svg-icons/logo-2.svg'

const HeaderEl = styled.header`
  z-index: 999;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: var(--blue);
  padding: 0 40px 5px;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const HeaderNav = styled.div`
  display: none;
  @media ${device.laptop}{
    display: block;
  }
`
const LogoWrapper = styled.div`
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

export default class Header extends React.Component{ 
  render(){
    return (
      <HeaderEl>
        <HeaderWrapper>
          <LogoWrapper>
            <Link to="/">
              <Logo />
            </Link>
          </LogoWrapper>
          <HeaderNav>
            <DesktopNav />
          </HeaderNav>
        </HeaderWrapper>
      </HeaderEl> 
    )
  }
}