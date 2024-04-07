import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const ImageComponent = ({ imgName, className }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
              originalName
            }
          }
        }
      }
    }
  `)

  const image = data.allImageSharp.edges.find(
    edge => edge.node.fluid.originalName === imgName
  )
  if (!image) {
    return null
  }

  return (
    <GatsbyImage
      image={image.childImageSharp.gatsbyImageData}
      className={className}
      style={{ position: "relative", overflow: "hidden" }}
      objectFit="cover"
      objectPosition="50% 50%" />
  );
}

export default ImageComponent