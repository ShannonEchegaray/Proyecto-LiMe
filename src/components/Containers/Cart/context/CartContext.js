import React, {createContext, useState, useEffect} from 'react'

export const cartContext = createContext()
const {Provider} = cartContext

const CartContext = ({children}) => {

  const [items, setItems] = useState([])
  const [fPrice, setFPrice] = useState(0)
  const [nop, setNop] = useState(0)

  useEffect(() => {
    setFPrice(calcularTotal())
    setNop(articulosObtenidos())
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
    setItems(items.filter(el => el.id != itemId))
  }

  const limpiar = () => {
    setItems([])
  }

  const changeStatus = (id) => {
    let cart = [...items]
    let cartItem = cart.find(el => el.id === id);
    cartItem.status = cartItem.status === "CARRITO" ? "GUARDADOS" : "CARRITO"
    cartItem.qty = cartItem.status === "GUARDADOS" && 0;
    cart[cart.indexOf(cartItem)] = cartItem;
    setItems(cart)
  }

  // Funciones internas
  const calcularTotal = () => {
    return items.reduce((acc, el) => el.status === "CARRITO" ? acc + el.qty * el.price : acc, 0)
  }

  const articulosObtenidos = () => {
    return items.reduce((acc, el) => el.status === "CARRITO" ? acc + el.qty : acc, 0);
  }

  const estaEnLista = (id) => {
    return items.some(el => el.id == id)
  }

  const values = {
    items,
    fPrice,
    nop,
    addCart,
    setQty,
    removerItem,
    limpiar,
    changeStatus
  }

  return (
    <Provider value={{...values}}>
      {children}
    </Provider>
  )
}

export default CartContext