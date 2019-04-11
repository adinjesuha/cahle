import React from 'react'
import styled from 'styled-components'
import { navigateTo } from "gatsby-link"
import { device } from '../styles/breakpoints'

const NewsLetterForm =  styled.div`
  .field-wrapper{
    margin-top: 32px;
    margin-bottom: 40px;
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
    .button-position{
      width: 100%;
      @media ${device.tablet}{
        width: auto;
        position: absolute;
      }
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
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </p>
            <div className="flexContent">
              <p>
                <label>Nombre Completo:</label>   
              </p>
              <input 
                className="relative-field" 
                type="text" 
                name="nombre" 
                onChange={this.handleChange}   
              />
            </div>
            <div className="flexContent">
              <p>
                <label>Genero:</label>   
              </p>
              <select name="role[]" multiple>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
              </select>
            </div>
            <div className="flexContent">
              <p>
                <label>Correo:</label>   
              </p>
              <input 
                className="relative-field" 
                type="email" 
                name="correo" 
                onChange={this.handleChange}   
              />
            </div>
          </div>
          <button type="submit" className="button-btn button-position">Suscríbete</button>
        </form>
      </NewsLetterForm>
    );
  }
}

export default SubscribeForm;