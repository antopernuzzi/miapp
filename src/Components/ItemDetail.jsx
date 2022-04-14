import * as React from "react";
import ItemCount from "./ItemCount";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";


export default function ItemDetail({ prod }) {
  const theme = useTheme();
  return (
    <>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {prod.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Anto pernuzzi
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {prod.description}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <ItemCount initial={1} stock={prod.stock} />
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          image={prod.image}
          alt={prod.name}
        />
      </Card>
    </>
  );
}
