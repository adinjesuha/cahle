import React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes, css } from 'styled-components'

import { acercaDe, asociados, documentacion } from '../utils/menuConfig'

const subMenuFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const NavEl = styled.nav`
  height: 100%;
`
const NavMenu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0;
`
const MenuItem = styled.li`
  margin: 0;
	padding: 20px;
	position: relative;
  font-family: 'montserrat';
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  span {
    font-size: inherit;
  }
  &:hover{
    /*<-- vital css -->*/
    ul {
      display: block;
    }
  }
  &:last-child{
    padding-right: 0;
  }
  &:nth-child(3), &:nth-child(4) {
    ul {
      left: -25%;
    }
  }
`
const NavSubMenu = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-weight: 300;
  border-radius: 4px;
  background: white;
  text-transform: uppercase;
  display: none;
  position: absolute;
  left: -50%;
  min-width: 220px;
  box-shadow: 0 50px 100px -20px rgba(50,50,93,.25),0 30px 60px -30px rgba(0,0,0,.3);
  animation: ${subMenuFade} 0.2s ease-in;
  &:nth-child(3){
    left: -20%;
  }
  &::after{
    content: '';
    width: 20px;
    height: 20px;
    background: white;
    position: absolute;
    border-radius: 4px;
    top: -8px;
    left: calc(50% - 10px);
    transform: translateX(-50%);
    transform: rotate(45deg);
    z-index: -1;
  }
`
const SubMenuItem = styled.li`
  display: block;
  margin: 0;
  a {
    padding: 20px 0 20px 20px;
    opacity: 1;
    font-family: 'montserrat';
    font-weight: 700;
    color: var(--blue);
    text-transform: uppercase;
    font-size: 12px;
    display: block;
    transition: color 0.3s ease;
  }
  &:hover{
    a{
      color: var(--green);
    }
  }
`


const Submenu = props => {
  const items = props.items
  const ListItems = items.map((items) => 
    <SubMenuItem><Link to={items.link}>{items.name}</Link></SubMenuItem>
  )
  return (
    <NavSubMenu>
      {ListItems}
    </NavSubMenu>
  )
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAboutMenu: false
    };
  }
  handleHover = () => {
    this.setState({ showAboutMenu: true });
  };
  
  handleLeave = () => {
    this.setState({ showAboutMenu: false });
  };
  
  render() {
    return (
      <NavEl>
        <NavMenu>
          <MenuItem onMouseLeave={this.handleLeave}>
            <span onMouseEnter={this.handleHover}>
            Acerca de</span>
            { this.state.showAboutMenu && <Submenu items={acercaDe}  /> }
          </MenuItem>
          <MenuItem onMouseLeave={this.handleLeave}>
            <span onMouseEnter={this.handleHover}>
            Asociados</span>
            { this.state.showAboutMenu && <Submenu items={asociados}  /> }
          </MenuItem>
          <MenuItem onMouseLeave={this.handleLeave}>
            <span onMouseEnter={this.handleHover}>
            Documentación</span>
            { this.state.showAboutMenu && <Submenu items={documentacion} /> }
          </MenuItem>
          <MenuItem>
            <Link to="/perfil-comercial">
              <span style={{color: 'white'}}>Perfil Comercial</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/noticias-y-eventos">
              <span style={{color: 'white'}}>Noticias y Eventos</span>
            </Link>
          </MenuItem>
        </NavMenu>
      </NavEl>
    )
  }
}

export default Menu

