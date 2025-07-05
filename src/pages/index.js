import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

import Layout from '../components/layout'
import IndexPostListing from '../components/indexPostListing'
import VideoBG from '../video/video-bg.mp4'
import { device } from '../styles/breakpoints'
import Container from '../components/container'
import Portal from '../components/portal'
import Modal from '../components/modal'
import { IoMdClose } from 'react-icons/io'

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
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
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
  span {
    font-weight: 400;
    display: block;
    color: white;
  }
  h1 {
    font-weight: 700;
    font-size: 34px;
    color: white;
    letter-spacing: 0.02em;
    line-height: 1.2;
    margin: 0;
    text-transform: uppercase;
  }
  p {
    margin-bottom: 40px;
    color: white;
    font-size: 14px;
  }
  @media ${device.mobileL} {
    h1 {
      font-size: 42px;
    }
  }
  @media ${device.tablet} {
    h1 {
      font-size: 72px;
    }
    p {
      font-size: 22px;
    }
  }
`
const Wrapper = styled.section`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
`

const ModalButton = styled.button`
  width: 30px;
  height: 30px;
  position: fixed;
  top: calc((50% - 230px) + 10px);
  right: 30px;
  z-index: 2000;
  cursor: pointer;
  border-radius: 50%;
  background: var(--oxford-blue);
  border: 1px solid var(--oxford-blue);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.mobileL}{
    left: calc((50% + 187px) - 40px); 
  }
  @media ${device.tablet}{
    top: calc((50% - 230px) + 10px);
    left: calc((50% + 350px) - 40px); 
  }
`

const IndexPage = () => {
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    setTimeout(()=>{
      setToggle(true)
    }, 1000)
  }, [])
  return (
    <>
    {/* <Portal>
    {toggle && (
      <React.Fragment>
        <ModalButton onClick={() => setToggle(false)}>
          <IoMdClose />
        </ModalButton>
        <Modal />
      </React.Fragment>
    )}
    </Portal> */}
    <Layout>
      <FullScreenBg>
        <video
          autoPlay
          muted
          loop
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            zIndex: '-100',
            transform: 'translateX(-50%) translateY(-50%)',
            backgroundSize: 'cover',
          }}
        >
          <source src={VideoBG} type="video/mp4" />
        </video>
      </FullScreenBg>
      <CoverContent>
        <h1>
          Cámara hondureña <br /> de la leche
        </h1>
      </CoverContent>
      <Wrapper>
        <Container>
          <IndexPostListing />
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Link className="button-link" to="/noticias-y-eventos">
              Ver todos
            </Link>
          </div>
        </Container>
      </Wrapper>
    </Layout>
    </>
  )
}

export default IndexPage
