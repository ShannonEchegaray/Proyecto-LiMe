import React, { useEffect, useContext } from 'react'
import {cartContext} from './context/CartContext'
import CartItem from './CartItem'

const CartContainer = () => {

    const {items, fPrice} = useContext(cartContext)

    useEffect(() => {
      console.log(items)
    
    }, [])

  return (
    <div>
      {items.map(el => <CartItem key={el.id} item={el}/>)}
      <div className='border-y border-grey border-solid'>
        <p className="text-end">Total con envio $ {fPrice}</p>
      </div>
    </div>
  )
}

export default CartContainer