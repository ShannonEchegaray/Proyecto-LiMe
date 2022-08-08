import React, {createContext, useState, useEffect} from 'react'

export const cartContext = createContext()
const {Provider} = cartContext

const CartContext = ({children}) => {

  const [items, setItems] = useState([])
  const [fPrice, setFPrice] = useState(0)

  useEffect(() => {
    setFPrice(items.reduce((acc, el) => acc + el.qty * el.price, 0))
  }, [items])
  console.log(fPrice)
  
  const addCart = (item) => {
    let {id, qty, stock} = item;
    if(estaEnLista(id)){
      let cart = [...items]
      let cartItem = cart.find(el => el.id === id);
      cartItem.qty += qty;
      cart[cart.indexOf(cartItem)] = cartItem;
      cartItem.qty <= stock? setItems(cart): console.log("La cantidad ingresada supera el stock")
    } else {
      setItems([...items, item])
    }
  }

  const setQty = (id, qty) => {
    let cart = [...items]
    let cartItem = cart.find(el => el.id === id);
    cartItem.qty = qty;
    cart[cart.indexOf(cartItem)] = cartItem;
    setItems(cart)
  }

  const removerItem = (itemId) => {
    setItems([...items].filter(el => el.id != itemId))
  }

  const limpiar = () => {
    setItems([])
  }

  const calcularTotal = () => {
    return items.reduce((acc, el) => acc + (el.qty * el.price), 0)
  }

  const articulosObtenidos = () => {
    return items.reduce((acc, el) => acc + el.qty, 0);
  }

  const estaEnLista = (id) => {
    return items.some(el => el.id == id)
  }

  return (
    <Provider value={{items, fPrice, setQty, addCart}}>
      {children}
    </Provider>
  )
}

export default CartContext