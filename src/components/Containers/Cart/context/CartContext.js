import React, {createContext, useState, useEffect} from 'react'

export const cartContext = createContext()
const {Provider} = cartContext

const CartContext = ({children}) => {

  const [item, setItem] = useState({})
  const [savedItems, setSavedItems] = useState(JSON.parse(localStorage.getItem("savedItems")) || [])
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")) || [])
  const [fPrice, setFPrice] = useState(0)
  const [nop, setNop] = useState(0)
  const [nos, setNos] = useState(0)

  useEffect(() => {
    setFPrice(calcularTotal())
    setNop(articulosObtenidos())
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  useEffect(() => {
    setNos(articulosGuardados())
    localStorage.setItem("savedItems", JSON.stringify(savedItems))
  }, [savedItems])

  //Wishlist Function's

  const addSavedCart = (item) => {
    if(estaEnLista(item.id, savedItems)){
      return
    }
    setSavedItems([...savedItems, item])
  }
  
  const removeSavedCart = (id) => {
    setSavedItems(savedItems.filter(el => el.id !== id))
  }

  const isInSavedCart = (id) => {
    return savedItems.some(el => el.id === id)
  }

  //Cart Function's
  
  const buyIndividualItem = (item) => {
    setItem(item)
  }

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
    setItems(items.filter(el => el.id !== itemId))
  }

  const limpiar = () => {
    setItems([])
    localStorage.removeItem("items")
  }

  // Funciones internas
  const calcularTotal = () => {
    return items.reduce((acc, el) => acc + el.qty * el.price, 0)
  }

  const articulosObtenidos = () => {
    return items.reduce((acc, el) => acc + el.qty, 0);
  }

  const articulosGuardados = () => {
    return savedItems.length;
  }

  const estaEnLista = (id) => {
    return items.some(el => el.id === id)
  }

  const values = {
    item,
    items,
    savedItems,
    fPrice,
    nop,
    nos,  
    addCart,
    setQty,
    removerItem,
    limpiar,
    buyIndividualItem,
    isInSavedCart,
    addSavedCart,
    removeSavedCart
  }

  return (
    <Provider value={{...values}}>
      {children}
    </Provider>
  )
}

export default CartContext