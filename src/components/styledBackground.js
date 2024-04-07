import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ children, className }) => (
  <StaticQuery
    query={graphql`{
  desktop: file(relativePath: {eq: "congreso-hero.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: FULL_WIDTH)
    }
  }
}`}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.gatsbyImageData
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;
`

export default StyledBackgroundSection