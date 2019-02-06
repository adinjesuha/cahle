import React from 'react'
import styled from 'styled-components'

import Container from './container'
import { device } from '../styles/breakpoints';
import Arrow from '../images/svg-icons/arrow-icon.svg'

const Wrapper = styled.div`
  text-align: center;
  background-color: #1b8bf9;
  padding: 70px 0;
  h2{
    color: white;
    font-weight: 700;
    margin-bottom: 10px;
    color: white;
    font-size: 44px;
    line-height: 1.3;
  }
  span{
    font-weight: 300;
    font-family: 'Montserrat';
    display: inline-block;
    max-width: 400px;
    margin: auto auto 60px;
    margin-bottom: 60px;
    font-size: 16px;
    color: white;
  }
  form{
    margin: 'auto';
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  }
`
const SubscribeForm = styled.div`
  position: relative;
  max-width: 470px;
  padding-right: 30px;
  margin: auto;
  input{
    width: 100%;
    background-color: rgba(36, 37, 38, 0.3);
    border: none;
    height: 42px;
    padding-left: 15px;
    border-radius: 4px;
    font-weight: 400;
    font-size: 11px;
    color: white;
  }
  button{
    position: absolute;
    right: 0;
    top: 0;
    box-shadow: 4px 6.9px 16px rgba(0, 0, 0, 0.2);
    border: none;
    background-color: white;
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
      <Container>
        <h2>Suscribete</h2>
        <span>Recibe noticias, proximos eventos e información relevante</span>
        <form>
          <SubscribeForm>
            <input type="text" placeholder="Ingresa tu correo"/>
            <button>Suscribete</button>
          </SubscribeForm>
        </form>
      </Container>
    </Wrapper>
  )
}
