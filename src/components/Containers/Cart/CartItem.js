import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import CartCounter from "./CartCounter"
import { cartContext } from './context/CartContext'

const CartItem = ({item}) => {

    const {setQty} = useContext(cartContext)

    const addProduct = (counter) => {
        setQty(item.id, counter)
    }

  return (
    <div className='border-y border-grey border-solid'>
        <div>
            <div className='flex justify-start items-center flex-nowrap'>
                <div className='w-12 h-12 mr-2'>
                    <Link to={`/category/${item.id}`}>
                        <img className='imgFluid' src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.0/mercadolibre/logo__large_plus.png" alt="" />
                    </Link>
                </div>
                <div className='w-6/12'>
                    <p className='text-start'>texto</p>
                    <p className='text-start'>Envio Gratis</p>
                </div>
                <CartCounter stock={item.stock} initial={item.qty} addProduct={addProduct}/>
                <div className='flex-grow'>
                    $ {item.price * item.qty}
                </div>
            </div>
        </div>
        <div>
            <ul className='flex'>
                <li className="mx-2">
                    <button className="link">Eliminar</button> 
                </li>
                <li className="mx-2">
                    <button className="link">Guardar para despues</button> 
                </li>
            </ul>
        </div>
    </div>
  )
}

export default CartItem