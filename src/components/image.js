import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Image = (props) => (
  <StaticQuery
    query={graphql`{
  images: allFile {
    edges {
      node {
        relativePath
        name
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}`}
    render={(data) => {
      const image = data.images.edges.find( n => {
        return n.node.relativePath.includes(props.filename);
      })
      if(!image) {return null}
      const myImage = getImage(image.node)
      console.log('image', image)
      return <GatsbyImage alt={props.alt} image={myImage} />;
    }}
  />
)

export default Image