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
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]); //quiero que cuando algo cambie se renderice
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { categoryId } = useParams(); //hook que uso para armar la ruta dinamica

  useEffect(() => {
    const db = getFirestore();
    console.log(categoryId);

    let listProducts;

    if (!categoryId) {
      listProducts = collection(db, "products");
      console.log("home sin categoria");
    } else {
      console.log("entro al filtro por categoria");

      listProducts = query(
        collection(db, "products"),
        where("category", "==", categoryId)
      );
    }
    getDocs(listProducts)
      .then((res) => {
        /* let productos = [...res.docs];
      productos = productos.map((item) => ({ id: item.id, ...item.data() }));
      setProductos(productos); */

        setProducts(res.docs.map((item) => ({ id: item.id, ...item.data() })));
        setError(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Ha ocurrido un error ");
        setError(true);
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
          {error && <p>Error al cargar los productos</p>}
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
