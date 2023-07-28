import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartCounter from "../cart-counter/cart-counter";
import { cartContext } from "../context/cart-context";

const CartItem = ({ item }) => {
  const { setQty, removerItem, addSavedCart } = useContext(cartContext);

  const addProduct = (counter) => {
    setQty(item.id, counter);
  };

  return (
    <div className="border-y border-grey border-solid">
      <div>
        <div className="flex justify-start items-center flex-nowrap">
          <div className="w-12 h-20 mr-2">
            <Link to={`/category/${item.id}`}>
              <img className="imgFit" src={item.image} alt="" />
            </Link>
          </div>
          <div className="w-6/12">
            <Link to={`/category/${item.id}`}>
              <p className="text-start">{item.title}</p>
            </Link>
            <p className="text-start">Envio Gratis</p>
          </div>
          <CartCounter
            stock={item.stock}
            initial={item.qty}
            addProduct={addProduct}
          />
          <div className="flex-grow">$ {item.price * item.qty}</div>
        </div>
      </div>
      <div>
        <ul className="flex">
          <li className="mx-2">
            <button onClick={() => removerItem(item.id)} className="link">
              Eliminar
            </button>
          </li>
          <li className="mx-2">
            <button
              onClick={() => {
                addSavedCart(item);
                removerItem(item.id);
              }}
              className="link"
            >
              Guardar para despues
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CartItem;
