import React from 'react'
import {useParams} from "react-router-dom"

const Form = () => {

    const {id} = useParams()

    console.log(id)

  return (
    <div>
        {
            id 
            ? (
                <p>Estas en una compra Individual</p>
            ) 
            : (
                <p>Estas en una compra grupal</p>
            )
        }
    </div>
  )
}

export default Form