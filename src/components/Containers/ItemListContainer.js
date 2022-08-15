import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import { SpinnerCircular } from 'spinners-react';
import ItemList from "../ItemList";
import "./ItemListContainer.css"
import {getCategory, getItems} from "../../api/firebase"

const ItemListContainer = ({greetings}) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const {category} = useParams()

  useEffect(() => {
    setLoading(true);
    const result = category ? getCategory(category) : getItems()
    result.then(data => setProducts(data));
    setLoading(false);
  }, [category])
  

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