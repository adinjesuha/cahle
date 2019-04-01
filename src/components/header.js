import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import DesktopNav from './desktopNav'
import { device } from "../styles/breakpoints";
import Logo from '../images/svg-icons/logo.svg'

const HeaderEl = styled.header`
  z-index: 999;
  width: 100%;
  padding: 0 40px;
  position: fixed;
  left: 0;
  top: 0;
  background: var(--blue);
  @media ${device.tablet}{
    padding: 0 40px 5;
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
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
              <Logo style={{verticalAlign:'top'}}/>
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