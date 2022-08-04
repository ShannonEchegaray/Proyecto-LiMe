import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import "./Cart.css"
import CartContainer from './Containers/Cart/CartContainer'
import WishlistContainer from "./Containers/Cart/WishlistContainer"


const Cart = () => {

  return (
  <div className="fondoMain">
    <div className="cartContainer">
      
      <ul className='border-b border-solid border-gray w-100 h-auto flex justify-start'>
        <li className='px-4 pb-2'><Link to="/cart">Carrito (x)</Link></li>
        <li className='px-4 pb-2'><Link to="/cart/saved">Guardados (x)</Link></li>
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