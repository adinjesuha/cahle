import React from 'react'
import styled, { css } from 'styled-components'

import { device } from '../styles/breakpoints'

const Wrapper = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  li {
    figure {
      margin: 10px;
      img {
        filter: grayscale(1);
        transition: filter 0.3s ease;
      }
    }
    &:hover figure img {
      filter: grayscale(0);
    }
  }
  ${props => props.tgu && css`
    li:not(:last-child){
      margin-bottom: 2rem;
    }
    a{
      color: var(--text);
      display: flex;
      align-items: center;
      figure{
        img{
          filter: unset;
          transition: none;
        }
      } 
      div {
        width: calc(100% - 120px);
        font-size: 12px;
        padding: 0 10px;
        p{
          margin-top: 0;
        }
        p:last-child{
          margin-bottom: 0;
        }
      }
    }
    @media ${device.mobileL}{
      li:not(:last-child){
        width: 50%;
      }
      a{
        flex-direction: column;
        align-items: flex-start;
        figure{
          height: 120px;
          display: flex;
          align-items: flex-end;
        }
        div{
          width: 100%;
        }
      }
    }
    @media ${device.tablet}{
      align-items: flex-start;
      a{
        flex-direction: row;
        align-items: flex-start;
        figure{
          height: auto;
          display: flex;
          align-items: flex-end;
          margin: 0 10px;
        }
        div{
          width: 100%;
          font-size: 14px;
        }
      }
    }
  `}
`

const SmallLi = styled.li`
  width: 50%;
  a{
    flex-direction: column;
    align-items: center;
    figure{
      height: 120px;
      display: flex;
      align-items: flex-end;
    }
    div{
      margin-top: 10px;
      text-align: center;
      width: 100%;
      font-size: 12px;
    }
  }
  @media ${device.tablet}{
    width: 30% !important;
    flex: 1 1 30% !important;
  }
`

const SponsorsComponent = ({ sponsors, tgu }) => {
  return (
    <Wrapper tgu={tgu}>
      {sponsors.map(sponsor => {
        if(sponsor.desc?.small) return <SmallLi>
          <a href={sponsor.link} target="_blank" rel="noopener noreferrer" >
            <figure style={{ width: '120px' }}>
              <img src={sponsor.path} alt={sponsor.name} />
            </figure>
            {tgu && sponsor.desc && (
              <div>
                <p>{sponsor.desc.dir}</p>
                <p>{sponsor.desc.tel}</p>
              </div>
            )}
          </a>
        </SmallLi>
        return (
          <li>
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer" >
              <figure style={{ width: '180px' }}>
                <img src={sponsor.path} alt={sponsor.name} />
              </figure>
              {tgu && sponsor.desc && (
                <div>
                  <p>{sponsor.desc.dir}</p>
                  <p>{sponsor.desc.tel}</p>
                </div>
              )}
            </a>
          </li>
        )}
      )}
    </Wrapper>
  )
}

export default SponsorsComponent
