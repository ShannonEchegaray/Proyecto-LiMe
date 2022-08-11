import React from 'react'
import "./Item.css"
import {Link} from "react-router-dom"

const Item = ({item}) => {
  return (
      <div className='itemContainer'>
        <div className='itemImage'>
         <Link className='block w-full h-full overflow-hidden' to={`/category/${item.id}`}>
            <img className='imgFit' src={item.image} alt="" />
          </Link>
        </div>


        <div className='itemText p-2'>
            <Link style={{width: "100%", textDecoration: "none", color: "black"}} to={`/category/${item.id}`}>
              <p className='text-start text-lg'>{item.title}</p>
            </Link>
            <p className='text-start'>$ {item.price}</p>
        </div>
      </div>
  )
}

export default Item