import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

import { NuestraGente, asociados, legislacion, documentacion, congreso } from '../utils/menuConfig'

const Container = styled.div`
  min-height: 100%;
  padding: 50px 20px;
  text-align: center;
`

const AccordionWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  .title {
    padding: 20px 0 10px;
    cursor: pointer;
    transform: translate3d(0, 0, 0);
    transition: color 0.3s ease;
    color: var(--oxford-blue);
    position: relative;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
    margin-bottom: -1px;
    text-align: left;
    text-transform: capitalize;
    &::after {
      content: '+';
      font-weight: bold;
      color: var(--active);
      transition: transform 0.5s ease-in-out;
      position: absolute;
      right: 15px;
    }

    &.is-expanded {
      transition: color 0.3s ease;
      color: var(--active);
      &::after {
        content: '-';
        transform: rotate(-360deg);
      }
    }
  }
  .content {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.5s;
    margin: 0;
    padding: 0 20px;
    /* border: solid 1px #eeeeee; */
    background: var(--oxford-blue);
    border-radius: 4px;
    div {
      padding: 30px 0;
      margin: 0;
      opacity: 0;
      transition: 0.5s;
    }
    &.is-expanded {
      max-height: 500px;
      overflow: hidden;
      div {
        opacity: 1;
      }
    }
    .linkItem {
      text-align: left;
      padding: 15px 0;
      a {
        color: white;
        font-size: 14px;
        text-transform: capitalize;
      }
    }
  }
`

const CustomLink = styled(Link)`
  text-align: left;
  color: var(--oxford-blue);
  display: inline-block;
  width: 100%;
  padding: 20px 0 10px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: capitalize;
`

const AccordionSection = props => {
  const { title, expand, onClick, content } = props
  return (
    <div>
      <dt className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>
        {title}
      </dt>
      <dd
        className={expand ? 'content is-expanded' : 'content'}
        onClick={onClick}
      >
        {content.map((nav, index) => (
          <div className="linkItem" key={index}>
            <Link to={nav.link}>{nav.name}</Link>
          </div>
        ))}
      </dd>
    </div>
  )
}

class Accordion extends Component {
  state = {
    block1: false,
    block2: false,
    block3: false,
  }

  toggle = index => () => {
    this.setState({
      [`block${index}`]: !this.state[`block${index}`],
    })
  }

  render() {
    const accordionList = [
      // {
      //   title: 'Congreso 2025',
      //   content: congreso,
      // },
      {
        title: 'Nuestra Gente',
        content: NuestraGente,
      },
      {
        title: 'Asociados',
        content: asociados,
      },
      {
        title: 'Legislación',
        content: legislacion,
      },
      {
        title: 'Documentación',
        content: documentacion,
      },
    ]

    return (
      <Container>
        <CustomLink to="/acerca-de-cahle">Acerca de CAHLE</CustomLink>
        <AccordionWrapper>
          {accordionList.map((item, index) => (
            <AccordionSection
              title={item.title}
              content={item.content}
              onClick={this.toggle(index + 1)}
              expand={this.state[`block${index + 1}`]}
              key={item.index}
            />
          ))}
        </AccordionWrapper>
        <CustomLink href="http://assets.ctfassets.net/zg4fwo9e8dmk/4BMt0BcRRRmgqhOSv2Pxp3/12fe22e0792f0d1d5531101f4dbb8faf/Leche_en_cifras.pdf" target="_blank" rel="noopener noreferrer">Leche en Cifras</CustomLink>
        <CustomLink to="/noticias-y-eventos/">Noticias y Eventos</CustomLink>
      </Container>
    )
  }
}

export default Accordion
