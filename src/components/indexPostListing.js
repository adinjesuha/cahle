import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import Row from './row'
import CardPost from './cardPost'

export default () => (
  <StaticQuery
    query={graphql`
      query indexPostListingQuery {
        allContentfulBlogPost(limit: 4, sort:{fields:[createdAt], order: DESC}) {
          edges {
            node {
              id
              title
              tags
              customDate
              intro
              slug
              heroImage{
                title
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                  quality: 100
                )
              }
            }
          }
        }
      }
    `}
    render = { data => {
      const posts = data.allContentfulBlogPost.edges
      const featuredPost = posts[0].node
      return(
        <Row>
          <div className="col-lg-12">
            <CardPost {...featuredPost} featured />  
          </div>
          {posts.slice(1).map(({ node: post }) => (
            <div className="col-lg-4 col-md-6">
              <CardPost key={post.id} {...post} />
            </div>
          ))}
        </Row>
      )
    }}
  />
)


