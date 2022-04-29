import * as React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {getProduct} from "../data/productsList";
import { useParams } from 'react-router-dom';
import { Container } from "@mui/material";
import { doc, getDoc, getFirestore } from 'firebase/firestore';


export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const{id}=useParams();

  useEffect(() => {
    const db = getFirestore();
  
    const selectProduct = doc(db, 'products', id);
    getDoc(selectProduct).then((res) => {
      setProduct({ id: res.id, ...res.data() });
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
