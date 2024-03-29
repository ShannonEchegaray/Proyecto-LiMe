import React, { useState } from "react";
import "./item-counter.css";

const ItemCount = ({ stock, initial, addProducto, buyItem }) => {
  const [selection, setSelection] = useState(initial);
  const [input, setInput] = useState("");
  const [boton, setBoton] = useState(false);
  const [boton2, setBoton2] = useState(false);
  const [error, setError] = useState(false);

  const select = (number) => {
    if (number > stock) {
      setError(true);
      return;
    }
    setSelection(number);
    setBoton(false);
    setBoton2(null);
    setError(false);
    setInput("");
  };

  const newButton = (e) => {
    setBoton2(!boton2);
    setInput("");
  };

  return (
    <div className="relative">
      <button className="quantityButton" onClick={() => setBoton(!boton)}>
        Cantidad:{" "}
        <span className="font-medium">
          {selection || initial} {selection > 1 ? "unidades" : "unidad"}
        </span>
      </button>
      <ul
        style={{ display: boton ? "block" : "none" }}
        className="listaCantidades absolute top-100"
      >
        {Array.from(Array(stock), (v, index) => {
          //La cantidad de productos a comprar siempre se representara hasta 6, de 7 para arriba se elige escribiendo el numero, de 8 para arriba no se representan
          if (index + 1 < 7) {
            return (
              <li
                key={index}
                className={`itemList ${
                  selection === index + 1 &&
                  !boton2 &&
                  "border-l-2 border-solid border-blue-400"
                }`}
                onClick={() => select(index + 1)}
              >
                {index + 1} {index + 1 === 1 ? "unidad" : "unidades"}
              </li>
            );
          } else if (index + 1 >= 8) {
            return null;
          } else {
            return (
              <li key={index}>
                {boton2 ? (
                  <form
                    className="w-full p-2 border-l-2 border-solid border-blue-400"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <label className="w-9/12 text-xs" htmlFor="cantidad">
                      Cantidad:
                    </label>

                    <div className="w-full relative">
                      <input
                        className="w-full selectQuantity p-1"
                        value={input}
                        onChange={(e) => {
                          !isNaN(Number(e.target.value)) &&
                            setInput(Number(e.target.value));
                        }}
                        type="text"
                        pattern="[0-9]+"
                      />
                      <button
                        className="bg-blue-600 text-white absolute right-1 inset-y-1 rounded text-sm p-0.5"
                        onClick={() => select(input)}
                      >
                        Aplicar
                      </button>
                    </div>
                    {error && (
                      <p className="text-xs text-red-800">
                        *La cantidad no puede superar el stock
                      </p>
                    )}
                  </form>
                ) : (
                  <button
                    className="itemList text-left"
                    disabled={input.length === 0 ? false : true}
                    onClick={(e) => {
                      newButton(e);
                    }}
                  >
                    Comprar mas de {index} unidades
                  </button>
                )}
              </li>
            );
          }
        })}
      </ul>
      <div className="mt-3 flex flex-col justify-content-center">
        <button
          className="w-10/12 my-1 font-medium py-1.5 block text-center text-white rounded bg-blue-600"
          onClick={() => buyItem(selection)}
        >
          Comprar
        </button>
        <button
          className="w-10/12 my-1 font-medium py-1.5 block text-center rounded bg-blue-100 text-blue-600"
          onClick={() => addProducto(selection)}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
