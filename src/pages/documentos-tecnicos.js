import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"

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

export default () => (
  <StaticQuery
    query={graphql`
      query DownLoadGroupDocumentosTecnicos {
        allContentfulDownloadGroup{
          edges{
            node{
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
        }
      }
    `}
    render = { data => {
      const documentos = data.allContentfulDownloadGroup.edges[1].node
      // console.log(documentos.downloadList[0].titleDocument)
      return(
        <Layout>
        <HeroPage title={documentos.title} tags="Documentación" bgImage={"documentos"}/>
          <Wrapper>
            <Container>
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <h2 className="main-title variant-title">{documentos.downloadList[0].titleDocument}</h2>
                  <div className="row">
                    {documentos.downloadList[0].link.map(list => (
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
    }}
  />
)