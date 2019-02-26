import React from 'react'
import styled from 'styled-components'

import Container from '../components/container'
import Subscribe from './subscribe'
import ContactForm from './contactForm'
import { device } from '../styles/breakpoints'
import Milk from '../images/milkdrop.jpg'
import PhoneIcon from '../images/svg-icons/phone-icon.svg'
import MailIcon from '../images/svg-icons/mail-icon.svg'

const Wrapper = styled.footer`
  background-image: url(${Milk});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom right;
  position: relative;
  margin-top: 70px;
  padding-top: 50px;
  h2{
    color: var(--blue);
    font-size: 32px;
    margin-bottom: 10px;
  }
  p, span{
    font-size: 14px;
  }
`
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  flex-direction: column;
  @media ${device.tablet}{
    flex-direction: row;
  }
`

const Direction = styled.div`
  flex: 0 0 100%;
  @media ${device.tablet}{
    flex: 0 0 50%;
  }
`

const FooterDescription = styled.div`
  padding: 23px 0 25px;
  border-top: 1px solid rgba(0,0,0,0.1);
  p {
    text-align: center;
    margin: 0;
    font-size: 12px;
  }
`


const Footer = () => (
  <Wrapper>
    <Container>  
      <FlexContainer>
        <Direction>
          <h2>Dirección</h2>
          <p>Edificio FENAGH, Blvd. Suyapa, Col. Florencia Sector Sur, Casa #3802, contiguo a la SUZUKI, frente a Banrural, Tegucigalpa, Honduras, C.A.</p>
          <div>
            <p>(504) 2239-1303</p>
            <p>(504) 9442-4710</p>
          </div>
          <div>
            <a href="mailto:info@cahle.org">info@cahle.org</a>
          </div>
        </Direction>
        <ContactForm />
      </FlexContainer>
      <FooterDescription>
        <p>© 2019 Camara Hondureña de la Leche</p>
      </FooterDescription>
    </Container>
  </Wrapper>
)

export default Footer