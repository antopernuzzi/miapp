import * as React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Context } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { collection, getFirestore, addDoc } from "firebase/firestore";
export default function () {
  const { totalPrice } = React.useContext(Context);
  const { cart } = React.useContext(Context);
  const [name, setName] = useState("");
  const [surName, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [orderId, setOrderId] = useState("");
  const [purchaseDone, setPurchaseDone] = useState(false);

  function savePurchase() {
    alert("Genial has terminado tu compra.");
    const newDate = new Date();

    let newOrder = {
      buyer: {
        name: name,

        apellido: surName,

        email: email,

        adress: adress,
      },

      items: [...cart],

      date: newDate,

      total: totalPrice,
    };

    const dataBase = getFirestore();

    const ordersCollection = collection(dataBase, "orders");

    addDoc(ordersCollection, newOrder).then((value) => {
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
    
      <Container component="main" maxWidth="sm" sx={{ mb: 20 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>

          {purchaseDone === false ? (
            <>
              <React.Fragment>
                Completa con tus datos para finalizar tu compra
              </React.Fragment>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="Nombre"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="surName"
                    name="surName"
                    label="Apellido"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                    value={surName}
                    onChange={(e) => {
                      setSurname(e.target.value);
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="adress"
                    name="adress"
                    label="Dirección"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                    value={adress}
                    onChange={(e) => {
                      setAdress(e.target.value);
                    }}
                  />
                </Grid>
              </Grid>
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
              <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {name} Gracias por tu compra. Te enviaremos un mail a {email} con
              todos los detalles de compra y envío.
            
              El código de tu operación
              es: {orderId}
              </Typography>
              <Link to={"/"}style={{textDecoration:"none"}}>
                <Button variant="contained" sx={{ mt: 3, ml: 1 }}>
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
