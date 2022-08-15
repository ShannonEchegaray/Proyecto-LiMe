import React, {useEffect, useState} from 'react'

const CartCounter = ({stock, initial, addProduct}) => {

    const [counter, setCounter] = useState(initial)

    useEffect(() => {
      addProduct(counter)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [counter])
        

    const addCounter = () => {
        counter >= stock ? console.log("La cantidad no puede superar al stock") : setCounter(counter + 1)
    }

    const substractCounter = () => {
        counter <= 1 ? console.log("Error, no podes tener cantidad 0 o negativo") : setCounter(counter - 1);
    }
  return (
    <div>
        <div className='p-2 rounded border-gray border-solid border'>
            <button className='text-blue-600 text-lg' onClick={substractCounter}>-</button>
            <span className='w-12 inline-block'>{counter}</span>
            <button className='text-blue-600 text-lg' onClick={addCounter}>+</button>
        </div>
        <p className='text-sm text-gray-400'>{stock} {stock <= 1 ? "disponible" : "diponibles"}</p>
    </div>
  )
}

export default CartCounter