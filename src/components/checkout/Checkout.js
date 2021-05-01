import { useContext } from "react";
import CartContext from "../../context/CartContext";
import firebase from "firebase/app";
import { useState } from "react";
import { getFirestore } from "../../configs/firebase";
import "firebase/firestore";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  const [db, setDb] = useState(getFirestore);
  const [id, setId] = useState();
  const [buyer, setBuyer] = useState({name:"", phone:"", email:""});

  const handleInputChange = (e) => {
    
    e.preventDefault();
    setBuyer({...buyer,[e.target.name]:e.target.value})

  }

  const list = cart.map((item) => ({
    id: item.item.id,
    brand: item.item.brand,
    model: item.item.model,
    price: item.item.price,
  }));

  const Create = () => {
    const newOrder = {
      buyer: buyer,
      items: list,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: 2000,
    };
    const orders = db.collection("orders");

    orders.add(newOrder).then((resp) => {
      console.log(resp);
      console.log(resp.id);
      setId(resp.id);
    });
  };

  return (
    <div className="mt-5 p-3">
      <h2>DATOS</h2>
      <hr />
      <form className="mt-5">
        <label>
          Nombre:
          <input
            className="ml-2"
            onChange={handleInputChange}
            type="text"
            name="name"
          />
        </label>
        <label className="ml-5">
          Teléfono:
          <input
            className="ml-2"
            onChange={handleInputChange}
            type="tel"
            name="phone"
          />
        </label>
        <label className="ml-5">
          Email:
          <input
            className="ml-2"
            onChange={handleInputChange}
            type="email"
            name="email"
          />
        </label>
      </form>
      <button className="btn btn-success mt-5" onClick={Create}>
        Continuar
      </button>
    </div>
  );
};

export default Checkout;
