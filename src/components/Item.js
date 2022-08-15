import React, {useContext} from 'react'
import { cartContext } from './Containers/Cart/context/CartContext';
import "./Item.css"
import {Link} from "react-router-dom"
import FavoriteIcon from '@mui/icons-material/Favorite';

const Item = ({item}) => {

  const {isInSavedCart, addSavedCart, removeSavedCart} = useContext(cartContext)

  return (
      <div className='itemContainer'>
        <div className='corazon' onClick={() => isInSavedCart(item.id) ? removeSavedCart(item.id) : addSavedCart(item)}>
          <FavoriteIcon sx={ isInSavedCart(item.id) ? {color : "red"} : {color : "whitesmoke"} } />
        </div>
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