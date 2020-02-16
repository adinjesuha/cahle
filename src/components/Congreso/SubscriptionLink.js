import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledButtonCTA = styled(Link)`
  text-align: center;
  display: block;
  margin: 0 auto;
  max-width: 360px;
  background-color: var(--oxford-blue);
  padding: 15px 30px;
  border-radius: 4px;
  color: white;
`

const SubscriptionLink = () => <StyledButtonCTA to="/inscripciones-congreso-2020">Inscribete Ya!</StyledButtonCTA>

export default SubscriptionLink
