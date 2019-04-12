import React from 'react'
import styled from 'styled-components'
import { navigateTo } from "gatsby-link"
import { device } from '../styles/breakpoints'

const NewsLetterForm =  styled.div`
  .field-wrapper{
    font-family: Roboto;
    .relative-field{
      border-radius: 4px;
      border: 1px solid var(--borders);
      width: 100%;
      padding: 15px 10px;
      color: var(--main-text);
      margin-right: 0;
      margin-bottom: 10px;
    } 
    .select-group{
      position: relative;
      &:after {
        position: absolute;
        top: 70%;
        right: 20px;
        content: "";
        display: block;
        z-index: 2;
        width: 10px;
        height: 10px;
        transform: translateY(-70%) rotate(45deg);
        border-bottom-right-radius: 2px;
        border-right: 2px solid var(--active);
        border-bottom: 2px solid var(--active);
      }
    }
    .select{
      outline: none;
      background-color: #fff;
      border: 1px solid var(--borders);
      border-radius: 4px;
      width: 100%;
      padding: 15px 10px;
      appearance: none;
      position: relative;
    }
    .button-position{
      width: 100%;
      @media ${device.tablet}{
        width: auto;
        position: absolute;
      }
    }
    label{
      color: var(--text);
    }
  }  
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };
  render() {
    return (
      <NewsLetterForm>
        <form
          name="congreso"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <div className="field-wrapper">
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="congreso" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>Nombre Completo:</label>   
              <br/>
              <input 
                className="relative-field" 
                type="text" 
                name="nombre" 
                onChange={this.handleChange}   
              />
            </p>
            <p className="select-group">
              <label>Genero:</label>   
              <br/>
              <select 
                className="select"
                name="pais" 
                onChange={this.handleChange}  
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
                name="correo" 
                onChange={this.handleChange}   
              />
            </p>
            <p>
              <label>País de residencia:</label>   
              <input 
                className="relative-field" 
                type="text" 
                name="pais" 
                onChange={this.handleChange}   
              />
            </p>
            <p>
              <label>Ciudad de residencia:</label>   
              <input 
                className="relative-field" 
                type="text" 
                name="cuidad" 
                onChange={this.handleChange}   
              />
            </p>
            <p>
              <label>Teléfono:</label>   
              <input 
                className="relative-field" 
                type="tel" 
                name="telefono" 
                onChange={this.handleChange}   
              />
            </p>
            <p>
              <label>Institución u organización afiliado:</label>   
              <input 
                className="relative-field" 
                type="text" 
                name="afiliado" 
                onChange={this.handleChange}   
              />
            </p>
            <p className="select-group">
              <label>Ocupación:</label>   
              <select 
                className="select"
                name="pais" 
                onChange={this.handleChange}  
              >
                <option value="default">Seleccionar</option>
                <option value="hombre">Estudiante nacional</option>
                <option value="mujer">Estudiante extranjero</option>
                <option value="mujer">Ganadero</option>
                <option value="mujer">Profesional nacional</option>
                <option value="mujer">Profesional extranjero</option>
                <option value="mujer">Investigador</option>
                <option value="mujer">Otro</option>
              </select>
            </p>
            <p 
              className="select-group"
              name="pais" 
              onChange={this.handleChange}  
            >
              <label>Tipo de participación:</label>   
              <select className="select">
                <option value="default">Seleccionar</option>
                <option value="hombre">Asistente</option>
                <option value="mujer">Ponente (oral o póster)</option>
                <option value="mujer">Conferencista magistral</option>
              </select>
            </p>
          </div>
          <button type="submit" className="button-btn button-position">Enviar</button>
        </form>
      </NewsLetterForm>
    );
  }
}

export default SubscribeForm;