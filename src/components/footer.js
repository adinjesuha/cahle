import React from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

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
  border-top: 1px solid var(--borders);
  padding: 40px 0;
  @media ${device.tablet}{
    padding: 80px 0;
  }
  @media ${device.laptop}{
    padding: 120px 0;
  }
`
const FooterSecondary = styled.div`
  background: var(--oxford-blue);
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
            <h2 className="main-title">Contáctanos</h2>
            <InfoContact>
              <li>
                <span><PinIcon style={{verticalAlign: 'middle'}}/></span>
                <p className="contact-info main-text">Colonia Lomas del Guijarro Sur, Edificio Torre Alianza I, Tercer Nivel, Tegucigalpa, Honduras.</p>
              </li>
              <li>
                <span><PhoneIcon style={{verticalAlign: 'middle'}}/></span>
                <p className="contact-info main-text" style={{paddingLeft: '25px'}}>(504) 9442-4710</p>
              </li>
              <li>
                <span><MailIcon style={{verticalAlign: 'middle'}}/></span>
                <p className="contact-info main-text"><a href="mailto:admoncahle@gmail.com">admoncahle@gmail.com</a></p>
              </li>
            </InfoContact>
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
      <p>© {new Date().getFullYear()} Camara Hondureña de la Leche</p>
    </FooterSecondary>
  </footer>
)

export default Footer