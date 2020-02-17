import React from 'react'
import { navigate } from 'gatsby-link'

import { encode } from '../../utils/encode'
import styled from 'styled-components'

const Form = styled.form`
  padding: 40px 0;
`

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  &.full-width{
    width: 100% !important;
  }
  label{
    margin-bottom: 10px;
  }
`

const StyledButton = styled.button`
  background-color: var(--oxford-blue);
  display: inline-block;
  width: 100%;
  padding: 10px 0 !important;
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
`

const Input = ({handleChange, ...restProps}) => {
  return (
    <input
      onChange={handleChange}
      {...restProps}
    />
  )
}

const Select = ({handleChange, ...restProps}) => (
  <select 
    onChange={handleChange} 
    {...restProps}
  >
    <option value="default">Seleccionar</option>
    {restProps.options.map((option, index) => {
      return(
        <option key={index} value={option}>{option}</option>
      )
    })}
  </select>
)

const InputBlock = ({label, handleChange, classNames, isSelect, ...restProps}) => (
  <StyledInputWrapper className={classNames}>
    <label>{label}</label>
    {!isSelect ?
      <Input
        handleChange={handleChange}
        {...restProps}
      /> :
      <Select 
        handleChange={handleChange} 
        {...restProps}
      />
    }
  </StyledInputWrapper>
)


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
      <Form
        name="congreso-2020"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        onSubmit={this.handleSubmit}
      >
      <div className="field-wrapper">
        <input type="hidden" name="form-name" value="congreso-2020" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>
        <InputRow>
          <InputBlock 
            type="text"
            name="nombre"
            label="Nombre *"
            handleChange={this.handleChange}
            required
          />
          <InputBlock 
            type="text"
            name="apellido"
            label="Apellido *"
            handleChange={this.handleChange}
            required
          />
        </InputRow>
        <InputRow>
          <InputBlock 
            type="text"
            name="genero"
            label="Genero"
            isSelect={true}
            options={["hombre", "mujer"]}
            handleChange={this.handleChange}
          />
          <InputBlock 
            type="text"
            name="identificacion"
            label="Identificacion *"
            handleChange={this.handleChange}
            required
          />
        </InputRow>
        <InputBlock 
          type="email"
          name="correo"
          label="Correo *"
          handleChange={this.handleChange}
          classNames="full-width"
          required
        />
        <InputRow>
          <InputBlock 
            type="text"
            name="pais"
            label="País de residencia"
            handleChange={this.handleChange}
          />
          <InputBlock 
            type="text"
            name="cuidad"
            label="Ciudad de residencia"
            handleChange={this.handleChange}
          />
        </InputRow>
        <InputRow>
          <InputBlock 
            type="tel"
            name="telefono"
            label="Teléfono"
            handleChange={this.handleChange}
          />
          <InputBlock 
            type="text"
            name="ocupación"
            label="Ocupación"
            isSelect={true}
            options={["Estudiante extranjero", "Estudiante nacional", "Ganadero (productor de leche)", "Ganadero (procesador)", "Profesional nacional", "Profesional extranjero", "Investigador", "Otro" ]}
            handleChange={this.handleChange}
          />
        </InputRow>
      </div>
      <StyledButton type="submit" className="button-btn">Enviar</StyledButton>
      <p><strong>Importante: </strong>Sólo se aprueban las inscripciones de las personas que envíen el comprobante de pago escaneado al correo electrónico: <a href="mailto:admoncahle@gmail.com">admoncahle@gmail.com</a></p>
    </Form>
  )}
}

export default SubscribeForm