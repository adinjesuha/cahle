import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import DesktopNav from './desktopNav'
import { device } from '../styles/breakpoints'
import Logo from '../images/svg-icons/logo.svg'

const HeaderEl = styled.header`
  z-index: 999;
  width: 100%;
  padding: 0 20px;
  position: fixed;
  /* transform: translateY(${props => (props.visible ? 0 : `-100px`)}); */
  left: 0;
  top: 0;
  background: white;
  transition: transform 0.3s ease;
  @media ${device.tablet}{
    padding: 0 40px;
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
  @media ${device.laptop} {
    display: block;
  }
`
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 120px;
    margin: 5px 0;
    @media ${device.laptop} {
      width: 150px;
    }
  }
`

export default class Header extends React.Component {
  render() {
    return (
      <HeaderEl>
        <HeaderWrapper>
          <LogoWrapper>
            <Link to="/">
              <Logo style={{ verticalAlign: 'top' }} />
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
