import * as React from "react";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Context } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { collection, getFirestore ,addDoc} from "firebase/firestore";
export default function () {
  const { totalPrice } = React.useContext(Context);
  const { cart } = React.useContext(Context);
  const [name, setName] = useState("");
  const [surName, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [orderId, setOrderId] = useState("");
  const [purchaseDone, setPurchaseDone] = useState(false);

  function savePurchase() {
    alert("hoo has terminado tu compra");
    const newDate = new Date();

    let newOrder = {
      buyer: {
        name: name,

        apellido: surName,

        email: email,

        adress: adress,

        city: city,
      },

      items: [...cart],

      date: newDate,

      total: totalPrice,
    };

    const dataBase = getFirestore();

    const ordersCollection = collection( dataBase, 'orders');


    addDoc(ordersCollection,newOrder).then((value)=>{
        setPurchaseDone(true);

        setOrderId(value.id);
    
        console.log(value.id);
    });
    console.log(newOrder);
  }

//   useEffect(() => {
//     console.log(email, surName, city);
//   }, [email, surName, city]);

  return (
    <>
      
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>

          {purchaseDone === false ? (
            <>
              Completa con tus datos para finalizar tu compra
              <input
                type={"text"}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type={"text"}
                value={surName}
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
              />
              <input
                type={"text"}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type={"text"}
                value={adress}
                onChange={(e) => {
                  setAdress(e.target.value);
                }}
              />
              <input
                type={"text"}
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
              <Button
                variant="contained"
                onClick={savePurchase}
                sx={{ mt: 3, ml: 1 }}
              >
                Terminar compra
              </Button>
            </>
          ) : (
            <>
              ¡Felicitaciones! Tu compra fue realizada con éxito.
              
              {name} Gracias por tu compra. Te enviaremos un mail a {email} con
              todos los detalles de compra y envío. El código de tu operación
              es: {orderId}
              <Link to={"/"}>
                <Button
                  variant="contained"
                  sx={{ mt: 3, ml: 1 }}
                >
                  Volver
                </Button>
              </Link>
            </>
          )}
        </Paper>
      </Container>
    </>
  );
}
