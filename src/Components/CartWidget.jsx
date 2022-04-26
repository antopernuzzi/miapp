import * as React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Context } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  //tomo la lista del carrito del contexto, estoy suscripto a lo que tenga el contexto y si cualquier componente lo modifica yo lo veo
  let { totalItems } = React.useContext(Context);
  console.log(totalItems);

  return (
    <>
      <Link style={{ textDecoration: "none", color: "white" }} to={`/cart`}>
        <ShoppingCartOutlinedIcon style={{ fontsize: "small" }}>
          {" "}
        </ShoppingCartOutlinedIcon>
      </Link>
      {totalItems > 0 ? (
        <span style={{ color: "white" }}>({totalItems})</span>
      ) : null}

    </>
  );
};
export default CartWidget;
