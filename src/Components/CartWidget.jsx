import * as React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Context } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  //tomo la lista del carrito del contexto, estoy suscripto a lo que tenga el contexto y si cualquier componente lo modifica yo lo veo
  let { totalItems } = React.useContext(Context);


  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (
    <>
      <Link style={{ textDecoration: "none", color: "white" }} to={`/cart`}>
      <StyledBadge badgeContent={totalItems} color="secondary">

        <ShoppingCartOutlinedIcon style={{ fontsize: "small" }}>
          {" "}
        </ShoppingCartOutlinedIcon>
        </StyledBadge>
      </Link>
      {/* {totalItems > 0 ? (
        <span style={{ color: "white" }}>({})</span>
      ) : null} */}

    </>
  );
};
export default CartWidget;
