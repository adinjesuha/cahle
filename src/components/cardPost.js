import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

import { device } from '../styles/breakpoints'

const Post = styled.li`
  position: relative;
  width: 100%;
  margin-bottom: 40px;
  background: white;
  box-shadow: 0 2px 4px rgba(108, 111, 115, 0.1);
  border-radius: 5px;
  overflow: hidden;
  transition: 0.3s;
  @media ${device.tablet}{
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media ${device.laptop}{
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  .gatsby-image-wrapper {
    max-height: 250px;
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
  a{
    text-decoration: none;
  }
  ${props => props.featured && css`
    .gatsby-image-wrapper{
      max-height: 410px;
    }
    ${Data} {
      padding: 5%;
    }
    ${Title} {
      
    }
  `}
  &:hover{
    box-shadow: 0 8px 12px 0 rgba(0,0,0,0.08);
  }
`

const Data = styled.div`
  padding: 5% 7.5% 8%;
`

const Title = styled.h2`
  margin-bottom: 8px;
  color: var(--blue);
  opacity: 1;
  transition: color 0.3s ease;
  line-height: 1.16;
  font-weight: 500;
  font-size: 32px;
  &:hover{
    color: var(--green);
  }
`

const Tag = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  color: var(--blue);
`
const Excerpt = styled.p`
  font-weight: 400;
  margin: 12px 0;
  color: #555555;
`

const CardPost = ({slug, createdAt, heroImage, title, body, tags, ...props}) => (
  <Post featured={props.featured}>
    <Link to={slug}>
      <Img fluid={heroImage.fluid}/>
    </Link>
    <Data>
      <Tag>{tags}</Tag>
      <Link to={slug}>
        <Title>{title}</Title>
      </Link>
      <Excerpt
        dangerouslySetInnerHTML={{
          __html: body.childMarkdownRemark.excerpt
        }}
      />
    </Data> 
  </Post>
)

export default CardPost
