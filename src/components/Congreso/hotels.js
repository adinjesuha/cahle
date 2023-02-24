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
            <p>Hotel Beverly Center (Hotel sede)</p>
          </div>
          <div className="cell" data-title="Teléfono">
            <p>9786-7811</p>
          </div>
          {/* <div className="cell" data-title="Web">
            <a 
              href="https://www.florenciaplazahotel.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >Ir al sitio web</a>
          </div> */}
        </div> 

        <div className="c-row">
          <div className="cell" data-title="Hotel">
            <p>Hotel Moslae</p>
            <p style={{marginTop: 0, fontSize: '12px'}}>(No acepta pagos con tarjeta, solo transferencia o efectivo)</p>
          </div>
          <div className="cell" data-title="Teléfono">
            <p>9451-8767</p>
          </div>
          {/* <div className="cell" data-title="Web">
            <a 
              href="http://www.ministerbusiness.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >Ir al sitio web</a>
          </div> */}
        </div>

        <div className="c-row">
          <div className="cell" data-title="Hotel">
            <p>Hotel Posada del Valle</p>
          </div>
          <div className="cell" data-title="Teléfono">
            <p>9852-9325</p>
            <p style={{marginTop: 0}}>2446-2183</p>
          </div>
          {/* <div className="cell" data-title="Web">
            <a 
              href="https://www.facebook.com/HotelAlamedaHonduras/" 
              target="_blank" 
              rel="noopener noreferrer"
            >Ir al sitio web</a>
          </div> */}
        </div> 
      </div>
    </Wrapper>
    <SubscriptionLink />
  </div>
)

export default Hotels