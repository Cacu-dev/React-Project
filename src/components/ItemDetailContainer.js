import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/products";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams()
    useEffect(() => {
      new Promise((todoBien, todoMal) => {
          setTimeout(() => {
              todoBien(productos.find((productos) => productos.id === parseInt(id)));
            setLoading(false);
        }, 2000);
      }).then((resultado) => setItem(resultado));
    });
    return (
      <div className="container">
        <h2>Detalle</h2>
        <hr />
        <br />
        {loading ? <p>Loading...</p> : <ItemDetail item={item} />}
      </div>
    );
  };

export default ItemDetailContainer;
