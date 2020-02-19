import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useTransition, animated } from 'react-spring'

import { device } from '../styles/breakpoints'
import PopUpImage from '../images/popup-left-image.jpg'
import CahelAgafam from '../images/cahle-agafam-logos.png'

const Wrapper = styled(animated.main)`
  background-color: rgba(0,0,0, 0.6);
  height: 200px;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .pop-up{
    background-color: white;
    display: flex;
    border-radius: 6px;
    overflow: hidden;
    margin: 0 20px;
    &__left-panel, &__right-panel{
        width: 100%;
        height: 460px;
      }
    &__left-panel{
      display: none;
      img{
        width: 100%;
      }
    }
    &__right-panel{
      padding: 40px;
      .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 100%;
        &__text{
          text-align: center;
          h4{
            color: var(--mantis);
            font-weight: normal;
          }
          h2{
            color: var(--oxford-blue);
          }
          .buttons-group{
            width: 100%;
          }
        }
      }
    }
    @media ${device.tablet}{
      margin: 0;
      &__left-panel, &__right-panel{
        width: 350px;
      }
      &__left-panel{
        display: block;
      }
    }
  }
`

const ButtonLink = styled(Link)`
  color: var(--oxford-blue);
  border: 1px solid var(--oxford-blue);
  border-radius: 4px;
  display: inline-block;
  padding: 14px 10px;
  width: 100%;
  transition: 0.3s ease all;
  &:first-child{
    margin-bottom: 15px;
  }
  &:hover{
    background-color: var(--oxford-blue);
    color: white;
  }
  &.primary{
    background-color: var(--oxford-blue);
    color: white;
  }
`

const Modal = () => {
  const [state, toggle] = useState(true);
  const transition = useTransition(state, null, { 
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  useEffect(() => toggle(true), [toggle]);
  return transition.map(({ item, key, props: fade }) =>
    item &&
      <Wrapper key={key} style={fade}>
        <div className="pop-up">
          <div className="pop-up__left-panel">
            <img 
              src={PopUpImage} 
              alt="Congreso de la leche 2020"
            />
          </div>
          <div className="pop-up__right-panel">
            <div className="content">
              <img src={CahelAgafam} alt="Cahel Agafam"/>
              <div className="content__text">
                <h4>Te invitan al:</h4>
                <h2>VII Congreso de la Leche</h2>
                <div className="buttons-group">
                  <ButtonLink to="/informacion-general-congreso-2020">Descubre más</ButtonLink>
                  <ButtonLink to="/inscripciones-congreso-2020" className="primary">Inscribete ya!</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
  )
}

export default Modal