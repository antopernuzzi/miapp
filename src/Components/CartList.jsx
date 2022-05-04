import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Context } from "../Context/CartContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function CartList() {
  let { cart, subtotal, totalPrice, tax, TAX_RATE ,removeItem} = React.useContext(Context);

  

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={4}>
                Detalle
              </TableCell>
              <TableCell align="right">Eliminar</TableCell>
              <TableCell align="right">Precio</TableCell>
            </TableRow>
            <TableRow>
            <TableCell></TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="right">Precio unitario</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item) => (
              <TableRow key={item.id}>
                  <TableCell><Avatar>
                  {item.image}
                    </Avatar></TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => removeItem(item.id)}edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                  {ccyFormat(item.price * item.quantity)}
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} />
              
              <TableCell colSpan={4}>Subtotal</TableCell>
              <TableCell align="right">{ccyFormat(subtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3}>Tax</TableCell>
              <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                0
              )} %`}</TableCell>
              <TableCell align="right">{ccyFormat(tax)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell align="right">{ccyFormat(totalPrice)}</TableCell>
            </TableRow>
          </TableBody>
          
        </Table>
        <Link to={"/checkout"}>
        <Button style={{
           justifyContent: "center",
           alignItems: "center",
           marginTop: "10px",
         }}variant="contained">Comprar</Button>
         </Link>
      </TableContainer>
 
    </>
  );
}
