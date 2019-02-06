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
  border: 1px solid #eeeeee;
  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.05);
  border-radius: 6px;
  overflow: hidden;
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
`

const Data = styled.div`
  padding: 5% 7.5% 8%;
  font-family: 'Montserrat';
`

const Title = styled.h2`
  margin-bottom: 8px;
  font-size: 32px;
  color: var(--base-bg);
  opacity: 1;
  transition: opacity 0.3s ease;
  &:hover{
    opacity: 0.3;
  }
`

const Tag = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
`
const Excerpt = styled.p`
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  margin: 12px 0 20px;
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
