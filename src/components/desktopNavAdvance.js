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
      padding: 20px 0;
      margin-right: 30px;
      > a, span {
        font-weight: 500;
        padding: 0;
        font-size: 13px;
        line-height: 42px;
        color: white;
        transition: 0.3s;
      }
      span{
        cursor: pointer;
      }
      &:last-child{
        margin-right: 0;
      }
      &:hover > a{
        color: var(--green);
      }
      &:hover > span{
        color: var(--green);
      }
    }
    > li.has_dropdown{
      position: relative;
      .dropdown {
        position: absolute;
        min-width: 271px;
        background: #fff;
        z-index: 3;
        visibility: hidden;
        opacity: 0;
        transition: 0.3s;
        border-top: 1px solid var(--green);
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
        padding: 0 10px;
        text-transform: capitalize;
        font-weight: 400;
        color: var(--blue);
        line-height: 60px;
        transition: 0.2s;
        background-color: transparent;
        display: block;
        &:hover{
          color: var(--green);
          background: var(--blue);
        }
      }
      ul li:last-child a {
        border-radius: 0 0 3px 3px;
      }
    }
  }
`

export default class desktopNavAdvance extends Component {
  render() {
    return (
      <NavBar>
        <ul className="navbar-nav">
          <li className="has_dropdown">
            <span>ACERCA DE</span>
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
            <span>ASOCIADOS</span>
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
            <span>DOCUMENTACIÓN</span>
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
            <Link to="/">CONGRESO</Link>
          </li>
          <li>
            <Link to="/perfil-comercial">PERFIL COMERCIAL</Link>
          </li>
          <li>
            <Link to="/noticias-y-eventos">NOTICIAS Y EVENTOS</Link>
          </li>
        </ul>
      </NavBar>
    )
  }
}