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
          <div className="cell">Habitación Sencilla</div>
          <div className="cell">Habitación Doble</div>
          <div className="cell">Habitación Triple</div>
        </div>

        <div className="c-row">
          <div className="cell" data-title="Hotel">
            <p>Florencia Hotel (Hotel Sede)</p>
            <a 
              href="https://www.florenciaplazahotel.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >Ir al sitio web</a>
          </div>
          <div className="cell" data-title="Teléfono">
            <p>2229-6900</p>
          </div>
          <div className="cell" data-title="Habitación Sencilla">
            <p>$71.40</p>
          </div>
          <div className="cell" data-title="Habitación Doble">
            <p>$83.30</p>
          </div>
          <div className="cell" data-title="Habitación Triple">
            <p>$101.15</p>
          </div>
        </div> 

        <div className="c-row">
          <div className="cell" data-title="Hotel">
            <p>Minister Hotel</p>
            <a 
              href="http://www.ministerbusiness.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >Ir al sitio web</a>
          </div>
          <div className="cell" data-title="Teléfono">
            <p>2263-6464</p>
          </div>
          <div className="cell" data-title="Habitación Sencilla">
            <p>$77.35</p>
          </div>
          <div className="cell" data-title="Habitación Doble">
            <p>$89.25</p>
          </div>
        </div> 

        <div className="c-row">
          <div className="cell" data-title="Hotel">
            <p>LQ Hotel</p>
            <a 
              href="https://www.wyndhamhotels.com/laquinta/tegucigalpa-honduras/lq-hotel-tegucigalpa/overview" 
              target="_blank" 
              rel="noopener noreferrer"
            >Ir al sitio web</a>
          </div>
          <div className="cell" data-title="Teléfono">
            <p>2202-5000</p>
          </div>
          <div className="cell" data-title="Habitación Sencilla">
            <p>$71.40</p>
          </div>
          <div className="cell" data-title="Habitación Doble">
            <p>$83.30</p>
          </div>
        </div> 

        <div className="c-row">
          <div className="cell" data-title="Hotel">
            <p>Hotel Alameda</p>
            <a 
              href="https://www.facebook.com/HotelAlamedaHonduras/" 
              target="_blank" 
              rel="noopener noreferrer"
            >Ir al sitio web</a>
          </div>
          <div className="cell" data-title="Teléfono">
            <p>2232-6920</p>
          </div>
          <div className="cell" data-title="Habitación Sencilla">
            <p>$66.47</p>
          </div>
          <div className="cell" data-title="Habitación Doble">
            <p>$75.72</p>
          </div>
          <div className="cell" data-title="Habitación Triple">
            <p>$78.60</p>
          </div>
        </div> 

        <div className="c-row">
          <div className="cell" data-title="Hotel">
            <p>Dolphin Hotel</p>
            <a 
              href="http://www.dolphin-hotels.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >Ir al sitio web</a>
          </div>
          <div className="cell" data-title="Teléfono">
            <p>2225-2625</p>
          </div>
          <div className="cell" data-title="Habitación Sencilla">
            <p>$49.00</p>
          </div>
          <div className="cell" data-title="Habitación Doble">
            <p>$60.00</p>
          </div>
          <div className="cell" data-title="Habitación Triple">
            <p>$70.00</p>
          </div>
        </div> 

      </div>

      <h3>Observaciones:</h3>
      <ul className="lists">
        <li>Todos los precios de las habitaciones incluyen ISV.</li>
        <li>Hotel Minister y La Quinta cobran un recargo de <strong>$11.90</strong> por persona extra en habitación.</li>
      </ul>

    </Wrapper>

    <SubscriptionLink />
  </div>
)

export default Hotels