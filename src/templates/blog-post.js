import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Hero from '../components/hero'
import { device } from '../styles/breakpoints'

const BlogSection = styled.div`
  position: relative;
  max-width: 720px;
  padding: 0 20px;
  margin: 70px auto;
  font-family: 'Montserrat';
  font-weight: 500;
  line-height: 1.8;
  h2{
    font-size: 22px;
    line-height: 38px;
    margin-top: 84px;
    margin-bottom: 21px;
  }
  h3{
    font-size: 22px;
    line-height: 34px;
    margin-top: 64px;
    margin-bottom: 16px;
  }
  p {
    font-size: 18px;
    margin-top: 27px;
    margin-bottom: 27px;
  }
  p strong{
    font-weight: 700;
  }
  @media ${device.tablet} {
    padding: 0;
  }
`
const ContentWrapper = styled.div`
  blockquote {
    display:block;
    background: var(--base-light);
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
const PostPage = ({data}) => {
  const { title, heroImage, body, tags } = data.contentfulBlogPost
  return (
    <Layout> 
      <Hero heroData={heroImage} title={title} tags={tags}/>
      <BlogSection>
        <ContentWrapper dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
      </BlogSection>
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
        file {
          url
        }
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