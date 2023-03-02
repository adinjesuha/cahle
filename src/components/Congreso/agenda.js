import React from 'react'

import { Wrapper } from './styles'
import SubscriptionLink from './SubscriptionLink'

import AgendaPreliminar from '../../images/agenda-preliminar.png'

const Agenda = () => (
  <div>
    <Wrapper>
      <img src={AgendaPreliminar} alt="Agafam Congreso de la leche 2020"/>
    </Wrapper>
    <SubscriptionLink />
  </div>
)

export default Agenda