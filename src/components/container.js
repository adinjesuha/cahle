import React from 'react'
import styled from 'styled-components'

import { device } from '../styles/breakpoints';

const Wrapper = styled.section`
  margin: 0 auto auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;
  flex-grow: 1;
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container