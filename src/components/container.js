import React from 'react'
import styled from 'styled-components'
import { device } from '../styles/breakpoints'

const Wrapper = styled.section`
  margin: 0 auto;
  padding: 0 40px;
  max-width: 1024px;
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container