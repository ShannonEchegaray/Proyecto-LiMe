import React, { useContext } from 'react'
import { cartContext } from './context/CartContext'
import {Link} from "react-router-dom"

const CartItem = ({item}) => {

    const {removerItem} = useContext(cartContext)

  return (
    <div className='border-y border-grey border-solid'>
        <div>
            <div className='flex justify-start items-center flex-nowrap'>
                <div className='w-12 h-20 mr-2'>
                    <Link to={`/category/${item.id}`}>
                        <img className='imgFit' src={item.image} alt="" />
                    </Link>
                </div>
                <div className='w-6/12'>
                    <Link to={`/category/${item.id}`}>
                        <p className='text-start'>{item.title}</p>
                    </Link>
                    <p className='text-start'>{item.status === "CARRITO" && "Envio Gratis"}</p>
                </div>
                <div className='flex-grow'>
                    $ {item.price}
                </div>
            </div>
        </div>
        <div>
            <ul className='flex'>
                <li className="mx-2">
                    <button onClick={() => removerItem(item.id)} className="link">Eliminar</button> 
                </li>
            </ul>
        </div>
    </div>
  )
}

export default CartItem