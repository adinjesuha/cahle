import React from 'react'

import { Wrapper } from './styles'
import SubscriptionLink from './SubscriptionLink'
import AgafamMap from '../../images/agafam.jpg'

const Practicalinfo = () => (
  <div>
    <Wrapper>
      <h2>Información Práctica</h2>
      <h3>Sede</h3>
      <p className="main-text navy">El VIII Congreso Nacional de la Leche tendrá lugar en las instalaciones de la Asociación de Ganaderos y Agricultores de Francisco Morazán (AGAFAM) en la ciudad de Tegucigalpa del 14 al 16 de mayo del 2020 con la participación destacada de diferentes empresas y academia. Además, contará con transmisión en vivo de las conferencias.</p>
      <h3>¿Cómo llegar?</h3>
      <p className="main-text navy">Predio ferial de AGAFAM, Tegucigalpa, Fco. Morazán.</p>
      <a href="https://goo.gl/maps/1CF5aAzJPrFZgRho6" target="_blank" rel="noopener noreferrer">
        <img src={AgafamMap} alt="Agafam Congreso de la leche 2020"/>
      </a>
      <p className="main-text navy">Es el principal predio ferial de la ciudad para la realización de exposiciones, ferias y demás eventos, con una ubicación privilegiada en el centro del país.</p>
    </Wrapper>
  </div>
)

export default Practicalinfo