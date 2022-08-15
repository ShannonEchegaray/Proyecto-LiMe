import React, { useContext } from 'react'
import {cartContext} from './context/CartContext'
import {Link} from "react-router-dom"
import CartItem from './CartItem'

const CartContainer = () => {

    const {items, fPrice, limpiar} = useContext(cartContext)

  return (
    <div>
      {items.map(el => <CartItem key={el.id} item={el}/>)}
      {fPrice !== 0 
      ? (
      <div className='py-5 border-y border-grey border-solid flex flex-col items-end'>
        <p className=" my-2 font-medium">Total con envio     ${fPrice}</p>
        <button className='text-sm text-white rounded bg-blue-500 p-2 mb-2' onClick={() => limpiar()}>Limpiar Carrito</button>
        <Link to="/form" className='text-sm text-white rounded bg-blue-500 p-2'>Continuar compra</Link>
      </div>
      )
      :
      (<p className='text-center'>Aqui no hay compras, puede hacer sus compras <Link className='link' to="/">aqui</Link></p>)}
      
    </div>
  )
}

export default CartContainer