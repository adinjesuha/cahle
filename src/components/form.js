import React from 'react'
import styled from 'styled-components'
import { navigate } from "gatsby"
import { device } from '../styles/breakpoints'

import { encode } from '../utils/encode'

const NewsLetterForm =  styled.div`
  .field-wrapper{
    margin-top: 32px;
    margin-bottom: 40px;
    .relative-field{
      border-radius: 4px;
      border: 1px solid var(--borders);
      width: 100%;
      padding: 0 0 0 20px;
      font-size: 12px;
      color: var(--main-text);
      margin-right: 0;
      margin-bottom: 10px;
      height: 46px;
      @media ${device.tablet}{
        margin-right: 10px;
        margin-bottom: 0;
        width: calc(100% - 160px);
      }
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

class ContactForm extends React.Component {
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
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <NewsLetterForm>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
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
              <input 
                className="relative-field" 
                placeholder="Ingresa tu correo" 
                type="email" 
                name="email" 
                onChange={this.handleChange}   
                required
              />
              <button type="submit" className="button-btn button-position">Suscríbete</button>
            </div>
          </div>
        </form>
        <div data-netlify-recaptcha="true" />
      </NewsLetterForm>
    );
  }
}

export default ContactForm;