import React, {useContext} from 'react'
import { cartContext } from './context/CartContext'
import { Route, Routes, Link } from 'react-router-dom'
import "./Cart.css"
import CartContainer from './CartContainer'
import WishlistContainer from "./WishlistContainer"


const Cart = () => {

  const {nop, nos} = useContext(cartContext)

  return (
  <div className="fondoMain">
    <div className="cartContainer">
      
      <ul className='border-b border-solid border-gray w-100 h-auto flex justify-start'>
        <li className='px-4 pb-2'><Link to="/cart">Carrito ({nop})</Link></li>
        <li className='px-4 pb-2'><Link to="/cart/saved">Guardados ({nos})</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<CartContainer />} />
        <Route path="/saved" element={<WishlistContainer />} />
      </Routes>
     
    </div>
  </div>
  )
}

export default Cart