import React, {useContext} from 'react'
import { cartContext } from './context/CartContext'
import CartItem from './CartItem'

const WishlistContainer = () => {

  const {items, fPrice} = useContext(cartContext)


  return (
    <div>
      {items.map(el => el.status === "GUARDADOS" && <CartItem key={el.id} item={el}/>)}
    </div>
  )
}

export default WishlistContainer