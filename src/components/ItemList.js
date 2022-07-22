import React from 'react'
import Item from './Item'
import "./ItemList.css"

const ItemList = ({items}) => {
  return (
    <div className='itemListContainer'>{items.map((el, index) => <Item key={index} item={el} />)}</div>
  )
}

export default ItemList