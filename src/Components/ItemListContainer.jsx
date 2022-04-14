import * as React from "react";
import { getProducts } from "../data/productsList";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Container } from "@mui/material";
import { SpinnerDotted } from "spinners-react";
import { color } from "@mui/system";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]); //quiero que cuando algo cambie se renderice
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams(); //hook que uso para armar la ruta dinamica

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      const listProducts = getProducts(categoryId);
      setLoading(true);
      setTimeout(() => {
        resolve(listProducts); //aca lo marca como resuelto despues de 2 segundos
      }, 2000);
      //reject(null)
    });

    //Si se resolvio entonces con then actualizo mis productos
    promesa
      .then((res) => {
        console.log("ejecuto la promesa");
        setProducts(res); //actualiza los productos con lo que resolvio en la promesa
      })
      .catch((err) => {
        console.log("Ha ocurrido un error ");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]); //a medida que cambia categoryId se ejecuta el useEffect para renderizar

  return (
    <>
      {/* {JSON.stringify(listProducts)} */}

      <Container>
        <div
          style={{
            minHeight: "90vh",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          {loading ? (
            <SpinnerDotted style={{ color: "#1876D1" }} />
          ) : (
            <ItemList prods={products} />
          )}
          <SpinnerDotted enabled={false} />
        </div>
      </Container>
    </>
  );
}
