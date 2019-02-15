import React from 'react'
import styled from 'styled-components'

import Container from './container'
import { device } from '../styles/breakpoints';
import Arrow from '../images/svg-icons/arrow-icon.svg'

const Wrapper = styled.div`
  text-align: left;
  margin-bottom: 20px;
  h2{
    color: var(--blue);
    font-size: 32px;
    margin-bottom: 10px;
  }
  span{
    font-weight: 300;
    font-family: 'Montserrat';
    display: inline-block;
    margin: 0 auto;
    margin-bottom: 20px;
    font-size: 16px;
  }
`
const SubscribeForm = styled.div`
  position: relative;
  max-width: 470px;
  padding-right: 30px;
  input{
    width: 100%;
    background-color: transparent;
    border: 1px solid var(--blue);
    height: 42px;
    padding-left: 15px;
    border-radius: 4px;
    font-weight: 400;
    font-size: 11px;
    color: var(--blue);
  }
  button{
    position: absolute;
    right: 0;
    top: 0;
    box-shadow: 4px 6.9px 16px rgba(0, 0, 0, 0.2);
    border: none;
    background-color: var(--green);
    color: var(--blue);
    text-decoration: none;
    font-weight: 700;
    display: inline-block;
    min-width: 150px;
    padding: 0 10px;
    height: 42px;
    line-height: 42px;
    border-radius: 42px;
    font-size: 10px;
    letter-spacing: 0.065em;
    text-transform: uppercase;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease;
  }
`


export default function subscribe() {
  return (
    <Wrapper>
      <h2>Suscribete</h2>
      <span>Recibe noticias, proximos eventos e información relevante</span>
      <form>
        <SubscribeForm>
          <input type="text" placeholder="Ingresa tu correo"/>
          <button>Suscribete</button>
        </SubscribeForm>
      </form>
    </Wrapper>
  )
}
