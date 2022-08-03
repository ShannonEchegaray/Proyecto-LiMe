import React, {useEffect, useState} from 'react'
import "./ItemView.css"

const ItemView = () => {

    const [itemLink, setItemLink] = useState("https://static-cdn.jtvnw.net/jtv_user_pictures/4b807c04-3bf6-43eb-bedc-a7d5fcf706b6-profile_image-70x70.png")
    const [mouseCoords, setMouseCoords] = useState({})

    useEffect(() => {
        console.log(mouseCoords)
    }, [mouseCoords])

    const hoverImage = (e) => {
        const {top: Yoffset, left: Xoffset} = e.target.getBoundingClientRect()
        console.log(Yoffset, Xoffset)
        setMouseCoords({x: e.clientX, y: e.clientY})
    }

  return (
    <div className='containerItem'>
        <div className='ml-4 mt-4 p-1'>
            <div className='imgIco'>
                <img className='imgFluid' src={itemLink} alt="" />
            </div>
        </div>
        <div className='grow flex justify-center items-center'>
            <img onMouseMove={hoverImage} className='w-100' src={itemLink} alt="" />
        </div>
    </div>
  )
}

export default ItemView