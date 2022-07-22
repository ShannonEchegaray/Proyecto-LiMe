import React, { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({stock, initial}) => {
    const [selection, setSelection] = useState(null);
    const [input, setInput] = useState(0)
    const [boton, setBoton] = useState(false)
    const [boton2, setBoton2] = useState(false)

    console.log(input)

    const select = (number) => {
        setSelection(number);
        setBoton(false)
    }

    const newButton = (e) => {
        setBoton2(!boton2)
        setInput(null)
    }

    return (
        <>
            <button onClick={() => setBoton(!boton)}>Cantidad: {selection || initial}</button>
            <ul style={{ display: boton ? "block" : "none"}} className="listaCantidades">
                {Array.from(Array(stock), (v, index) => {
                    if (index + 1 < 7) {
                        return <li key={index} className='itemList' onClick={() => select(index + 1)}>{index + 1} {index + 1 == 1 ? "unidad" : "unidades"}</li>
                    } else if(index + 1 >= 8){
                        return null
                    } else {
                        return <li key={index}>{boton2 
                            ? (<div>
                                <label htmlFor="cantidad">
                                    <input onChange={(e) => setInput(e.target.value)} type="text"/>
                                </label>
                                <button onClick={() => select(input)}></button>
                                </div> )
                            : <button onClick={(e) => {newButton(e)}}>Comprar mas de {index} unidades</button>}</li>
                    }
                })}
            </ul>
        </>

    )
}

export default ItemCount