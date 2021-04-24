import { Link } from "react-router-dom";

const Item = ( items ) => {
  const { id, brand, model, price, urlImg } = items;
  return (
    //<div className="card" style={{ width: "18rem" }}>
    <Link to={`/item/${id}`}>
      <div>
        <div className="row row-cols-1 mr-2">
          <div className="col mb-4">
            <div className="card h-100">
              <img src={urlImg} className="card-img-top" alt="Imagen" />
              <div className="card-body">
                <h5 className="card-title">
                  {brand} - {model}
                </h5>
                <p className="card-text">{`$ ${price}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Item;
