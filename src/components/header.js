import React from "react"
import styled from "styled-components"

import DesktopNav from './desktopNav'
import LogoWrapper from './logo'
import { device } from "../styles/breakpoints";

const HeaderEl = styled.header`
  z-index: 999;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  /* transition: background 0.35s ease;
  background: ${props => props.isTop ? 'transparent' : 'var(--bg)'}; */
  background: var(--blue);
  padding: 0 70px 5px;
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


export default class Header extends React.Component{ 
  state = {
    isTop: true
  }
  componentDidMount(){
    document.addEventListener('scroll', ()=> {
      const isTop = window.scrollY < 200;
      if (isTop !== this.state.isTop){
        this.setState({isTop})
      }
    })
  }
  render(){
    return (
      <HeaderEl isTop={this.state.isTop}>
        <HeaderWrapper>
          <LogoWrapper />
          <HeaderNav>
            <DesktopNav />
          </HeaderNav>
        </HeaderWrapper>
      </HeaderEl> 
    )
  }
}