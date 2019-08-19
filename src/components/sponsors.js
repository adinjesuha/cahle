import React from 'react'
import styled from 'styled-components'

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
`

const sponsors = ({ sponsors }) => {
  return (
    <Wrapper>
      {sponsors.map(sponsor => (
        <li>
          <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
            <figure style={{ width: '120px' }}>
              <img src={sponsor.path} alt={sponsor.name} />
            </figure>
          </a>
        </li>
      ))}
    </Wrapper>
  )
}

export default sponsors
