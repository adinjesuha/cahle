import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Row from './row'
import CardPost from './cardPost'

export default () => (
  <StaticQuery
    query={graphql`
      query postListingQuery {
        allContentfulBlogPost(limit: 100, sort:{fields:[createdAt], order: DESC}) {
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
                fluid(maxWidth: 2000){
                  ...GatsbyContentfulFluid
                }
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
          <div className="col-lg-8 col-md-12">
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