import React from 'react'
import styled from 'styled-components'

import Image from './image'

const SmallCard = styled.div`
  background: white;
  border-radius: 4px;
  display: flex;
  margin-bottom: 20px;
  .bg-image{
    width: 40%;
    height: 120px;
    .gatsby-image-wrapper{
      height: 100%;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }
  .data{
    padding: 20px 10px;
    h3, p{
      margin: 0;
    }
    h3, a{
      font-size: 14px;
    }
    p{
      font-size: 13px;
    }
  }
`

const smallCard = props => (
  <li className="col-lg-6">
    <SmallCard>
      <div className="bg-image">
        <Image filename={props.hotelName}/>
      </div>
      <div className="data">
        <h3 className="sub-title">{props.title}</h3>
        <p className="main-text">Teléfonos: {props.phones}</p>
        <a className="animate-link" target="_blank" rel="noopener noreferrer" href={props.link}>
          visitar el sitio web
        </a>
      </div>  
    </SmallCard>
  </li>
)

export default smallCard;

