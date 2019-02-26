import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { acercaDe, asociados, documentacion } from '../utils/menuConfig'
import Logo from '../images/svg-icons/logo.svg'

const Container = styled.div`
  min-height: 100%;
  padding:  0 20px;
  text-align: center;
  h1 {
    text-align: left;
    color: white;
    margin-top: 16px;
  }
  
`

const AccordionWrapper = styled.dl`
  margin: 0 auto;
  margin-top: 40px;
  width: 100%;
  .title {
    padding: 20px 30px 20px 0;
    cursor: pointer;
    transform: translate3d(0, 0, 0);
    transition: color 0.3s ease;
    color: white;
    position: relative;
    font-size: 16px;
    margin-bottom: -1px;
    /* border-bottom: 1px solid red; */
    text-align: left;
    text-transform: uppercase;
    font-weight: bold;
    &::after {
      content: "+";
      font-weight: bold;
      color: var(--green);
      transition: transform .5s ease-in-out;
      position: absolute;
      right: 15px;
      font-family: monospace;
    }

    &.is-expanded {
      transition: color 0.3s ease;
      color: var(--green);
      &::after {
        content: "-";
        transform: rotate(-360deg);
      }
    }
  }
  .content {
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s;
    margin: 0;
    padding: 0 30px;
    /* border: solid 1px #eeeeee; */
    background: white;
    border-radius: 4px;
    div {
      padding: 30px 0;
      margin: 0;
      opacity: 0;
      transition: .5s;
    }
    &.is-expanded {
      max-height: 500px;
      overflow: hidden;
      div {
        opacity: 1;
      }
    }
    .linkItem{
      text-align: left;
      padding: 15px 0;
      a{
        color: var(--blue);
        font-size: 14px;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
`

const LinkOut = styled('Link')`
  color: white
`

const AccordionSection = props => {
  const { title, expand, onClick, content } = props;
  return (
    <div>
      <dt className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>
        {title}
      </dt>
      <dd className={expand ? 'content is-expanded' : 'content'} onClick={onClick}>
        {content.map(nav => (
          <div className="linkItem" key={nav.title}>
            <Link to={nav.link}>{nav.name}</Link>
          </div>
        ))}
      </dd>
    </div>
  );   
}

class Accordion extends Component {  

  state = {
    block1: false,
    block2: false,
    block3: false,
  };
  
  toggle = (index) => () => {
    this.setState({ 
      [`block${index}`] : !this.state[`block${index}`] 
    });
  }
  
  render() {
    const accordionList = [
      { 
        title: 'Acerca de CAHLE', 
        content: acercaDe
      }, 
      { 
        title: 'Asociados',
        content: asociados
      }, 
      { 
        title: 'Documentación',
        content: documentacion
      }
    ];
    
    return <Container>
      <h1><Logo /></h1>
      <AccordionWrapper>
        {
          accordionList.map((item, index) => (
            <AccordionSection 
              title={item.title} 
              content={item.content}
              onClick={this.toggle(index + 1)} 
              expand={this.state[`block${index+1}`]}
              key={index}
            />
          ))
        }
      </AccordionWrapper>
      <Link 
        to="/perfil-comercial" 
        style={{
          textAlign: 'left',
          color: 'white',
          display: 'inline-block',
          width: '100%',
          padding: '20px 30px 20px 0', 
          fontSize: '18px',
          textTransform: 'uppercase',
          fontWeight: 'bold'
        }}>
          Perfil Comercial
        </Link>
        <Link 
        to="/noticias-y-eventos" 
        style={{
          textAlign: 'left',
          color: 'white',
          display: 'inline-block',
          width: '100%',
          padding: '20px 30px 20px 0',
          fontSize: '18px',
          textTransform: 'uppercase',
          fontWeight: 'bold'
        }}>
          Noticias y Eventos
        </Link>
    </Container>;
  }
}


export default Accordion;