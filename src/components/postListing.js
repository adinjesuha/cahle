import React from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'

import CardPost from './cardPost'

const PostList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 70px auto;
  list-style: none;
  &::after {
    content: '';
    flex: 0 0 32%;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query BlogQuery {
        allContentfulBlogPost(limit: 3, sort:{fields:[createdAt], order: DESC}) {
          edges {
            node {
              id
              title
              tags
              body {
                childMarkdownRemark{
                  excerpt(pruneLength: 100)
                }
              }
              createdAt(formatString: "MMMM DD, YYYY")
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
        <PostList>
          <CardPost {...featuredPost} featured />
          {posts.slice(1).map(({ node: post }) => (
            <CardPost key={post.id} {...post} />
          ))}
          
        </PostList> 
      )
    }}
  />
)


