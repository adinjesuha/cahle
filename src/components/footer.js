import React from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import ContactForm from './form'
import Container from './container'
import Row from './row'
import { device } from '../styles/breakpoints'
import MilkDrop from '../images/milkdrop.jpg'
import PhoneIcon from '../images/svg-icons/phone-icon.svg'
import MailIcon from '../images/svg-icons/mail-icon.svg'
import PinIcon from '../images/svg-icons/pin-icon.svg'

const FooterInner = styled.div`
  background-image: url(${MilkDrop});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom right;
  position: relative;
  border-top: 1px solid var(--light);
  padding: 40px 0;
  @media ${device.tablet}{
    padding: 80px 0;
  }
  @media ${device.laptop}{
    padding: 120px 0;
  }
`
const FooterSecondary = styled.div`
  background: var(--blue);
  padding: 25px 0;
  p {
    text-align: center;
    margin: 0;
    font-size: 14px;
    color: white;
  }
`

const InfoContact = styled.ul`
  li{
    margin-bottom: 25px;
    .contact-info{
      display: inline-block;
      vertical-align: middle;
      width: calc(100% - 30px);
      padding-left: 8px;
      margin: 0;
    }
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
  <footer>
    <FooterInner>
      <Container>
        <Row>
          <div className="col-lg-6 col-md-12">
            <h2 className="main-title">Contactanos</h2>
            <InfoContact>
              <li>
                <span><PinIcon style={{verticalAlign: 'middle'}}/></span>
                <p className="contact-info main-text">Edificio FENAGH, Blvd. Suyapa, Col. Florencia Sector Sur, Casa #3802, contiguo a la SUZUKI, frente a Banrural, Tegucigalpa, Honduras, C.A.</p>
              </li>
              <li>
                <span><PhoneIcon style={{verticalAlign: 'middle'}}/></span>
                <p className="contact-info main-text">(504) 2231-1102 </p>
                <p className="contact-info main-text" style={{paddingLeft: '25px'}}>(504) 9442-4710</p>
              </li>
              <li>
                <span><MailIcon style={{verticalAlign: 'middle'}}/></span>
                <p className="contact-info main-text"><a href="mailto:info@cahle.org">info@cahle.org</a></p>
              </li>
            </InfoContact>
          </div>

          <div className="col-lg-6 col-md-12">
            <h2 className="main-title">Suscríbete</h2>
            <p className="main-text">suscríbete para recibir las últimas noticias y actualizaciones.</p>
            <ContactForm />
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
        </Row>
      </Container>
    </FooterInner>
    <FooterSecondary>
      <p>© 2019 Camara Hondureña de la Leche</p>
    </FooterSecondary>
  </footer>
)

export default Footer

// CAHLEtester1234