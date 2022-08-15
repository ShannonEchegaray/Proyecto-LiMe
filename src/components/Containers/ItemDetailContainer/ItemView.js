import React from 'react'
import "./ItemView.css"

const ItemView = ({item}) => {

  return (
    <div className='containerItem'>
        <div className='ml-4 mt-4 p-1'>
            <div className='imgIco'>
                <img className='imgFit rounded' src={item.image} alt="" />
            </div>
        </div>
        <div className='grow flex justify-center items-center'>
            <div className='flex justify-center items-center'>
                <div className='w-6/12'>
                    <img className='w-full' src={item.image} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemView