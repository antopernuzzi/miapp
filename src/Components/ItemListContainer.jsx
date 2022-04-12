import * as React from "react";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Container } from '@mui/material';


export default function ItemListContainer({ listProducts }) {
  const [products, setProducts] = useState([]); //quiero que cuando algo cambie se renderice

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      //Esto se puede o no ejectutar en el futuro
      setTimeout(() => {
        resolve(listProducts); //aca lo marca como resuelto despues de 2 segundos
      }, 2000);
      //reject(null)
    });

    //Si se resolvio entonces con then hago lo que quiero
    promesa
      .then((res) => {
        console.log("ejecuto la promesa");
        setProducts(res); //actualiza los productos con lo que resolvio en la promesa
      })
      .catch((err) => {
        console.log("Ha ocurrido un error ");
      });
  }, []);

  return (
    <>
      {/* {JSON.stringify(listProducts)} */}

     
      <Container>
      <ItemList prods={products} />
      
    </Container>
    </>
  );
}
