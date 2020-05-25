import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

import { device } from '../styles/breakpoints'

const Post = styled.article`
  position: relative;
  width: 100%;
  margin-bottom: 60px;
  a{
    .gatsby-image-wrapper {
      min-height: 200px;
      max-height: 200px;
      position: relative;
      border-radius: 4px;
      transform: translateZ(0);
      transform:translateY(0);
      transition: 0.3s;
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: black;
        opacity: 0.1;
        z-index: 1;
        transition: opacity 0.3s ease;
      }
    }
    .title{
      margin-bottom: 8px;
      line-height: 1.16;
      color: var(--oxford-blue);
      transition: color 0.3s ease;
      font-size: 22px;
    }
    .data{
      padding: 20px 0 0;
      height: 100%;
      @media ${device.tablet}{
        /* min-height: 330px; */
      }
      .meta{
        font-size: 12px;
        margin-top: 10px;
        margin-bottom: 20px;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 0.04em;
        z-index: 20;
        position: relative;
        color: var(--text);
        .tag{
          border-right: 1px solid rgba(125,125,125,0.2);
          padding-right: 10px;
          margin-right: 10px;
          font-weight: 500;
        }
      }
    }
  }
  &:hover .gatsby-image-wrapper{
    transform: translateZ(0);
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
  &:hover .title{
    color: var(--active);
  }
  ${props => props.featured && css`
    a{
      display: flex;
      flex-wrap: wrap;
      .gatsby-image-wrapper{
        width: 100%;
      }
    }
    @media ${device.tablet}{
      a{
        flex-wrap: nowrap;
        .gatsby-image-wrapper{
          width: 50%;
          min-height: 380px;
        }
        .data {
          width: 50%;
          margin-left: 40px;
        }
      }
    }
    @media ${device.laptop}{
      a {
        .data .title{
          font-size: 32px;
        }
      }
    }
  `}
`

const CardPost = ({slug, heroImage, title, body, tags, customDate, intro, ...props}) => (
  <Post featured={props.featured}>
    <Link to={`/noticias-y-eventos/${slug}`}>
      <Img fluid={heroImage.fluid}/>
      <div className="data">  
        <p className="meta">
          <span className="tag">{tags}</span>
          <span>{customDate}</span>
        </p>
        <h2 className="title">{title}</h2>
        <p className="main-text">{intro}</p>
      </div>
    </Link>
  </Post>
)

export default CardPost
