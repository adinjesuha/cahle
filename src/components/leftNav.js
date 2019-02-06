import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import List from '../images/svg-icons/list-icon.svg'

const LeftNav = styled.div`
 ul{
    border: 1px solid var(--base-light);
    padding: 20px;

    li{
      padding: 10px 0;
      font-size: 14px;
    }
  }
  h2{
    background: var(--main-blue);
    margin: 0 !important;
    margin: 0 !important;
    padding: 20px;
    color: white !important;
    font-size: 14px !important;
    font-weight: 500 !important;
  }
`
const StyleLink = styled(Link)`
  color: var(--base-medium);
  font-weight: 500;
  font-size: 14px;
`

const leftNav = props => {
  console.log(props);
  const data = props.data
  const dataItems = data.map((items) => 
    <li>
      <StyleLink 
        to={items.link}
        activeStyle={{
          color: 'var(--base-light)',
        }}
      >
        {items.name}
      </StyleLink>
    </li>
  )
  return (
    <LeftNav>
      <h2><List style={{marginRight: '5px', paddingTop: '2px'}} />{props.title}</h2>
      <ul>
        {dataItems}
      </ul>
    </LeftNav>
  )
}

export default leftNav;