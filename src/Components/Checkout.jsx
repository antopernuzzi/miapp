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

import { useForm } from "react-hook-form";
import Input from '@mui/material/Input';
import Label from '@mui/material/FormLabel';

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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
 
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
              {/* <Grid container spacing={3}>
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
              </Grid> */}
              {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
              {/* <FormControlUnstyled defaultValue="" required>
  <Label>Name</Label>
  <Input />
  <HelperText />
</FormControlUnstyled> */}
              <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
          
                <Input 
                  
                    placeholder="Nombre"
                    name="name"
                    type="text"
                    {...register("name", { required: true, maxLength: 60 })}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <small className="text-danger">
                    {errors?.name && <span>Ingrese este valor</span>}
                  </small>
               
                </Grid>
                <Grid item xs={12} sm={6}>
            
                 
                <Input
                    placeholder="Apellido"
                    name="surName"
                    type="text"
                    {...register("surName", { required: true, maxLength: 60 })}
                    value={surName}
                    onChange={(e) => {
                      setSurname(e.target.value);
                    }}
                  />
                  <small className="text-danger">
                    {errors?.surName && <span>Ingrese este valor</span>}
                  </small>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                 
                <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <small className="text-danger">
                    {errors?.email && <span>Ingrese un valor valido</span>}
                  </small>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                
                  
                <Input
                    placeholder="Telefono"
                    type="number"
                    name="phone"
                    {...register("phone", { required: true })}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                  <small className="text-danger">
                    {errors?.phone && <span>Ingrese un valor valido</span>}
                  </small>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  
                <Input
                    placeholder="Direccion"
                    type="text"
                    name="adress"
                    {...register("adress", { required: true })}
                    value={adress}
                    onChange={(e) => {
                      setAdress(e.target.value);
                    }}
                  />
                  <small className="text-danger">
                    {errors?.adress && <span>Ingrese un valor valido</span>}
                  </small>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  
                <Input
                    placeholder="CP"
                    type="text"
                    name="postalCode"
                    {...register("postalCode", { required: true })}
                    value={postalCode}
                    onChange={(e) => {
                      setPostalCode(e.target.value);
                    }}
                  />
                  <small className="text-danger">
                    {errors?.postalCode && <span>Ingrese un valor valido</span>}
                  </small>
                  </Grid>
                  </Grid>
                  <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, ml: 1 }}
              >
                Terminar compra
              </Button>
               
              </form>
           
            </>
          ) : (
            <>
              ¡Felicitaciones! Tu compra fue realizada con éxito.
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {name} Gracias por tu compra. Te enviaremos un mail a {email}{" "}
                con todos los detalles de compra y envío. El código de tu
                operación es: {orderId}
              </Typography>
              <Link to={"/"} style={{ textDecoration: "none" }}>
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
