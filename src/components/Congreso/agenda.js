import React from 'react'

import { Wrapper } from './styles'
import SubscriptionLink from './SubscriptionLink'

import Cuadrifolio1 from '../../images/cuadrifolio-01.png'
import Cuadrifolio2 from '../../images/cuadrifolio-02.png'

const Agenda = () => (
  <div>
    <Wrapper>
      <img src={Cuadrifolio1} alt="Agafam Congreso de la leche 2020"/>
      <img src={Cuadrifolio2} alt="Agafam Congreso de la leche 2020"/>
    </Wrapper>
    <SubscriptionLink />
  </div>
)

export default Agenda