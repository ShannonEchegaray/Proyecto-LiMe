import React, {useState} from 'react'
import "./ItemDetailContainer.css"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {


  return (
    <div>
      <div className="fondoMain">
        <div className="cardItem">
          <div className='containerItem'>
            
          </div>
          <ItemDetail />
        </div>
      </div>
    </div>
  )
}

export default ItemDetailContainer