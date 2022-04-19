import * as React from "react";
import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ItemDetail({ prod }) {
  const [count, setCount] = React.useState(0);

  const onAdd = (number) => {
    setCount(number);
    alert("Genial! agregaste " + number + " items al carrito.");
  };
  const theme = useTheme();
  
  useEffect(() => {
    console.log("Total: " + count);
  }, [count]);

  return (
    <>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {prod.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Anto pernuzzi
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {prod.description}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            {/*si la cantidad es mayor a 0 entonces muestro el boton de agregar al carrito*/}
            {count <= 0 ? (
              <ItemCount initial={0} stock={prod.stock} onAdd={onAdd} />
            ) : (
              <Button variant="outlined" size="small">
                <Link
                  style={{ textDecoration: "none", color: "#1876D1" }}
                  to={`/cart`}
                >
                  Ir al carrito
                </Link>
              </Button>
            )}
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          image={prod.image}
          alt={prod.name}
        />
      </Card>
    </>
  );
}
