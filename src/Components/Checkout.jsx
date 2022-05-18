import * as React from "react";
import { useState, useEffect } from "react";

import Container from "@mui/material/Container";

import { Context } from "../Context/CartContext";
import { Link } from "react-router-dom";
import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Fragment from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Box, FormControlLabel, Checkbox } from "@material-ui/core";
import Input from "@mui/material/Input";
import Label from "@mui/material/FormLabel";

export default function () {
  const { totalPrice } = React.useContext(Context);
  const { cart } = React.useContext(Context);
  const [name, setName] = useState("");
  const [surName, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [orderId, setOrderId] = useState("");
  const [purchaseDone, setPurchaseDone] = useState(false);

  //validaciones del form
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nombre es requerido"),
    surName: Yup.string().required("Apellido es requerido"),
    email: Yup.string()
      .required("Email es requerido")
      .email("Email es invalido"),
    phone: Yup.string().required("Teléfono es requerido"),
    adress: Yup.string()
      .required("Dirección es requerida")
      .max(60, "Dirección no debe exceder 60 caracteres"),
    postalCode: Yup.string().required("Código postal es requerido"),
  });

  //le paso las validaciones al hook form
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  //ACTION  BTN TERMINAR COMPRA
  const onSubmit = (data) => {
    console.log(data);
    savePurchase();
  };

  //GUARDAR ORDEN DE COMPRA
  function savePurchase() {
    alert("Genial has terminado tu compra.");
    const newDate = new Date();

    let newOrder = {
      buyer: {
        name: name,

        apellido: surName,

        email: email,

        adress: adress,
        phone: phone,
        postalCode: postalCode,
      },

      items: [...cart],

      date: serverTimestamp(),

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
              <Typography variant="h6" align="center" margin="dense">
                Completa con tus datos para terminar la compra
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="Nombre"
                    fullWidth
                    margin="dense"
                    {...register("name")}
                    error={errors.name ? true : false}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.name?.message}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="surName"
                    name="surName"
                    label="Apellido"
                    fullWidth
                    margin="dense"
                    {...register("surName")}
                    error={errors.surName ? true : false}
                    value={surName}
                    onChange={(e) => {
                      setSurname(e.target.value);
                    }}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.surName?.message}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    margin="dense"
                    {...register("email")}
                    error={errors.email ? true : false}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.email?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phone"
                    name="phone"
                    label="Teléfono"
                    fullWidth
                    margin="dense"
                    {...register("phone")}
                    error={errors.phone ? true : false}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.phone?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="adress"
                    name="adress"
                    label="Dirección"
                    fullWidth
                    margin="dense"
                    {...register("adress")}
                    error={errors.adress ? true : false}
                    value={adress}
                    onChange={(e) => {
                      setAdress(e.target.value);
                    }}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.adress?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="postalCode"
                    name="postalCode"
                    label="Código postal"
                    fullWidth
                    margin="dense"
                    {...register("postalCode")}
                    error={errors.postalCode ? true : false}
                    value={postalCode}
                    onChange={(e) => {
                      setPostalCode(e.target.value);
                    }}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.postalCode?.message}
                  </Typography>
                </Grid>
              </Grid>
              <Box mt={3} align="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(onSubmit)}
                >
                  Terminar compra
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Typography variant="h6" align="center" margin="dense">
                ¡Felicitaciones! Tu compra fue realizada con éxito.
              </Typography>

              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                align="center"
              >
                {name} Gracias por tu compra. Te enviaremos un mail a {email}{" "}
                con todos los detalles de compra y envío. El código de tu
                operación es:
              </Typography>
              <Typography variant="h6" align="center" margin="dense">
                {orderId}
              </Typography>
              <Box align="center">
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <Button variant="contained" sx={{ mt: 3, ml: 1 }}>
                    Volver
                  </Button>
                </Link>
              </Box>
            </>
          )}
        </Paper>
      </Container>
    </>
  );
}
