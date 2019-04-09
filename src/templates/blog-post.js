import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Container from '../components/container'
import { device } from '../styles/breakpoints'
import Check from '../images/icons/check.svg'

import {
  FacebookShareButton,
  TwitterShareButton,
  GooglePlusShareButton,
  EmailShareButton,
  WhatsappShareButton,

  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  EmailIcon,
  WhatsappIcon,

} from 'react-share';


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
  p{
    font-size: 16px;
    font-weight: 300;
  }
`

const ShareButtonsContainer = styled.div`
  max-width: 460px;
  width: 100%;
  font-weight: 400;
  margin: 0 auto;
  text-align: center;
  h3{
    display: inline-block;
  }
  ul li.social-share{
    vertical-align: top;
    display: inline-block;
    margin-right: 20px;
    text-align: center;
    &:last-child{
      margin-right: 0;
    }
    > div{
      cursor: pointer;
    }
  }
`

const PostPage = ({data}) => {
  const { title, heroImage, body, tags, slug } = data.contentfulBlogPost
  return (
    <Layout> 
      <Hero heroData={heroImage} title={title} tags={tags}/>
      <Container>
        <BlogSection>
          <ContentfulDiv dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
          <ShareButtonsContainer>
            <h3 style={{fontWeight: 400}}>Compartelo en tus redes</h3>
            <ul>
              <li className="social-share">
                <FacebookShareButton 
                  url={`https://www.cahle.org/${slug}`}
                  quote={title}
                >
                  <FacebookIcon size={40} round />
                </FacebookShareButton>
              </li>
              <li className="social-share">
                <TwitterShareButton
                  url={`https://www.cahle.org/${slug}`}
                  quote={title}
                >
                  <TwitterIcon size={40} round/>
                </TwitterShareButton>
              </li>
              <li className="social-share">
                <GooglePlusShareButton
                  url={`https://www.cahle.org/${slug}`}
                  quote={title}
                >
                  <GooglePlusIcon size={40} round/>
                </GooglePlusShareButton>
              </li>
              <li className="social-share">
                <EmailShareButton
                  url={`https://www.cahle.org/${slug}`}
                  quote={title}
                >
                  <EmailIcon size={40} round/>
                </EmailShareButton>
              </li>
              <li className="social-share">
                <WhatsappShareButton
                  url={`https://www.cahle.org/${slug}`}
                  quote={title}
                >
                  <WhatsappIcon size={40} round/>
                </WhatsappShareButton>
              </li>
            </ul>
          </ShareButtonsContainer>
        </BlogSection>
      </Container>
    </Layout>
  )
};

export default PostPage

export const query = graphql`
  query BlogPostQuery($slug: String!){
    contentfulBlogPost(slug: {eq: $slug}){
      slug
      title
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