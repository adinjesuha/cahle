import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { acercaDe, asociados, documentacion } from '../utils/menuConfig'

const NavBar = styled.nav`
  position: relative;
  .navbar-nav{
    display: flex;
    flex-direction: row;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    > li {
      display: inline-block;
      padding: 20px 20px;
      transition: all 0.3 ease;
      > a, span {
        font-weight: 500;
        letter-spacing: 0.5px;
        padding: 0;
        font-size: 14px;
        line-height: 42px;
        color: white;
        transition: 0.3s;
      }
      span{
        cursor: default;
      }
      
      &:last-child{
        margin-right: 0;
      }
      &:hover{
        background: var(--active);
      }
    }
    > li.has_dropdown{
      position: relative;
      &:after{
        content: '+';
        color: white;
        margin-left: 5px;
      }
      .dropdown {
        position: absolute;
        min-width: 271px;
        background: #fff;
        z-index: 3;
        visibility: hidden;
        opacity: 0;
        transition: 0.3s;
        border-top: 1px solid var(--active);
        border-radius: 0 0 4px 4px;
        box-shadow: 0 5px 40px rgba(82, 85, 90, 0.2);
        top: calc(100% + 20px);
        transform: translateX(-20px);
      }
      &:hover .dropdown{
        opacity: 1;
        visibility: visible;
        transform: translate(-20px, -20px);
      }
      ul li a {
        padding: 0 10px;
        text-transform: uppercase;
        font-weight: 600;
        color: var(--blue);
        line-height: 60px;
        transition: 0.2s;
        background-color: transparent;
        display: block;
        font-size: 13px;
        letter-spacing: 0.5px;
        &:hover{
          color: white;
          background: var(--active);
        }
      }
      ul li:last-child a {
        border-radius: 0 0 3px 3px;
      }
    }
  }
`

export default class desktopNav extends Component {
  render() {
    return (
      <NavBar>
        <ul className="navbar-nav">
          <li>
            <Link to="/perfil-comercial">Acerca de CAHLE</Link>
          </li>
          <li className="has_dropdown">
            <span>Nuestra Gente</span>
            <div className="dropdown">
              <ul>
                {acercaDe.map(item => (
                  <li key={item.name}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="has_dropdown">
            <span>Asociados</span>
            <div className="dropdown">
              <ul>
                {asociados.map(item => (
                  <li key={item.name}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="has_dropdown">
            <span>Documentación</span>
            <div className="dropdown">
              <ul>
                {documentacion.map(item => (
                  <li key={item.name}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <Link to="/perfil-comercial">Perfil Comercial</Link>
          </li>
          <li>
            <Link to="/noticias-y-eventos">Noticias & Eventos</Link>
          </li>
        </ul>
      </NavBar>
    )
  }
}