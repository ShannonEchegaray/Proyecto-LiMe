import React, { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({stock, initial, addProducto}) => {
    const [selection, setSelection] = useState(initial);
    const [input, setInput] = useState("")
    const [boton, setBoton] = useState(false)
    const [boton2, setBoton2] = useState(false)

    console.log(stock)

    const select = (number) => {
        setSelection(number);
        setBoton(false)
        setBoton2(null)
        setInput("")
    }

    const newButton = (e) => {
        setBoton2(!boton2)
        setInput("")
    }

    return (
        <div className='relative'>
            <button className='quantityButton' onClick={() => setBoton(!boton)}>Cantidad: <span className="font-medium">{selection || initial} {selection > 1 ? "unidades" : "unidad"}</span></button>
            <ul style={{ display: boton ? "block" : "none"}} className="listaCantidades absolute top-100">
                {Array.from(Array(stock), (v, index) => {
                    if (index + 1 < 7) {
                        return <li key={index} className={`itemList ${(selection == index + 1) && !boton2 && "border-l-2 border-solid border-blue-400"}`} onClick={() => select(index + 1)}>{index + 1} {index + 1 == 1 ? "unidad" : "unidades"}</li>
                    } else if(index + 1 >= 8){
                        return null
                    } else {
                        return <li key={index}>{boton2 
                            ? (<form className="w-full p-2 border-l-2 border-solid border-blue-400">
                                <label className='w-9/12 text-xs' htmlFor="cantidad">Cantidad:</label>
                                
                                <div className='w-full relative'>
                                    <input className='w-full selectQuantity p-1' value={input} onChange={(e) => {
                                        !isNaN(Number(e.target.value)) && setInput(Number(e.target.value)) 
                                        }} type="text" pattern="[0-9]+" />
                                    <button className='bg-blue-600 text-white absolute right-1 inset-y-1 rounded text-sm p-0.5' onClick={() => select(input)}>Aplicar</button>
                                </div>
                                
                                </form> )
                            : <button className='itemList text-left' disabled={input.length == 0 ? false : true} onClick={(e) => {newButton(e)}}>Comprar mas de {index} unidades</button>}</li>
                    }
                })}
            </ul>
            <div className='mt-3 flex flex-col justify-content-center'>
                <button
                 className="w-10/12 my-1 font-medium py-1.5 block text-center text-white rounded bg-blue-600"
                 onClick={() => addProducto(selection)}
                >Comprar</button>
                <button 
                 className="w-10/12 my-1 font-medium py-1.5 block text-center rounded bg-blue-100 text-blue-600"
                 onClick={() => addProducto(selection)}
                 >Agregar al Carrito</button>
            </div>
        </div>

    )
}

export default ItemCount