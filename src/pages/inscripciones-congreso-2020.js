import React from 'react'
import { navigate } from 'gatsby-link'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import { device } from '../styles/breakpoints'
import { encode } from '../utils/encode'


class SubscribeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
    .then(() => navigate(form.getAttribute('action')))
    .catch(error => alert(error))
  }
  render() {
    return (
      <form
          name="congreso"
          method="post"
          action="/thanks/"
          data-netlify="true"
          ata-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          onSubmit={this.handleSubmit}
        >
          <div className="field-wrapper">
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="congreso" />
        <p hidden>
          <label>
          Don’t fill this out:{' '}
          <input name="bot-field" onChange={this.handleChange} />
        </label>
      </p>
      <p>
        <label>Nombre Completo:</label>
        <br />
        <input
          className="relative-field"
          type="text"
          name="Nombre"
          onChange={this.handleChange}
        />
        </p>
      <p className="select-group">
        <label>Genero:</label>
        <br />
        <select
          className="select"
        >
          <option value="default">Seleccionar</option>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
      </p>
      <p>
      <label>Correo electrónico:</label>
      <input
        className="relative-field"
        type="email"
        name="Correo"
        onChange={this.handleChange}
      />
    </p>
    <p>
      <label>País de residencia:</label>
      <input
        className="relative-field"
        type="text"
        name="País"
        onChange={this.handleChange}
      />
    </p>
    <p>
      <label>Ciudad de residencia:</label>
      <input
        className="relative-field"
        type="text"
        name="Ciudad"
        onChange={this.handleChange}
      />
    </p>
    <p>
      <label>Teléfono:</label>
      <input
        className="relative-field"
        type="tel"
        name="Teléfono"
        onChange={this.handleChange}
      />
    </p>
    <p>
      <label>Institución u organización afiliado:</label>
      <input
        className="relative-field"
        type="text"
        name="Afiliado"
        onChange={this.handleChange}
      />
    </p>
    <p className="select-group">
      <label>Ocupación:</label>
      <select
        className="select"
      >
        <option value="default">Seleccionar</option>
        <option value="Estudiane nacional">Estudiante nacional</option>
        <option value="Estudiante extranjero">Estudiante extranjero</option>
        <option value="Ganadero">Ganadero</option>
        <option value="Profesional nacional">Profesional nacional</option>
        <option value="Profesional extranjero">Profesional extranjero</option>
        <option value="Investigador">Investigador</option>
        <option value="Otro">Otro</option>
      </select>
    </p>
    <p className="select-group">
      <label>Tipo de participación:</label>
      <select className="select">
        <option value="default">Seleccionar</option>
        <option value="Asistente">Asistente</option>
        <option value="Ponente">Ponente (oral o póster)</option>
        <option value="Conferencista magistral">Conferencista magistral</option>
      </select>
    </p>
  </div>
  <button type="submit" className="button-btn button-position">Enviar</button>
  </form>
  )
  }
}



const CongresoInscripciones = () => {
  return (
    <Layout>
      <Container>
        <SubscribeForm />
      </Container>
    </Layout>
  )
}

export default CongresoInscripciones