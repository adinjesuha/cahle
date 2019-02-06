import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import Container from '../../components/container'
import Vision from '../../images/vision.jpg'
import Check from '../../images/icons/check.svg'


const Wrapper = styled.div`
  padding: 70px 0;
  text-align: justify;
  h2{
    margin: 30px auto 25px;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  ul{
    list-style: none;
    margin: 0;
  }
`
const Hero = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
  margin-top: -80px;
  background-image: url(${Vision});
  background-position: center center;
  background-size: cover;
  padding: 300px 0 50px;
  height:  60vh;
  &::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
  }
`
const Title = styled.h1`
  font-size: 54px;
  line-height: 54px;
  font-weight: bold;
  margin-bottom: 5px;
  position: relative;
`
const StyleLi = styled.li`
  position: relative;
  padding-left: 25px;
  margin-bottom: 20px;
  &:before{
    content: '';
    position: absolute;
    background: url(${Check}) no-repeat;
    background-size: contain;
    width: 20px;
    height: 10px;
    left: 2px;
    top: 7px;
  }
`
const ContentWrapper = styled.div`
 
  blockquote {
    display:block;
    background: var(--base-light-bg);
    padding: 30px;
    margin: 0 0 26px;
    position: relative;
    color: #666;
    text-align: justify;
    border-left: 2px solid var(--main-blue);
    p {
      line-height: 1.6;
      font-size: 16px;
    }
  }
`

export default ({data}) => {
  const { body } = data.contentfulPage
  return (
    <Layout>
      <Hero>
        <Container>
          <Title>Beneficios</Title>
        </Container>
      </Hero>
      <Wrapper>
        <Container>
          <ContentWrapper dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
        </Container>
      </Wrapper>
    </Layout>
  )
}
