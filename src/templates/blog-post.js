import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Container from '../components/container'
import { device } from '../styles/breakpoints'
import Check from '../images/icons/check.svg'

const BlogSection = styled.div`
  position: relative;
  margin: 70px auto;
  font-family: 'Montserrat';
  font-weight: 500;
  line-height: 1.8;
  p {
    margin-bottom: 27px;
    text-align: justify;
  }
  @media ${device.tablet} {
    padding: 0;
  }
`
const ContentfulDiv = styled.div`
  img{
    display: block;
    margin: 0 auto;
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

const PostPage = ({data}) => {
  const { title, heroImage, body, tags } = data.contentfulBlogPost
  return (
    <Layout> 
      <Hero heroData={heroImage} title={title} tags={tags}/>
      <Container>
        <BlogSection>
          <ContentfulDiv dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
        </BlogSection>
      </Container>
    </Layout>
  )
};

export default PostPage

export const query = graphql`
  query BlogPostQuery($slug: String!){
    contentfulBlogPost(slug: {eq: $slug}){
      title
      createdAt(formatString: "MMMM DD, YYYY")
      heroImage{
        fluid(maxWidth: 2000){
          ...GatsbyContentfulFluid
        }
      }
      tags
      body{
        childMarkdownRemark{
          html
        }
      }
    }
  }
`