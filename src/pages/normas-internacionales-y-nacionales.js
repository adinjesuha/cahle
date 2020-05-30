import React from 'react'
import styled from 'styled-components'
import { graphql } from "gatsby"

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

export default ({data}) => (
  <Layout>
    <HeroPage title={data.contentfulDownloadGroup.title} tags="Legislación" bgImage={"documentos"}/>
    <Wrapper>
      <Container>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2 className="main-title variant-title">{data.contentfulDownloadGroup.downloadList[0].titleDocument}</h2>
            <div className="row">
              {data.contentfulDownloadGroup.downloadList[0].link.map(list => (
                <DownloadCard 
                  columns="col-lg-6 col-md-6"
                  link={`https:${list.file.url}`}
                  title={list.title}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-9">
            <h2 className="main-title variant-title">{data.contentfulDownloadGroup.downloadList[1].titleDocument}</h2>
            <div className="row">
              {data.contentfulDownloadGroup.downloadList[1].link.map(list => (
                <DownloadCard 
                  columns="col-lg-6 col-md-6"
                  link={`https:${list.file.url}`}
                  title={list.title}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  </Layout>
)

export const query = graphql`
  query DownLoadGroupNormasInternacionales {
    contentfulDownloadGroup(title: {eq: "Normas internacionales y nacionales"}){
      id
      title
      downloadList {
        titleDocument
        link {
          title
          file {
            url
          }
        }
      }
    }
  }
`