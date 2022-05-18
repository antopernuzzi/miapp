import * as React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";

import { Link } from "react-router-dom";

export default function ArtistListContainer() {
 


  return (
    <>
    <Container component="main" maxWidth="sm" sx={{ mb: 5 , mt:5}}>
    <Card sx={{ maxWidth: 445}}>
      <CardMedia
        component="img"
        alt="artistas no encontrados"
        height="500"
        image="https://res.cloudinary.com/dtbsvosyu/image/upload/v1652913196/samples/Objetos/404_mamty3.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ups!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          No es posible visualizar en este momento los artistas, por favor reintente nuevamente mas tarde.
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Button size="small">Volver</Button>
        </Link>
      </CardActions>
    </Card>
    </Container>
    </>
  );
}
