import React, {useEffect, useState} from 'react'
import "./ItemView.css"

const ItemView = ({item}) => {

    const [itemLink, setItemLink] = useState(item.image)
    const [mouseCoords, setMouseCoords] = useState({})
    const [target, setTarget] = useState(false)

    useEffect(() => {
        console.log(mouseCoords)
    }, [mouseCoords])

  return (
    <div className='containerItem'>
        <div className='ml-4 mt-4 p-1'>
            <div className='imgIco'>
                <img className='imgFit rounded' src={itemLink} alt="" />
            </div>
        </div>
        <div className='grow flex justify-center items-center'>
            <div className='flex justify-center items-center'>
                <div className='w-6/12'>
                    <img className='w-full' src={itemLink} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemView