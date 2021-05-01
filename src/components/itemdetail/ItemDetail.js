import CountContainer from "../count/CountContainer";
const ItemDetail = ({ item }) => {
  const { brand, model, price, urlImg, descrive } = item;
  return (
    <div>
      <div className="card mb-3 text-center">
        <div className="row no-gutters">
          <div className="col-md mt-5">
            <img src={urlImg} alt="Notebook" />
          </div>
          <div className="col-md-12">
            <div className="card-body w-100">
              <h5 className="card-title">
                {brand} - {model}
              </h5>
              <p className="card-text">{descrive}</p>
              <p className="card-text">
                <small className="text-muted">{`$ ${price}`}</small>
              </p>
            </div>
          </div>
        </div>
        <CountContainer item={item} />
      </div>
    </div>
  );
};
export default ItemDetail;
