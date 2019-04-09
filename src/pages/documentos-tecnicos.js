import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import { FaFileDownload } from 'react-icons/fa';

import Layout from '../components/layout'
import Container from '../components/container'
import HeroPage from '../components/heroPage'

const Wrapper = styled.section`
  background-color: var(--background);
  width: 100%;
  padding: 70px 0;
    h2{
      margin-bottom: 50px;
    }
    .download-card{
    background: white;
    display: flex;
    margin-bottom: 20px;
    border-radius: 4px;
    min-height: 100px;
    align-items: center;
    p{
      font-size: 14px;
      padding: 0 10px;
      width: 75%; 
    }
    a{
      min-height: 100px;
      width: 25%; 
      background: var(--active);
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg{
        fill: white;
        width: 40px;
        height: 40px;
        transition: all 0.3s ease;
      }
      &:hover svg{
        fill: var(--oxford-blue);
      }
    }
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
                      <div className="col-lg-6 col-md-6">
                        <div className="download-card">
                          <a target="_blank" rel="noopener noreferrer" href={`https:${list.file.url}`}>
                            <FaFileDownload />
                          </a>
                          <p className="main-text">{list.title}</p>
                        </div> 
                      </div>
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