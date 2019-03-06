import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

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
            <div class="dropdown">
              <ul>
                <li>
                  <Link to="/vision-y-mision">Historia, Visión y Misión</Link>
                </li>
                <li>
                  <Link to="/objetivos">Objetivos</Link>
                </li>
                <li>
                  <Link to="/junta-directiva">Junta Directiva</Link>
                </li>
                <li>
                  <Link to="/personal-administrativo">Personal Administrativo</Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="has_dropdown">
            <span>ASOCIADOS</span>
            <div class="dropdown">
              <ul>
                <li>
                  <Link to="/beneficios">Beneficios</Link>
                </li>
                <li>
                  <Link to="/proyectos-ejecutados">Proyectos Ejecutados</Link>
                </li>
                <li>
                  <Link to="/crels">Crel's</Link>
                </li>
                <li>
                  <Link to="/representaciones">Representaciones</Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="has_dropdown">
            <span>DOCUMENTACIÓN</span>
            <div class="dropdown">
              <ul>
                <li>
                  <Link to="/reglamentaciones">Reglamentaciones</Link>
                </li>
                <li>
                  <Link to="/documentos-tecnicos">Documentos Técnicos</Link>
                </li>
                <li>
                  <Link to="/memorias-congresos">Memorias Congresos</Link>
                </li>
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