import React from 'react'

import GMap from '../GMap'
import { Wrapper } from './styles'
import SubscriptionLink from './SubscriptionLink'

const Practicalinfo = () => (
  <div>
    <Wrapper>
      <h2>Información Práctica</h2>
      <h3>Sede</h3>
      <p className="main-text navy">El VIII Congreso Nacional de la Leche tendrá lugar en las instalaciones de la Asociación de Ganaderos y Agricultores de Francisco Morazán (AGAFAM) en la ciudad de Tegucigalpa del 14 al 16 de mayo del 2020 con la participación destacada de diferentes empresas y academia. Además, contará con transmisión en vivo de las conferencias.</p>
      <h3>¿Cómo Llegar?</h3>
      <p className="main-text navy">Predio ferial de AGAFAM, Tegucigalpa, Fco. Morazán.</p>
      <GMap 
        center= {{
          lat: 14.0738976,
          lng: -87.1585019
        }}
        zoom={16}
      />
      <p className="main-text navy">Es el principal predio ferial de la ciudad para la realización de exposiciones, ferias y demás eventos, con una ubicación privilegiada en el centro del país.</p>
    </Wrapper>
    <SubscriptionLink />
  </div>
)

export default Practicalinfo