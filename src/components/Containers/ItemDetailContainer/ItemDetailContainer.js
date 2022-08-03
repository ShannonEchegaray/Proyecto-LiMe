import React, {useState} from 'react'
import "./ItemDetailContainer.css"
import ItemDetail from "./ItemDetail"
import ItemView from './ItemView'

const ItemDetailContainer = () => {


  return (
    <div>
      <div className="fondoMain">
        <div className="cardItem">
          <ItemView />
          <ItemDetail />
        </div>
      </div>
    </div>
  )
}

export default ItemDetailContainer