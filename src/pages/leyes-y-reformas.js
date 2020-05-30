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
    <HeroPage title={data.contentfulDownloadList.titleDocument} tags="Legislación" bgImage={"documentos"}/>
    <Wrapper>
      <Container>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="row">
              {data.contentfulDownloadList.link.map(linkItem => (
                <DownloadCard
                  key={linkItem.id} 
                  columns="col-lg-6 col-md-6"
                  link={`https:${linkItem.file.url}`}
                  title={linkItem.title}
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
  query DownLoadListLeyes {
    contentfulDownloadList(titleDocument: {eq: "Leyes y reformas"}){
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