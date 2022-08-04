import React, { useEffect, useContext } from 'react'
import {cartContext} from '../ItemDetailContainer/context/CartContext'
import CartItem from './CartItem'

const CartContainer = () => {

    const {first} = useContext(cartContext)

    useEffect(() => {
      console.log(first)
    
    }, [])
    

  return (
    <div>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
    </div>
  )
}

export default CartContainer