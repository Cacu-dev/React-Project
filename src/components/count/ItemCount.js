import { useState } from "react";

const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const add = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const substract = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="d-flex card col-auto mx-auto text-center w-25">
      <h5 className="mt-2">Stock Disponible: {stock}</h5>
      <div className="d-flex mt/5 mb-3">
        <button onClick={substract} className="btn btn-primary pl/3 pr/3">
          -
        </button>
        <input value={counter} className="form-control text-center" />
        <button onClick={add} className="btn btn-primary">
          +
        </button>
      </div>
      <button
        onClick={(e) => onAdd(counter)}
        className="btn btn-primary pl-10 pr-10 mt-2 mb-5 pl-3 pr-3"
      >
        Agregar al carrito
      </button>
    </div>
  );
};
export default ItemCount;
