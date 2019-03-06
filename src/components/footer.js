import React from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import Container from './container'
import { device } from '../styles/breakpoints'
import Milk from '../images/milkdrop.jpg'
import PhoneIcon from '../images/svg-icons/phone-icon.svg'
import MailIcon from '../images/svg-icons/mail-icon.svg'
import PinIcon from '../images/svg-icons/pin-icon.svg'

const Wrapper = styled.footer`
  background-image: url(${Milk});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom right;
  position: relative;
  h2{
    color: var(--blue);
    font-weight: 500;
    font-size: 32px;
  }
  p{
    font-size: 14px;
  }

`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  padding: 70px 0;
  flex-wrap: wrap;
  border-top: 1px solid rgba(0,0,0, 0.1);
`

const Box = styled.aside`
  /* width: 100%; */
  flex: 0 0 100%;
  max-width: 100%;
  @media ${device.tablet}{
    flex: 0 0 45%;
    max-width: 45%;
  }
`
const InfoContact = styled.ul`
  margin-top: 16px;
  li{
    margin-bottom: 12px;
    span{
      display: inline-block;
      vertical-align: middle;
    }
    .info{
      width: calc(100% - 30px);
      padding-left: 8px;
      font-size: 14px;
    }
  }
`
const NewsLetterForm =  styled.div`
  .field-wrapper{
    position: relative;
    margin-top: 32px;
    margin-bottom: 48px;
    .relative-field{
      line-height: 50px;
      height: 50px;
      border-radius: 200px;
      background-color: white;
      border: 1px solid #ececec;
      width: 100%;
      padding: 0 20px;
      font-size: 14px;
    } 
    .btn{
      position: absolute;
      right: 0;
      height: 100%;
      padding: 0 30px;
      top: 0;

      box-shadow: 4px 6.9px 16px rgba(0, 0, 0, 0.2);
      border: none;
      background-color: var(--blue);
      color: var(--green);
      text-decoration: none;
      font-weight: 700;
      display: inline-block;
      min-width: 150px;
      padding: 0 10px;
      line-height: 42px;
      border-radius: 42px;
      font-size: 10px;
      letter-spacing: 0.065em;
      text-transform: uppercase;
      cursor: pointer;
      text-align: center;
      transition: all 0.3s ease;
    }
  }
`


const FooterDescription = styled.div`
  background: var(--blue);
  padding: 25px 0 ;
  p {
    text-align: center;
    margin: 0;
    font-size: 14px;
    color: white;
  }
`

const Social = styled.div`
  display: inline-block;
  li{
    display: inline-block;
    margin-right: 20px;
    a{
      color: white;
      display: inline-block;
      span{
        line-height: 40px;
        width: 44px;
        padding-top: 4px;
        text-align: center;
        border-radius: 50%;
        display: inline-block;
      }
    }
  }
  
`

const Footer = () => (
  <Wrapper> 
    <Container>
      <FlexContainer>
        <Box>
          <h2>Contactanos</h2>
          <InfoContact>
            <li>
              <span><PinIcon/></span>
              <span className="info">Edificio FENAGH, Blvd. Suyapa, Col. Florencia Sector Sur, Casa #3802, contiguo a la SUZUKI, frente a Banrural, Tegucigalpa, Honduras, C.A.</span>
            </li>
            <li>
              <span><PhoneIcon/></span>
              <span className="info">(504) 2231-1102</span>
            </li>
            <li>
              <span className="info" style={{paddingLeft: '25px'}}>(504) 9442-4710</span>
            </li>
            <li>
              <span><MailIcon/></span>
              <span className="info"><a href="mailto:info@cahle.org">info@cahle.org</a></span>
            </li>
          </InfoContact>
        </Box>
        <Box>
          <div>
            <h2>Suscribete</h2>
            <p>Suscríbete para recibir las últimas noticias y actualizaciones.</p>
            <NewsLetterForm>
              <form 
                action="/no-cache=1"
                name="contact-footer" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
              >
                <div className="field-wrapper">
                  <input className="relative-field" placeholder="Ingresa tu correo"  type="email" id="email" name="email" required />
                  <input type="hidden" name="bot-field" />
                  <button type="submit" className="btn">Suscribirse</button>
                </div>
              </form>
            </NewsLetterForm>
            <Social>
              <ul>
                <li>
                  <a href="https://www.facebook.com/cahle.hn/">
                    <span style={{background: '#395799'}}>
                      <FaFacebookF/>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/cahlehonduras/">
                    <span style={{background: '#19b2f5'}}>
                      <FaTwitter/>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/camaradelaleche/">
                    <span style={{background: '#bc2a8d'}}>
                      <FaInstagram/>
                    </span>
                  </a>
                </li>
              </ul>
            </Social>
          </div>
        </Box>
      </FlexContainer>
    </Container>
    <FooterDescription>
      <p>© 2019 Camara Hondureña de la Leche</p>
    </FooterDescription>
  </Wrapper>
)

export default Footer

// CAHLEtester1234