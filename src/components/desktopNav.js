import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { NuestraGente, asociados, documentacion } from '../utils/menuConfig'

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
      padding:0;
      margin-right: 25px;
      > a, span {
        font-weight: 500;
        letter-spacing: 0.5px;
        display: inline-block;
        padding: 20px 0;
        font-size: 13px;
        line-height: 42px;
        color: white;
        transition: 0.3s;
      }
      &:hover a, &:hover span{
        color: rgba(255,255,255,0.5);
      }
      span{
        cursor: default;
      }
      &:last-child{
        margin-right: 0;
      }
    }
    > li.has_dropdown{
      position: relative;
      .dropdown {
        background: #fff;
        position: absolute;
        min-width: 210px;
        z-index: 3;
        visibility: hidden;
        opacity: 0;
        transition: 0.3s;
        border-top: 2px solid var(--active);
        border-radius: 0 0 4px 4px;
        box-shadow: 0 5px 40px rgba(82, 85, 90, 0.2);
        top: calc(100% + 20px);
      }
      &:hover .dropdown{
        opacity: 1;
        visibility: visible;
        transform: translateY(-20px);
      }
      ul li a {
        padding: 0 15px;
        text-transform: capitalize;
        font-weight: 600;
        color: var(--blue);
        line-height: 60px;
        transition: 0.2s;
        background-color: transparent;
        display: block;
        font-size: 13px;

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
            <Link to="/acerca-de-cahle">Acerca de CAHLE</Link>
          </li>
          <li className="has_dropdown">
            <span>Nuestra Gente</span>
            <div className="dropdown">
              <ul>
                {NuestraGente.map(item => (
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