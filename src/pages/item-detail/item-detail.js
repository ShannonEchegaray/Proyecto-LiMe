import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./item-detail.css";
import ItemDetail from "../../components/item-detail/item-detail";
import { SpinnerCircular } from "spinners-react";
import ItemView from "../../components/item-view/item-view";
import { getItem } from "../../api/firebase";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const asyncFunction = async () => {
      setLoading(true);
      const result = await getItem(id);
      setProduct(result);
      setLoading(false);
    };

    asyncFunction();
  }, [id]);

  return (
    <div className="fondoMain">
      {loading ? (
        <SpinnerCircular color="#741be1" secondaryColor="#fff200" />
      ) : (
        <div className="cardItem">
          <ItemView item={product} />
          <ItemDetail item={product} itemRating={product.rating} />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
