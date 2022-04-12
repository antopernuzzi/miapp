import Item from "./Item";
import Grid from "@mui/material/Grid";

const ItemList = ({ prods }) => {
  return (
    // <div className="ItemList">
    //   {prods.map((prod) => (
    //     <Item key={prod.id} prod={prod} />
    //   ))}
    // </div>

    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      justifyContent="center"
    >
      {/* uso de map para recorrer el array de productos */}
      {prods.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </Grid>
  );
};

export default ItemList;
