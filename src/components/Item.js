import React from 'react'
import "./Item.css"
import {Link} from "react-router-dom"

const Item = () => {
  return (
      <div className='itemContainer'>
        <Link className='itemImage' to="/category/id">
          <div ></div>
        </Link>
        <div className='itemText'>
            <Link style={{width: "100%", textDecoration: "none", color: "black"}} to="/category/id">
              <p className='itemTitle'>Item</p>
            </Link>
            <p className='itemDescripcion'>Descripcion</p>
        </div>
      </div>
  )
}

export default Item