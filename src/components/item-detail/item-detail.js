import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { cartContext } from "../cart/context/cart-context";
import ItemCount from "../item-counter/item-counter";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./item-detail.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({ item }) => {
  const {
    addCart,
    buyIndividualItem,
    isInSavedCart,
    removeSavedCart,
    addSavedCart,
  } = useContext(cartContext);
  const [redirect, setRedirect] = useState(null);

  const addProduct = (counter) => {
    counter <= item.stock
      ? addCart({ ...item, qty: counter })
      : console.log("no se banca el stock");
    toast(`Se agrego ${item.title} al carrito`);
  };

  const buyItem = (counter) => {
    buyIndividualItem({ ...item, qty: counter });
    setRedirect(item.id);
  };

  return (
    <>
      <ToastContainer hideProgressBar={true} autoClose={1000} />
      <div className="containerDetailItem">
        <div className="containerDescriptionItem">
          <div
            className="corazon"
            onClick={() =>
              isInSavedCart(item.id)
                ? removeSavedCart(item.id)
                : addSavedCart(item)
            }
          >
            <FavoriteIcon
              sx={
                isInSavedCart(item.id)
                  ? { color: "red" }
                  : { color: "whitesmoke" }
              }
            />
          </div>
          <p className="newParagraph">Nuevo | {item.rating.count} comprados</p>
          <p className="titleParagraph">{item.title}</p>
          <div
            className="titleParagraph"
            style={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "18px", verticalAlign: "middle" }}>
              (n)
            </span>
          </div>
          {Array.from(Array(5), (v, index) => {
            if (index + 1 < item.rating.rate) {
              return (
                <StarIcon key={index} sx={{ fontSize: 18 }} color="primary" />
              );
            } else {
              return <StarBorderIcon key={index} sx={{ fontSize: 18 }} />;
            }
          })}
          <div>
            <p className="priceParagraph">$ {item.price}</p>
            <p>en 12 x ${item.price / 12}</p>
          </div>
          <p className="payMethods">ver los medios de pago</p>

          <div className="containerEnvio">
            <div className="ico-envio">
              <LocalShippingIcon sx={{ color: "#00a650" }} />
            </div>
            <div style={{ paddingBottom: "15px" }}>
              <p style={{ color: "#00a650" }}>Envío gratis a todo el pais</p>
              <p className="envioParagraph">
                conocé los tiempos y las formas de entrega
              </p>
              <p className="link">calcular cuándo llega</p>
            </div>
            <div>
              Color: <span style={{ fontWeight: "500" }}>Azul</span>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <ItemCount
                addProducto={addProduct}
                buyItem={buyItem}
                stock={item.stock}
                initial={1}
              />
              {redirect && <Navigate to={`/form/${redirect}`} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
