import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  max-width: 1140px;  
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container