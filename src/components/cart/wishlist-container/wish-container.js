import React, { useContext } from "react";
import { cartContext } from "../context/cart-context";
import WhishlistItem from "../wishlist-item/wishlist-item";

const WishlistContainer = () => {
  const { savedItems } = useContext(cartContext);

  return (
    <div>
      {savedItems.length !== 0 ? (
        savedItems.map((el) => <WhishlistItem key={el.id} item={el} />)
      ) : (
        <h4 className="text-center">No hay productos guardados</h4>
      )}
    </div>
  );
};

export default WishlistContainer;
