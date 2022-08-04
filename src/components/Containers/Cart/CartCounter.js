import React, {useState} from 'react'

const CartCounter = ({stock}) => {

    const [counter, setCounter] = useState(0)

    const addCounter = () => {
        setCounter(counter + 1)
    }

    const substractCounter = () => {
        setCounter(counter - 1)
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