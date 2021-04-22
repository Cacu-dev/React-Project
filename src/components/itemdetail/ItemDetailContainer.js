import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
/* import productos from "../../data/products"; */
import { getFirestore } from "../../configs/firebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const itemCollection = db.collection("categorias");
    const itemcito = itemCollection.doc(id);
    console.log(itemcito);

    itemcito
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("Item no existe");
          return;
        }
        console.log("Item encontrado");
        console.log(doc.data());
        setItem({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log("error encontrado", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

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

/* useEffect(() => {
      new Promise((todoBien, todoMal) => {
          setTimeout(() => {
              todoBien(productos.find((productos) => productos.id === parseInt(id)));
            
        }, 2000);
      }).then((resultado) => setItem(resultado));
    }); */
