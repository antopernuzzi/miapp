import React from "react";
import { Context } from "../Context/CartContext";
import { Container } from "@mui/material";
import CartList from "./CartList";
import { textAlign } from "@mui/system";
export default function CartContainer() {
  let { totalItems} = React.useContext(Context);
  return (
    <>
      <Container>
        <h1 style={{textAlign:"center"}}> Resumen de compra</h1>
        <div
          style={{
            minHeight: "90vh",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          {totalItems>0?<CartList/>:<h3>No hay items en el carrito</h3>}
          
        </div>
      </Container>
    </>
  );
}
