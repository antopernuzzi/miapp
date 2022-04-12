import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';

export default function Item({prod}){
    return(
        <>
        {/* <h1>Item</h1>
        <div>
            <div>ID: {prod.id}</div>
            <div>
                <div>Name: {prod.name}</div>
                <div>Imagen: {prod.image}</div>
                <img src={prod.image} alt="prueba" />
                <div>Price:{prod.price}</div>
                <div>Description:{prod.description}</div>
            </div>
        </div> */}
  <Grid item xs={4}>
  <Card sx={{ maxWidth: 345 , height:400}}>
      <CardMedia
        component="img"
        alt={prod.name}
        height="200"
        image={prod.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {prod.name}
        </Typography>
        <Typography gutterBottom component="div">
        ${prod.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {prod.shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button size="small">Ver detalle</Button>
      </CardActions>
    </Card>
    
  </Grid>
   
        </>
    );
}