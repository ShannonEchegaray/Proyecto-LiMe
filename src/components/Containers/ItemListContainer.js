import React, {useState, useEffect} from 'react';
import {data}  from "../../api/productos"
import { SpinnerCircular } from 'spinners-react';
import ItemList from "../ItemList";
import "./ItemListContainer.css"

const ItemListContainer = ({greetings}) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setProducts(data);
      setLoading(false);
    }, 2000)  
  }, [])
  

  return (
    <div className="fondoMain">
      <div className='filtrosContainer'>
        Hola
      </div>
      {loading
      ? <SpinnerCircular color='#741be1' secondaryColor="#fff200"/>
      : <ItemList items={products}/>}
    </div>
  )
}

export default ItemListContainer