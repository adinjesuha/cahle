import React from 'react'

import { Wrapper } from './styles'
import SubscriptionLink from './SubscriptionLink'

const Hotels = () => (
  <div>
    <Wrapper>
      <h2>Hotelería</h2>
      <p className="main-text navy">Les ofrecemos las siguientes opciones de alojamiento:</p>

      <div className="table">

        <div className="c-row header">
          <div className="cell">Hotel</div>
          <div className="cell">Teléfono</div>
          <div className="cell">Web</div>
        </div>

        <div className="c-row">
          <div className="cell" data-title="Hotel">
            <p>Hotel Florencia (Hotel Sede)</p>
          </div>
          <div className="cell" data-title="Teléfono">
            <p>2229-6900</p>
          </div>
          <div className="cell" data-title="Web">
            <a 
              href="https://www.florenciaplazahotel.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >Ir al sitio web</a>
          </div>
        </div> 

        <div className="c-row">
          <div className="cell" data-title="Hotel">
            <p>Hotel Minister</p>
          </div>
          <div className="cell" data-title="Teléfono">
            <p>2263-6464</p>
          </div>
          <div className="cell" data-title="Web">
            <a 
              href="http://www.ministerbusiness.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >Ir al sitio web</a>
          </div>
        </div>

        <div className="c-row">
          <div className="cell" data-title="Hotel">
            <p>Hotel Alameda</p>
          </div>
          <div className="cell" data-title="Teléfono">
            <p>9803-3532</p>
          </div>
          <div className="cell" data-title="Web">
            <a 
              href="https://www.facebook.com/HotelAlamedaHonduras/" 
              target="_blank" 
              rel="noopener noreferrer"
            >Ir al sitio web</a>
          </div>
        </div> 

        <div className="c-row">
          <div className="cell" data-title="Hotel">
            <p>Dolphin Hotel</p>
          </div>
          <div className="cell" data-title="Teléfono">
            <p>2225-2625</p>
          </div>
          <div className="cell" data-title="Web">
            <a 
              href="http://www.dolphin-hotels.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >Ir al sitio web</a>
          </div>
        </div> 
      </div>
    </Wrapper>
    <SubscriptionLink />
  </div>
)

export default Hotels