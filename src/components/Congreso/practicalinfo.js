import React from 'react'

import { Wrapper } from './styles'
import SubscriptionLink from './SubscriptionLink'
import SagoMap from '../../images/sagoMap.png'

const Practicalinfo = () => (
  <div>
    <Wrapper>
      <h2>Información Práctica</h2>
      <h3>Sede</h3>
      <p className="main-text navy">El IX Congreso Nacional de la Leche tendrá lugar en las instalaciones de la Asociación de Ganaderos y Agricultores de Olanchito (SAGO) en la ciudad cívica de Olanchito, Yoro los días 04 y 05 de mayo del 2023 con la participación destacada de diferentes empresas y academia. Además, contará con transmisión en vivo de las conferencias.</p>
      <p className="main-text navy">Como siempre, contará con la participación de los principales referentes de la cadena láctea del continente americano y de otras partes del mundo.</p>
      <h3>¿Cómo llegar?</h3>
      <a href="https://goo.gl/maps/cPySNWrY8C6SacBf7" target="_blank" rel="noopener noreferrer">
        <img src={SagoMap} alt="Agafam Congreso de la leche 2020"/>
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