import React from 'react'
import styled from 'styled-components'
import { graphql } from "gatsby"

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  WhatsappShareButton,

  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  WhatsappIcon,

} from 'react-share';

import Layout from '../components/layout'
import Container from '../components/container'
import HeroPage from '../components/heroPage'
import DownloadCard from '../components/downloadCard'

const Wrapper = styled.section`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
  h2{
    margin-bottom: 50px;
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

export default ({data}) => (
  <Layout>
    <HeroPage title={data.contentfulDownloadList.titleDocument} tags="Documentación" bgImage={"documentos"}/>
    <Wrapper>
      <Container>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="row">
              {data.contentfulDownloadList.link.map(list => (
                <DownloadCard 
                  columns="col-lg-6 col-md-6"
                  link={`https:${list.file.url}`}
                  title={list.title}
                />
              ))}
            </div>
          </div>
          <ShareButtonsContainer>
            <h3 style={{fontWeight: 400}}>Compartelo en tus redes</h3>
            <ul>
              <li className="social-share">
                <FacebookShareButton 
                  url={`https://www.cahle.org/varios`}
                  quote={data.contentfulDownloadList.titleDocument}
                >
                  <FacebookIcon size={40} round />
                </FacebookShareButton>
              </li>
              <li className="social-share">
                <TwitterShareButton
                  url={`https://www.cahle.org/varios`}
                  quote={data.contentfulDownloadList.titleDocument}
                >
                  <TwitterIcon size={40} round/>
                </TwitterShareButton>
              </li>
              <li className="social-share">
                <EmailShareButton
                  url={`https://www.cahle.org/varios`}
                  quote={data.contentfulDownloadList.titleDocument}
                >
                  <EmailIcon size={40} round/>
                </EmailShareButton>
              </li>
              <li className="social-share">
                <WhatsappShareButton
                  url={`https://www.cahle.org/varios`}
                  quote={data.contentfulDownloadList.titleDocument}
                >
                  <WhatsappIcon size={40} round/>
                </WhatsappShareButton>
              </li>
            </ul>
          </ShareButtonsContainer>
        </div>
      </Container>
    </Wrapper>
  </Layout>
)

export const query = graphql`
  query DownLoadListVarios {
    contentfulDownloadList(titleDocument: {eq: "Varios"}){
      id
      titleDocument
      link {
        id
        title
        file{
          url
        }
      }
    }
  }
`