import * as React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {getProduct} from "../data/productsList";
import { useParams } from 'react-router-dom';
import { Container } from "@mui/material";


export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const{id}=useParams();

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      const selectProduct = getProduct(1);
      setTimeout(() => {
        resolve(selectProduct); //aca lo marca como resuelto despues de 2 segundos
      }, 2000);
      
    });

    //Si se resolvio entonces con then hago lo que quiero
    promesa
      .then((res) => {
        console.log("ejecuto la promesa detalle item");
        setProduct(res); //actualiza los productos con lo que resolvio en la promesa
      })
      .catch((err) => {
        console.log("Ha ocurrido un error ");
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
