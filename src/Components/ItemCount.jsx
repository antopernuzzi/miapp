import * as React from "react";
import { useState, useEffect} from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Context } from "../Context/CartContext";


export default function ItemCount({ initial, stock , onAdd, item}) {
  // useState recibe un parámetro: el valor inicial del estado
  // y devuelve un array de dos posiciones:
  //  la primera count, tiene el valor del estado inicial
  //  la segunda setCount, el método para actualizar el estado
  const [count, setCount] = useState(initial);


  let {addItem} = React.useContext(Context);

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

  //use effect es un hook que se ejecuta cuando el componente se monta  o se actualiza      //       
  // useEffect(() => {console.log("Total a: "+ count) }, [count]);
  

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
             <Button onClick={() => {
              //  le paso un objeto que tenga todas las propiedades de item y ademas cantidad
              addItem({ ...item, quantity: count }); 
              onAdd(count);
            
            }} variant="contained" size="medium">Comprar</Button>
      </Grid>
    </>
  );
}
