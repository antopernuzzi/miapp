import * as React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {getProduct} from "../data/productsList";
import { useParams } from 'react-router-dom';
import { Container } from "@mui/material";


export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const{id}=useParams();

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      const selectProduct = getProduct(id);
      setTimeout(() => {
        resolve(selectProduct); //aca lo marca como resuelto despues de 1 segundo
      }, 1000);
      
    });

    //Si se resolvio entonces con then hago lo que quiero
    promesa
      .then((res) => {
        console.log("ejecuto la promesa detalle item");
        setProduct(res); //actualiza los productos con lo que resolvio en la promesa
        setError(false);
      })
      .catch((err) => {
        console.log("Ha ocurrido un error ");
        setError(true);
      });
  }, []);

  return (
    <>
    <Container>
      Detalle de Item
      <ItemDetail prod={product}/>
    </Container>
      
    </>
  );
}
