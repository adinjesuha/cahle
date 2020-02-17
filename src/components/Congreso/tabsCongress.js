import React from 'react'

import Tabs from '../Tabs/tabs'
import AboutCongress from './aboutCongress'
import Practicalinfo from './practicalinfo'
import Hotels from './hotels'
import Agenda from './agenda'

const TabsCongress = () => (
  <Tabs>
    <div label="Sobre el Congreso">
      <AboutCongress/>
    </div>
    <div label="Información Práctica">
      <Practicalinfo />
    </div>
    <div label="Hotelería">
      <Hotels />
    </div>
    <div label="Agenda">
      <Agenda />
    </div>
  </Tabs>
)

export default TabsCongress