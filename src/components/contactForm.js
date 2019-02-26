import React from 'react'
import styled from 'styled-components'
import { device } from '../styles/breakpoints'

const ContactForm = () => (
  <div>
    <form 
      method="post" 
      name="contact"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input name="name" placeholder="Tu nombre" type="text"/>
      <button>Enviar</button>
    </form>
  </div>
)

export default ContactForm