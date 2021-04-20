import ItemList from "./ItemList";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../../data/products";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { brand } = useParams();

  console.log(brand);

  useEffect(() => {
    new Promise((todoBien, todoMal) => {
      setTimeout(() => {
        if (brand) {
          todoBien(productos.filter((p) => p.brand === brand));
        } else {
          todoBien(productos);
        }
      }, 2000);
    }).then((resultado) => setItems(resultado));
  }, [brand]);

  return (
    <div className="container">
      <h2>Notebooks</h2>
      <hr />
      <br />
      <br />
      <ItemList items={items} />
    </div>
  );
};
export default ItemListContainer;
