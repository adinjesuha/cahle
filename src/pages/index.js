import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link';

import Layout from '../components/layout'
import IndexPostListing from '../components/indexPostListing'
import VideoBG from '../video/video-bg.mp4'
import { device } from '../styles/breakpoints'
import Container from '../components/container'

import Portal from '../components/portal'
import Afiche from '../images/afiche-congreso-cahle.jpg'

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
const Wrapper = styled.section`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  transform: translateZ(0);
  background-color: rgba(0,0,0, 0.80);
  display: flex;
  align-items: center;
  justify-content: center;
  .modal-body{
    position: relative;
    .btn{
      position: absolute;
      top: 5px;
      right: 5px;
      cursor: pointer;
      border: none;
      background-color: var(--active);
      color: white;
      border-radius: 100%;
      width: 40px;
      height: 40px;
      .line{
        width: 20px;
        height: 2px;
        background: white;
        display: inline-block;
        position: absolute;
        left: 10px;
        top: 19px;
        &:first-child{
          transform: rotate(45deg);
        }
        &:last-child{
          transform: rotate(-45deg);
        }
      }
    }
  }
`

class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
        showModal: true
    }
  }

  // openModalHandler = () => {
  //   this.setState({showModal: true});
  // }

  closeModalHandler = () => {
    this.setState({showModal: false});
  }
  render(){
    return(
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
          <Wrapper>
            <Container>
              <IndexPostListing />
              <div style={{textAlign: 'center', marginTop: '20px'}}>
                <Link className="button-link" to="/noticias-y-eventos">Ver todos</Link>
              </div>
            </Container>
          </Wrapper>
        </Layout>
        {this.state.showModal && <Portal>
          <ModalWrapper>
            <div className="modal-body">
              <Link to="congreso-de-la-leche">
                <img 
                  src={Afiche} 
                  alt="Congreso de la leche"
                  style={{
                    height: '80vh'
                  }}  
                />
              </Link>
              <button 
                onClick={this.closeModalHandler}
                className="btn"
              >
                <span className="line"></span>
                <span className="line"></span>
              </button>
            </div>
          </ModalWrapper>
        </Portal>}
      </React.Fragment>
    )
  }
}

export default IndexPage
