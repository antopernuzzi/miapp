import Item from "./Item";


const ItemList = ({ prods }) => {
  return (
    <div className="ItemList">
      {prods.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default ItemList;