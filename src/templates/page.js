import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import Vision from '../images/vision.jpg'
import Check from '../images/icons/check.svg'
import { device } from '../styles/breakpoints'
import { documentacion } from '../utils/menuConfig'
import LeftNav from '../components/leftNav'

const Wrapper = styled.div`
  padding: 70px 0;
  text-align: justify;
  ul{
    list-style:none;
    margin: 0;
  }
  h2{
    margin: 0px auto 25px;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--main-blue);
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

const ContentWrapper = styled.div`
  font-family: 'Montserrat';
  h2{
    margin: 30px auto 25px;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  h3{
    font-size: 14px;
  }
  ul{
    list-style: none;
    margin: 0;
    li{
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
      a{
        color: var(--base-medium);
      }
    }
  }
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
`
const BoxRight = styled.div`
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  flex: 0 0 100%;
  @media ${device.tablet}{
    flex: 0 0 70%;
  }
`
const BoxLeft = styled.div`
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  flex: 0 0 0%;
  padding-right:60px;
  display: none;
  @media ${device.laptop}{
    display: block;
    flex: 0 0 30%;
  }
`

const Page = ({data}) => {
  const { body, title, section } = data.contentfulPage
  return (
    <Layout>
      <Hero>
        <Container>
          <Title>{title}</Title>
        </Container>
      </Hero>
      <Wrapper>
        <Container>
          <Flex>
            <BoxLeft>
              <LeftNav title="Documentación" data={documentacion} />
            </BoxLeft>
            <BoxRight>
              <ContentWrapper dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
            </BoxRight>
          </Flex>
        </Container>
      </Wrapper>
    </Layout>
  )
}
export default Page

export const query = graphql`
  query PageQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      section
      slug
      heroImage{
        file {
          url
        }
        fluid(maxWidth: 2000){
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`