import React, { useState } from 'react'
import { navigate } from 'gatsby-link'

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
  position: relative;
  &.full-width{
    width: 100% !important;
  }
  label{
    font-size: 14px;
    margin-bottom: 10px;
  }
  .select-arrow{
    display: block;
    content: "";
    width: 0;
    height: 0;
    margin-bottom: .1em;
    margin-top: .3em;
    margin-left: .3em;
    border-width: .43em .3em 0;
    border-style: solid;
    border-left-color: transparent;
    border-right-color: transparent;
    color: var(--oxford-blue);
    transition: color .1s;
    opacity: 0.8;
    z-index: 1;
    position: absolute;
    bottom: 35px;
    right: 10px;
  }
`

const StyledInput = styled.input``

const StyledSelect = styled.select`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  cursor: pointer;
  -moz-appearance:none; /* Firefox */
  -webkit-appearance:none; /* Safari and Chrome */
  appearance:none;
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
    <StyledInput
      onChange={handleChange}
      {...restProps}
    />
  )
}

const Select = ({handleChange, ...restProps}) => (
  <StyledSelect 
    onChange={handleChange} 
    {...restProps}
  >
    <option value="default">Seleccionar</option>
    {restProps.options.map((option, index) => {
      return(
        <option key={index} value={option}>{option}</option>
      )
    })}
  </StyledSelect>
)

const InputBlock = ({label, handleChange, classNames, isSelect, ...restProps}) => (
  <StyledInputWrapper className={classNames}>
    <label>{label}</label>
    {!isSelect ?
      <Input
        handleChange={handleChange}
        {...restProps}
      /> :
      <>
        <Select 
          handleChange={handleChange} 
          {...restProps}
        />
        <div className="select-arrow" />
      </>
    }
  </StyledInputWrapper>
)


const SubscribeForm = () => {
  const [data, setData] = useState({})

  const handleChange = e => {
    const { value, name } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = e => {

    e.preventDefault();

    const { 
      nombre, 
      apellido, 
      genero, 
      identificacion, 
      correo, 
      pais, 
      cuidad, 
      telefono, 
      ocupacion  
    } = data

    const fields = {
      "fields": {
        "Nombre": nombre, 
        "Apellido": apellido,
        "Genero": genero,
        "Identificación": identificacion,
        "Correo": correo,
        "País": pais,
        "Ciudad": cuidad,
        "Teléfono": telefono,
        "Ocupación": ocupacion,
      }
    }

    fetch("../../.netlify/functions/airtable", {
      method: "POST",
      body: JSON.stringify(fields)
    })
    .then(() => setData({}))
    .then(() => navigate('/thanks/'))
    .catch(error => alert(error))

  }

  return (
    <Form onSubmit={handleSubmit}>
      <p className="main-text navy">Utilice el formulario adjunto para solicitar su registro al VIII Congreso Nacional de la Leche</p>
      <div className="field-wrapper">
        <InputRow>
          <InputBlock 
            type="text"
            name="nombre"
            label="Nombre *"
            handleChange={handleChange}
            required
          />
          <InputBlock 
            type="text"
            name="apellido"
            label="Apellido *"
            handleChange={handleChange}
            required
          />
        </InputRow>
        <InputRow>
          <InputBlock 
            type="text"
            name="genero"
            label="Genero *"
            isSelect={true}
            options={["hombre", "mujer"]}
            handleChange={handleChange}
            required

          />
          <InputBlock 
            type="text"
            name="identificacion"
            label="ID o pasaporte *"
            handleChange={handleChange}
            required
          />
        </InputRow>
        <InputBlock 
          type="email"
          name="correo"
          label="Correo *"
          handleChange={handleChange}
          classNames="full-width"
          required
        />
        <InputRow>
          <InputBlock 
            type="text"
            name="pais"
            label="País de residencia *"
            handleChange={handleChange}
            required

          />
          <InputBlock 
            type="text"
            name="cuidad"
            label="Ciudad de residencia *"
            handleChange={handleChange}
            required
          />
        </InputRow>
        <InputRow>
          <InputBlock 
            type="tel"
            name="telefono"
            label="Teléfono *"
            handleChange={handleChange}
            required
          />
          <InputBlock 
            type="text"
            name="ocupacion"
            label="Ocupación *"
            isSelect={true}
            options={["Estudiante extranjero", "Estudiante nacional", "Ganadero (productor de leche)", "Ganadero (procesador)", "Profesional nacional", "Profesional extranjero", "Investigador", "Otro" ]}
            handleChange={handleChange}
            required
          />
          </InputRow>
      </div>
      <StyledButton type="submit" className="button-btn">Enviar</StyledButton>
      <p><strong>Importante: </strong>Sólo se aprueban las inscripciones de las personas que envíen el comprobante de pago escaneado al correo electrónico: <a href="mailto:admoncahle@gmail.com">admoncahle@gmail.com</a></p>
      <p><strong>Todos los campos son requeridos</strong></p>
    </Form>
  )
}

export default SubscribeForm