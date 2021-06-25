import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import firebase from "firebase/app";
import { getFirestore } from "../../configs/firebase";
import "firebase/firestore";
import Swal from "sweetalert2";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  const [db] = useState(getFirestore);
  const [, setId] = useState();
  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "",email2:"" });

  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].item.price * cart[i].quantity;
  }

  const handleInputChange = (e) => {
    e.preventDefault();
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const list = cart.map((item) => ({
    id: item.item.id,
    brand: item.item.brand,
    model: item.item.model,
    price: item.item.price,
    quantity: item.quantity,
  }));

  const Create = () => {
    if (buyer.mail === buyer.mail2) {
      const newOrder = {
        buyer: buyer,
        items: list,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: `$${total}`,
      };
      const orders = db.collection("orders");

      orders
        .add(newOrder)
        .then((resp) => {
          console.log(resp);
          console.log(resp.id);
          setId(resp.id);
          Swal.fire({
            title: "Felicitaciones por su compra.",
            text: `Su ID de compra es: ${resp.id}`,
            icon: "success",
            button: "Aceptar",
          });
        })
        .catch(() => {
          Swal.fire({
            title: "Opps!!",
            text:
              "Lo sentimos, en este momento no podesmo realizar esta transacción.",
            icon: "error",
            button: "Aceptar",
          });
        });
    } else {
      Swal.fire({
        title: "Opps!!",
        text:"El Email ingresado es incorrecto",
        icon: "error",
        button: "Aceptar",
      });
     };

    

    /* const Update = () => {

      const categorias = db.collection("categorias").doc(id);
      const stockCategory = categorias.doc(stock);
      const getStock = stockCategory.get()
      const updateObject = { stock: getStock - quantity };
      categorias.update(updateObject);

    }; */
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
        <label className="ml-5">
          Ingrese nuevamente su Email:
          <input
            className="ml-2"
            onChange={handleInputChange}
            type="email"
            name="email2"
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
