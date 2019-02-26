import React from 'react'
import styled from 'styled-components'

import Container from './container'
import { device } from '../styles/breakpoints';
import Arrow from '../images/svg-icons/arrow-icon.svg'

const Wrapper = styled.div`
  padding: 60px 0;
  h2{
    color: var(--blue);
    font-size: 52px;
    margin: 0;
    text-align: center
  }
  span{
    font-weight: 300;
    font-family: 'Montserrat';
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
    font-size: 16px;
    text-align: center;
  }
`
const SubscribeForm = styled.div`
  position: relative;
  max-width: 470px;
  margin: 0 auto;
  input{
    width: calc(100% - 20px);
    background-color: transparent;
    border: 1px solid var(--blue);
    height: 50px;
    padding-left: 15px;
    border-radius: 4px;
    font-weight: 400;
    font-size: 14px;
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
    height: 50px;
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
        <form 
          name="email-collection"
          method="POST" 
          data-netlify="true"
        >
          <SubscribeForm>
            <input type="email" name="email" placeholder="Ingresa tu correo"/>
            <button type="submit">Suscribete</button>
          </SubscribeForm>
        </form>
      </Container>
    </Wrapper>
  )
}

/*
Old IP address - A record
108.163.233.154
CNAME
cahle.org
*/