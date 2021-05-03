import Item from "./Item";

const ItemList = ({ items }) => {
  
  return (
    <div className="row row-cols-3 ml-2">
      {items.map((items) => (
        <Item key={items.id} {...items} />
      ))}
    </div>
  );
};

export default ItemList;
