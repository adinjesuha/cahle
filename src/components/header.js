import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Container from './container'
import DesktopNav from './desktopNav'
import LogoWrapper from './logo'
import { device } from "../styles/breakpoints";

const HeaderEl = styled.header`
  z-index: 999;
  width: 100%;
  position: relative;
  left: 0;
  top: 0;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const HeaderRight = styled.div`
  flex: 0 0 20%;
  opacity: 1;
  margin: 0;
  transition: opacity 0.3s ease;
  display: none;
  a{
    font-family: 'montserrat';
    text-transform: uppercase;
    color: white;
    font-size: 12px;
    font-weight: 700;
    display: inline-block;
    min-width: 150px;
    padding: 0 20px;
    height: 50px;
    line-height: 50px;
    border-radius: 40px;
    letter-spacing: 0.065em;  
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease;
    background: var(--main-blue);
    &:hover{
      color: white;
      background: var(--main-blue);
    }
  }
  @media ${device.laptop}{
    display: flex;
    align-items: center;
    justify-content: right;
  }
`
const HeaderCenter = styled.div`
  flex: 0 0 60%;
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
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop){
        this.setState({isTop})
      }
    })
  }
  render(){
    return (
      <HeaderEl isTop={this.state.isTop}>
        <Container>
          <HeaderWrapper>
            <LogoWrapper />
            <HeaderCenter>
              <DesktopNav />
            </HeaderCenter>
            <HeaderRight>
              <Link to="/noticias-y-eventos">Noticias y Eventos</Link>
            </HeaderRight>
          </HeaderWrapper>
        </Container>
      </HeaderEl> 
    )
  }
}