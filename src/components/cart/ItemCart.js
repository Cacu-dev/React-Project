import React, { useContext } from "react";
import CartContext from "../../context/CartContext";

const ItemCart = ({ item, quantity }) => {
  const { removeItem } = useContext(CartContext);
  console.log(item);
  console.log(quantity);
  return (
    <div className="row p-3">
      <div className="col-6">{`${item.brand} ${item.model}`}</div>
      <div className="col-2">{`${quantity}`}</div>
      <div className="col-3">{`$ ${item.price}`}</div>
      <div className="col-1">
        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
          x
        </button>
      </div>
    </div>
  );
};

export default ItemCart;
