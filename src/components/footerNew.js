import React from 'react'
import styled from 'styled-components'

import Container from '../components/container'
import { device } from '../styles/breakpoints'
import Milk from '../images/milkdrop.jpg'
import PhoneIcon from '../images/svg-icons/phone-icon.svg'
import MailIcon from '../images/svg-icons/mail-icon.svg'
import PinIcon from '../images/svg-icons/pin-icon.svg'
import Facebook from '../images/svg-icons/facebook-icon.svg'
import Instagram from '../images/svg-icons/instagram-icon.svg'

const Wrapper = styled.footer`
  background-image: url(${Milk});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom right;
  position: relative;
  padding-top: 50px;
  h3{
    color: var(--blue);
  }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
  flex-direction: column;
  @media ${device.tablet}{
    flex-direction: row;
  }
`

const Box = styled.aside`
  width: 100%;
  @media ${device.tablet}{
    width: 30%;
  }
`

const FooterDescription = styled.div`
  background: var(--blue);
  padding: 23px 0 25px;
  border-top: 1px solid rgba(0,0,0,0.1);
  p {
    text-align: center;
    margin: 0;
    font-size: 12px;
    color: white;
  }
`

const Footer = () => (
  <Wrapper> 
    <Container>
      <FlexContainer>
        <Box>
          <div>
            <h3>Dirección</h3>
            <p><span><PinIcon /></span> Edificio FENAGH, Blvd. Suyapa, Col. Florencia Sector Sur, Casa #3802, contiguo a la SUZUKI, frente a Banrural, Tegucigalpa, Honduras, C.A.</p>
          </div>
        </Box>
        <Box>
          <div>
            <h3>Telefonos</h3>
            <p><span><PhoneIcon/></span> (504) 2239-1303</p>
            <p><span><PhoneIcon/></span> (504) 9442-4710</p>
          </div>
          <div>
            <h3>Correo</h3>
            <p><span><MailIcon /></span> <a href="mailto:info@cahle.org">info@cahle.org</a></p>
          </div>
        </Box>
        <Box>
          <div>
            <h3>Redes Sociales</h3>
            <p><span style={{
              background: 'var(--blue)', 
              lineHeight: '45px',
              width: '45px',
              textAlign: 'center',
              borderRadius: '50%',
              display: 'inline-block'
              }}><Facebook /></span></p>
            <p><span style={{
              background: 'var(--blue)', 
              lineHeight: '45px',
              width: '45px',
              textAlign: 'center',
              borderRadius: '50%',
              display: 'inline-block'
              }}><Instagram /></span></p>
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