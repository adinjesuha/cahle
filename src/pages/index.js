import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';

import Layout from '../components/layout'
import Container from '../components/container'
import PostListing from '../components/postListing'
import VideoBG from '../video/video-bg.mp4'

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
    font-size: 64px;
    color: white;
    letter-spacing: 0.02em;
    line-height: 1.2;
    margin: 0;
  }
  h2{
    color: white;
    font-size: 22px;
    letter-spacing: 0.02em;
    margin-top: 0;
  }
  p{
    margin-bottom: 40px;
    color: white;
  }
`
const ButtonLink = styled(Link)`
  background-color: none;
  border-radius: 50px;
  border: 1px solid var(--green);
  padding: 15px 40px;
  color: var(--green);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  transition: background 0.3s ease, color 0.3s ease;
  &:hover{
    background-color: var(--green);
    color: white;
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
        <p style={{marginBottom: '10px'}}>La cámara hondureña de la leche te invita al</p>
        <h1>VII CONGRESO <br/> DE LA LECHE</h1>
        <p>La Ceiba, Atlantida</p>
        <ButtonLink to="/">Quieres saber más?</ButtonLink>
      </CoverContent>
      <Container>
        <PostListing />
        <div style={{paddingTop: '50px', textAlign:'center', width: '100%'}}>
          <ButtonLink to="/noticias-y-eventos">Ver todos</ButtonLink>
        </div>
      </Container>
    </Layout>
  </React.Fragment>
)

export default IndexPage
