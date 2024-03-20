import React, { useState } from 'react'
import { navigate } from 'gatsby-link'
import styled from 'styled-components'

const Form = styled.form`
  padding: 0 0 40px;
  button[type="submit"].disabled {
    background-color: var(--ceil);
    cursor: not-allowed;
  }
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
  /* position: absolute; */
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
  const [disabled, setDisabled] = useState(false)


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
      audiencia,
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
        "Audiencia": audiencia,
      }
    }

    fetch("../../.netlify/functions/airtable", {
      method: "POST",
      body: JSON.stringify(fields)
    })
    .then(() => setDisabled(true))
    .then(() => navigate('/thanks/'))
    .catch(error => alert(error))

  }

  return (
    <Form onSubmit={handleSubmit}>
      <p><strong>Todos los campos son requeridos</strong></p>
      <div className="field-wrapper">
        <InputRow>
          <InputBlock 
            type="text"
            name="nombre"
            label="* Nombre"
            handleChange={handleChange}
            required
          />
          <InputBlock 
            type="text"
            name="apellido"
            label="* Apellido"
            handleChange={handleChange}
            required
          />
        </InputRow>
        <InputRow>
          <InputBlock 
            type="text"
            name="genero"
            label="* Genero"
            isSelect={true}
            options={["hombre", "mujer"]}
            handleChange={handleChange}
            required

          />
          <InputBlock 
            type="text"
            name="identificacion"
            label="* ID o pasaporte"
            handleChange={handleChange}
            required
          />
        </InputRow>
        <InputBlock 
          type="email"
          name="correo"
          label="* Correo (lugar donde llegará su certificado de participación)"
          handleChange={handleChange}
          classNames="full-width"
          required
        />
        <InputRow>
          <InputBlock 
            type="text"
            name="pais"
            label="* País de residencia"
            handleChange={handleChange}
            required

          />
          <InputBlock 
            type="text"
            name="cuidad"
            label="* Ciudad de residencia"
            handleChange={handleChange}
            required
          />
        </InputRow>
        <InputRow>
          <InputBlock 
            type="tel"
            name="telefono"
            label="* Teléfono"
            handleChange={handleChange}
            required
          />
          <InputBlock 
            type="text"
            name="audiencia"
            label="* Tipo de audiencia: "
            isSelect={true}
            options={[
              "Estudiante",
              "Equipo patrocinador",
              "Asociados CAHLE y CAFOGAH",
              "Publico extranjero",
              "Público en general" 
            ]}
            handleChange={handleChange}
            required
          />
        </InputRow>
        <p><strong>* Adjuntar el recibo de pago, transferencia o depósito escaneado en formato jpg clara y legible al correo electronico <a href="admoncahle@gmail.com">admoncahle@gmail.com</a> (Recuerde llevar su comprobante en físico el día de ingreso)</strong></p>
        {/* { data.ocupacion === 'Otro' ? (
          <InputRow>
            <InputBlock 
              type="text"
              name="otro"
              label="Detallar ocupación *"
              handleChange={handleChange}
              classNames="full-width"
              required
            />
          </InputRow>
        ) : null }
        <InputRow>
          <InputBlock 
            type="text"
            name="participacion"
            label="Tipo de Participación *"
            isSelect={true}
            options={["Conferencista", "Patrocinador", "Audiencia" ]}
            handleChange={handleChange}
            classNames="full-width"
            required
          />
        </InputRow> */}
      </div>
      <StyledButton type="submit" className={`${disabled ? 'disabled' : ''} button-btn`} disabled={disabled}>{disabled ? 'Enviando...' : 'Enviar'}</StyledButton>
    </Form>
  )
}

export default SubscribeForm