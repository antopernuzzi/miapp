import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function ItemCount({ initial, stock }) {
  // useState recibe un parámetro: el valor inicial del estado
  // y devuelve un array de dos posiciones:
  //  la primera count, tiene el valor del estado inicial
  //  la segunda setCount, el método para actualizar el estado
  const [count, setCount] = useState(initial);

  function adding() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function subs() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function onAdd() {
    alert("Genial! agregaste " + count + " items al carrito.");
  }

  return (
    <>
      <br />
      Contador de items
      <br />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 1,
          m: 1,
          height: 100,
          borderRadius: 1,
        }}
      >
        <Button onClick={subs} variant="outlined" size="small"> - </Button>
        <p>{count}</p>
        <Button onClick={adding} variant="outlined" size="small"> + </Button>
      </Box>
    
      <Grid item xs={12} sm={12} md={4} lg={4}
        sx={{
          textAlign: "center", 
        }}
      >
             <Button onClick={onAdd} variant="contained" size="medium">Comprar</Button>
      </Grid>
    </>
  );
}
