import React from 'react'
import styled from 'styled-components'

import { FaFileDownload } from 'react-icons/fa';

const DownloadCard = styled.div`
  background: white;
  display: flex;
  margin-bottom: 20px;
  border-radius: 4px;
  min-height: 100px;
  align-items: center;
  p{
    font-size: 14px;
    padding: 0 10px;
    width: 75%; 
  }
  a{
    min-height: 100px;
    width: 25%; 
    background: var(--active);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      fill: white;
      width: 40px;
      height: 40px;
      transition: all 0.3s ease;
    }
    &:hover svg{
      fill: var(--oxford-blue);
    }
  }
`

const downloadCard = props => (
  <div  className={props.columns}>
    <DownloadCard>
      <a target="_blank" rel="noopener noreferrer" href={props.link}>
        <FaFileDownload />
      </a>
      <p className="main-text">{props.title}</p>
    </DownloadCard> 
  </div>
)

export default downloadCard;
