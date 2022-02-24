import React from 'react'

import { Wrapper } from './styles'
import SubscriptionLink from './SubscriptionLink'
import AgafamMap from '../../images/agafam.jpg'

const Practicalinfo = () => (
  <div>
    <Wrapper>
      <h2>Información Práctica</h2>
      <h3>Sede</h3>
      <p className="main-text navy">El VIII Congreso Nacional de la Leche tendrá lugar en las instalaciones de la Asociación de Ganaderos y Agricultores de Francisco Morazán (AGAFAM) en la ciudad de Tegucigalpa los días 28 y 29 de abril del 2022 con la participación destacada de diferentes empresas y academia. Además, contará con transmisión en vivo de las conferencias.</p>
      <p className="main-text navy">Como siempre, contará con la participación de los principales referentes de la cadena láctea del continente americano y de otras partes del mundo.</p>
      <h3>¿Cómo llegar?</h3>
      <p className="main-text navy">Predio ferial de AGAFAM, Tegucigalpa, Fco. Morazán.</p>
      <a href="https://goo.gl/maps/1CF5aAzJPrFZgRho6" target="_blank" rel="noopener noreferrer">
        <img src={AgafamMap} alt="Agafam Congreso de la leche 2020"/>
      </a>
      <p className="main-text navy">Es el principal predio ferial de la ciudad para la realización de exposiciones, ferias y demás eventos, con una ubicación privilegiada en el centro del país.</p>
      <h3>Atracciones</h3>
      <a 
        href="https://www.xplorhonduras.com/tegucigalpa-honduras/"
        target="_blank" 
        rel="noopener noreferrer"
      >Ver más</a>
    </Wrapper>
    <SubscriptionLink />
  </div>
)

export default Practicalinfo