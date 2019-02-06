import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';

import Layout from '../components/layout'
import Container from '../components/container'
import PostListing from '../components/postListing'
import VideoBG from '../video/custom-video.mp4'

const FullScreenBg = styled.div`
  top: -80px;
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
`
const CoverTitle = styled.h1`
  font-weight: 700;
  font-size: 44px;
  color: white;
  letter-spacing: 0.02em;
  line-height: 1.2;
`
const CoverDescription = styled.div`
  max-width: 550px;
  margin: 20px auto 0 ;
  > span{
    font-family: 'lora';                    
    font-style: italic;
    font-weight: 400;
    color: rgba(256,256,256, 0.7);
    font-size: 22px;
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
        <CoverTitle>Cámara Hondureña de la Leche</CoverTitle>
        <CoverDescription>
          <span>"Fomentando la competitividad y sostenibilidad del rubro de la leche"</span>
        </CoverDescription>
      </CoverContent>
      <Container>
        <PostListing />
      </Container>
    </Layout>
  </React.Fragment>
)

export default IndexPage
