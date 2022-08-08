import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import "./ItemDetailContainer.css"
import ItemDetail from "./ItemDetail"
import { SpinnerCircular } from 'spinners-react';
import ItemView from './ItemView'
import {data} from "../../../api/productos"

const ItemDetailContainer = () => {

  const {id} = useParams()

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {

      setLoading(true);
      setProduct(data.find(el => el.id == id));
      setLoading(false);
    }, 2000)  
  }, [])

  console.log(id)

  return (
      <div className="fondoMain">
        {
          loading
          ? <SpinnerCircular color='#741be1' secondaryColor="#fff200"/>
          : (
            <div className="cardItem">
              <ItemView item={product}/>
              <ItemDetail item={product}/>
            </div>
          )
        }
        
      </div>
  )
}

export default ItemDetailContainer