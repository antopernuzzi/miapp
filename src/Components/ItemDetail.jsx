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
    if(number<=0){
      alert("Selecciona la cantidad de items a comprar.");
    }
    else if (number==1){
      alert("Genial! agregaste un item al carrito.");
    }
    else{
   
    alert("Genial! agregaste " + number + " items al carrito.");
    }
    setCount(number);
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
              {prod.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
             $ {prod.price}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {prod.description}
            </Typography>
          </CardContent>
          <CardContent sx={{ flex: "1 0 auto" }}>
       
            {/*si la cantidad es mayor a 0 entonces muestro el boton de agregar al carrito*/}
            {count <= 0 ? (
              <ItemCount initial={0} stock={prod.stock} onAdd={onAdd} item={prod} />
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
          
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: "50%", height: "50%", objectFit: "cover" }}
          image={prod.image}
          alt={prod.title}
        />
      </Card>
    </>
  );
}
