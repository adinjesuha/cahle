import React from 'react'
import styled, { css }  from 'styled-components'

const iconLimits = {
  barWidth:   '35px',
  barHeight:   '4px',
  barSpacing: '10px',
}

const Hamburger = styled.div`
	background: ${props => props.iconState ? 'rgba(41, 53, 129, 0)' : 'rgba(41, 53, 129, 1)'};
  position: relative;
	transform: translateY(${iconLimits.barSpacing});
	transition: all 0.3s ease;
  width: ${iconLimits.barWidth};
	height: ${iconLimits.barHeight};
  border-radius: 2px;
  &::before, &::after{
    width: ${iconLimits.barWidth};
	  height: ${iconLimits.barHeight};
    border-radius: 2px;
  }
  &::before{
    content: "";
    position: absolute;
    left: 0;
    bottom: ${iconLimits.barSpacing};
    background: rgba(41, 53, 129, 1);
    transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  &::after{
    content: "";
    position: absolute;
    left: 0;
    top: ${iconLimits.barSpacing};
    background: rgba(41, 53, 129, 1);
    transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  ${props => props.iconState && css`
    &::before{
      bottom: 0;
      transform: rotate(-45deg);
      transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    &::after{
      top: 0;
      transform: rotate(45deg);
      transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }
  `}
`


const HamburgerIcon = ({iconState}) => (
  <Hamburger iconState={iconState} />
)

export default HamburgerIcon