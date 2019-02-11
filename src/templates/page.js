import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import Vision from '../images/vision.jpg'
import Check from '../images/icons/check.svg'

const Wrapper = styled.div`
  padding: 0 20px;
  margin: 70px auto;
`
const Hero = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
  background-image: url(${Vision});
  background-position: center center;
  background-size: cover;
  padding: 300px 0 100px;
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

const ContentfulDiv = styled.div`
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
          <ContentfulDiv dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
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