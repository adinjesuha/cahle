import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import IndexPostListing from '../components/indexPostListing'
import VideoBG from '../video/video-bg.mp4'
import { device } from '../styles/breakpoints'

const FullScreenBg = styled.div`
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: relative;
  overflow: hidden;
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
`

const CoverContent = styled.div` 
  position: absolute;
  top: 50%;
  left: 15px;
  right: 15px;
  margin: auto;
  transform: translateY(-50%);
  text-align: center;
  span{                
    font-weight: 400;
    display: block;
    color: white;
  }
  h1{
    font-weight: 700;
    font-size: 34px;
    color: white;
    letter-spacing: 0.02em;
    line-height: 1.2;
    margin: 0;
    text-transform: uppercase;
  }
  p{
    margin-bottom: 40px;
    color: white;
    font-size: 14px;
  }
  @media ${device.mobileL}{
    h1{
      font-size: 42px;
    }
  }
  @media ${device.tablet}{
      h1{
        font-size: 72px; 
      }
      p{
        font-size: 22px;
      }
    }
`

const IndexPage = () => (
  <React.Fragment>
    <Layout>
      <FullScreenBg>
        <video autoPlay muted loop style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          zIndex: '-100',
          transform: 'translateX(-50%) translateY(-50%)',
          backgroundSize: 'cover'
        }}>
          <source src={VideoBG} type="video/mp4" />
        </video>
      </FullScreenBg>
      <CoverContent>
        <h1>Cámara hondureña <br/> de la leche</h1>
      </CoverContent>
      <Container>
        <IndexPostListing />
      </Container>
    </Layout>
  </React.Fragment>
)

export default IndexPage

{/* <CoverContent>
  <p style={{marginBottom: '10px'}}>La cámara hondureña de la leche te invita al</p>
  <h1>VII CONGRESO <br/> DE LA LECHE</h1>
  <p>La Ceiba, Atlantida</p>
  <ButtonLink to="/">Quieres saber más?</ButtonLink>
</CoverContent> */}
