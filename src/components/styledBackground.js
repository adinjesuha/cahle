import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
// import BackgroundImage from 'gatsby-background-image'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BackgroundSection = ({ children, className }) => (
  <StaticQuery
    query={graphql`
      {
        desktop: file(relativePath: { eq: "congreso-hero.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 90, layout: FULL_WIDTH)
          }
        }
      }
    `}
    render={data => {
      const image = getImage(data.desktop.childImageSharp.gatsbyImageData)

      return (
        <Wrapper className={className}>
          <StyledGatsbyImage image={image} alt="Fondo" />
          <Content>{children}</Content>
        </Wrapper>
      )
    }}
  />
)


const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const StyledGatsbyImage = styled(GatsbyImage)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  img {
    object-fit: cover;
    object-position: center bottom;
  }
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
`

export default BackgroundSection