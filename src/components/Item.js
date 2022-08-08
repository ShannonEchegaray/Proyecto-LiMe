import React from 'react'
import "./Item.css"
import {Link} from "react-router-dom"

const Item = ({item}) => {
  return (
      <div className='itemContainer'>
        <Link className='itemImage' to={`/category/${item.id}`}>
          <div ></div>
        </Link>
        <div className='itemText'>
            <Link style={{width: "100%", textDecoration: "none", color: "black"}} to={`/category/${item.id}`}>
              <p className='itemTitle'>{item.title}</p>
            </Link>
            <p className='itemDescripcion'>{item.description}</p>
        </div>
      </div>
  )
}

export default Item