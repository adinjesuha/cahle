import React, { Component } from 'react'
import { Link } from "gatsby"
import styled, { css } from 'styled-components'
import HamburgerIcon from './hamburgerIcon'

const iconLimits = {
  barWidth:   '35px',
  barHeight:   '4px',
  barSpacing: '10px',
}

const IconWrapper = styled.div`
	position: fixed;
  top: 35px;
  right: 20px;
  margin: auto;
  width: ${iconLimits.barWidth};
	height: calc(${iconLimits.barHeight} + ${iconLimits.barSpacing} * 2);
	cursor: pointer;
  z-index: 99999;
  @media (min-width: 1024px) {
    display: none;
  }
`

const PopUp = styled.div`
  position: fixed;
  /* width: 100%; */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: ${props => props.isOpen ? 'auto': 'none'};
  background: ${props => props.isOpen ? 'rgba(0, 0, 0, 0.8)' : 'transparent'};
  z-index: 99998;
  will-change: background;
  transition-property: background,-webkit-transform;
  transition-property: background;
  transition-property: background,-webkit-transform;
  transition-duration: .3s;
  ${props => props.isOpen && css`
    ${PopUpContainer}{
      opacity: 1;
      transform: translateX(0);
    }
  `}
`

const PopUpContainer = styled.nav`
  background: #fff;
  width: 70%;
  max-width: 400px;
  height: 100%;
  position: absolute;
  right: 0;
  opacity:0;
  transform: translateX(100%);
  will-change: transform,opacity;
  transition-property: opacity,-webkit-transform;
  transition-property: transform,opacity;
  transition-property: transform,opacity,-webkit-transform;
  transition-duration: .3s;
`

const PopUpMenu = ({isOpen}) => (
  <PopUp isOpen={isOpen}>
    <PopUpContainer>
      <ul>
        <li><Link tp="/">Link 1</Link></li>
        <li><Link tp="/">Link 2</Link></li>
        <li><Link tp="/">Link 3</Link></li>
        <li><Link tp="/">Link 4</Link></li>
      </ul>
    </PopUpContainer>
  </PopUp>
)

class MobileNav extends Component {
  state = { isOpen: false };

  toggleMenu = () => {
    this.setState((prevState)=>{
      return {isOpen: !prevState.isOpen}
    })
  }

  render() {
    return (
      <>
        <IconWrapper onClick={() => this.toggleMenu()}>
          <HamburgerIcon iconState={this.state.isOpen} />
        </IconWrapper>
        <PopUpMenu isOpen={this.state.isOpen} />
      </>
    )
  }
}


export default MobileNav