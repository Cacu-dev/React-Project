import ItemList from "./ItemList";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/* import productos from "../../data/products"; */
import { getFirestore } from "../../configs/firebase";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { brand } = useParams();

  
  useEffect(() => {
    const db = getFirestore();
    const categoryCollection = brand
      ? db.collection("categorias").where("brand", "==", brand)
      : db.collection("categorias");

    categoryCollection
      .get()
      .then((resp) => {
        if (resp.size === 0) {
          console.log("No se encuentran resultados");
        }
        setItems(resp.docs.map((p) => ({ id: p.id, ...p.data() })));
      })
      .catch((error) => {
        console.log("error encontrado", error);
      });
  }, [brand]);


  /* useEffect(() => {
    new Promise((todoBien, todoMal) => {
      setTimeout(() => {
        if (brand) {
          todoBien(productos.filter((p) => p.brand === brand));
        } else {
          todoBien(productos);
        }
      }, 2000);
    }).then((resultado) => setItems(resultado));
  }, [brand]); */

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
