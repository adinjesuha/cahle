import React from 'react'



const ListItems = props => {
  const items = props.items
  const listItems = items.map((items) =>
    <li>{items}</li>
  );
  return(
    <ul>{listItems}</ul>                            
  )
}

export default ListItems