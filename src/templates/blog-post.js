import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Container from '../components/container'

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

const Wrapper = styled.section`
  background-color: var(--background);
  padding-top: 80px;
  .blog-head{
    margin: 50px 0;
    text-align: center;
    .meta{
      font-size: 12px;
      margin-top: 10px;
      margin-bottom: 20px;
      text-transform: uppercase;
      font-weight: 400;
      letter-spacing: 0.04em;
      z-index: 20;
      position: relative;
      color: var(--text);
      .tag{
        border-right: 1px solid rgba(125,125,125,0.2);
        padding-right: 10px;
        margin-right: 10px;
        font-weight: 500;
      }
    }
  }
  .blog-data{
    margin: 50px 0;
    padding-top: 20px;
    border-top: 1.5px solid var(--borders);
    p, li{
      font-family: Roboto;
      font-size: 18px;
      font-weight: 300;
      line-height: 150%;
      color: var(--text);
    }
    ul{
      list-style: disc;
      margin: 0;
      margin-left: 15px;
      font-size: 14px;
      li{
        margin-bottom: 10px;
        a{
          color: var(--base-medium);
        }
      }
    }
    img{
      margin: 40px 0;
    }
    h3{
      font-size: 18px;
      font-weight: 600;
      color: var(--title);
    }
  }
`

const ShareButtonsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  h3{
    font-size: 18px;
    font-weight: 600 !important;
    color: var(--title);
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
  const { title, heroImage, body, tags, slug, customDate } = data.contentfulBlogPost
  return (
    <Layout> 
      <Wrapper>
        <div className="blog-head">
          <h2 className="main-title variant-title">{title}</h2>
          <p className="meta">
            <span className="tag">{tags}</span>
            <span>{customDate}</span>
          </p>
        </div>
        <Container>
          <Hero heroData={heroImage}/>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="blog-data">
                <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
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
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
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
      customDate
      body{
        childMarkdownRemark{
          html
        }
      }
    }
  }
`