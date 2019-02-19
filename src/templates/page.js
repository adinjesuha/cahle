import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/container'
import Check from '../images/icons/check.svg'
import Hero from '../components/hero'

const Wrapper = styled.div`
  padding: 0 20px;
  margin: 70px auto;
`

const ContentfulDiv = styled.div`
  p{
    text-align: justify;
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

const Page = ({data}) => {
  const { body, heroImage, title, section } = data.contentfulPage
  return (
    <Layout>
      <Hero heroData={heroImage} title={title} tags={section}/>
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