import React from 'react'
import CartCounter from "./CartCounter"

const CartItem = ({item}) => {
  return (
    <div className='border-y border-grey border-solid'>
        <div>
            <div className='flex justify-start items-center'>
                <div className='w-12 h-12 mr-2'>
                    <img className='imgFluid' src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.0/mercadolibre/logo__large_plus.png" alt="" />
                </div>
                <div className='w-6/12'>
                    <p className='text-start'>texto</p>
                    <p className='text-start'>Envio Gratis</p>
                </div>
                <CartCounter stock={20} />
            </div>
            <div>
                {item.price}
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default CartItem