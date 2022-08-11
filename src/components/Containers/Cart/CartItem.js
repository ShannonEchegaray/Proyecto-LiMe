import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import CartCounter from "./CartCounter"
import { cartContext } from './context/CartContext'

const CartItem = ({item}) => {

    const {setQty, removerItem, changeStatus} = useContext(cartContext)

    const addProduct = (counter) => {
        setQty(item.id, counter)
    }

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
                {item.status === "CARRITO" && <CartCounter stock={item.stock} initial={item.qty} addProduct={addProduct}/>}
                <div className='flex-grow'>
                    $ {item.status === "CARRITO" ? item.price * item.qty : item.price}
                </div>
            </div>
        </div>
        <div>
            <ul className='flex'>
                <li className="mx-2">
                    <button onClick={() => removerItem(item.id)} className="link">Eliminar</button> 
                </li>
                <li className="mx-2">
                    <button onClick={() => changeStatus(item.id)} className="link">{item.status === "CARRITO" && "Guardar para despues"}</button> 
                </li>
            </ul>
        </div>
    </div>
  )
}

export default CartItem