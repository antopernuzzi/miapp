import * as React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import productList from "../data/productsList";


export default function ItemDetailContainer() {
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productList[0]); //aca lo marca como resuelto despues de 2 segundos
      }, 2000);
      
    });

    //Si se resolvio entonces con then hago lo que quiero
    promesa
      .then((res) => {
        console.log("ejecuto la promesa detalle item");
        setProducto(res); //actualiza los productos con lo que resolvio en la promesa
      })
      .catch((err) => {
        console.log("Ha ocurrido un error ");
      });
  }, []);

  return (
    <>
      Detalle de Item
      <ItemDetail prod={producto}/>
    </>
  );
}
