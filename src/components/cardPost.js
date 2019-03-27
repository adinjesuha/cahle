import React from 'react'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

import { device } from '../styles/breakpoints'

const Post = styled.article`
  position: relative;
  width: 100%;
  margin-bottom: 40px;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  transform: translateZ(0);
  transform:translateY(0);
  transition: 0.3s;
  .gatsby-image-wrapper {
    max-height: 200px;
    position: relative;
    &:before{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: black;
      opacity: 0.3;
      z-index: 1;
      transition: opacity 0.3s ease;
    }
    &:hover::before{
      opacity: 0.5;
    }
  }
  ${props => props.featured && css`
    .gatsby-image-wrapper{
      max-height: 200px;
    }
    ${Data} {
      
    }
    ${Title} {
      
    }
  `}
  &:hover{
    transform: translateZ(0);
    transform: translateY(-3px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`

const Data = styled.div`
  padding: 20px 24px;
  height: 100%;
  min-height: 220px;
  @media ${device.tablet}{
    min-height: 330px;
  }
`

const Title = styled.h2`
  margin-bottom: 8px;
  line-height: 1.16;
`

const Meta = styled.p`
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.04em;
  z-index: 20;
  position: relative;
  color: var(--secondary-text);
`

const Tag = styled.span`
  border-right: 1px solid rgba(125,125,125,0.2);
  padding-right: 10px;
  margin-right: 10px;
  font-weight: 500;
`

const ButtonPost = styled.a`
  padding: 15px 0;
  display: inline-block;
  border-top: 1px solid var(--light);
  width: 100%;
  text-align: center;
  color: var(--active);
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover{
    background-color: var(--active);
    color: white;
  }
`

const CardPost = ({slug, heroImage, title, body, tags, customDate, intro, ...props}) => (
  <Post featured={props.featured}>
    <a href={slug}>
      <Img fluid={heroImage.fluid}/>
    </a>
    <Data>  
      <Meta>
        <Tag>{tags}</Tag>
        <span>{customDate}</span>
      </Meta>
      <a href={slug}>
        <Title className="sub-title">{title}</Title>
      </a>
      <p className="main-text main-text__light">{intro}</p>
    </Data>
    <ButtonPost href={slug}>Leer más</ButtonPost>
  </Post>
)

export default CardPost
