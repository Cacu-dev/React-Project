import { useContext } from "react";
import CartContext from "../../context/CartContext";
import ItemCart from "./ItemCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clear } = useContext(CartContext);
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].item.price * cart[i].quantity;
  }

  return (
    <div className="container">
      <div>
        <h3>Carrito De Compras</h3>
        <div className="card w-100">
          {cart.length === 0 ? (
            <h5 className="mt-3 mb-3">Lo sentimos. El carro está vacío!</h5>
          ) : (
            cart.map((item, key) => <ItemCart key={key} {...item} />)
          )}
        </div>
        <div className="mt-3">
          <h3>TOTAL: ${total}</h3>
        </div>
        {cart.length === 0 ? (
          <Link to="/">
            <button className="btn btn-success mt-3 mb-3">
              Seguir comprando
            </button>
          </Link>
        ) : (
          <>
            <Link to="/Checkout">
              <button className="btn btn-primary mt-3 mb-3">Comprar</button>
            </Link>
            <Link to="/">
              <button className="btn btn-success mt-3 mb-3 ml-3">
                Seguir comprando
              </button>
            </Link>
            <button
              className="btn btn-danger mt-3 mb-3 ml-3"
              onClick={() => clear()}
            >
              Vaciar carrito
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default Cart;
