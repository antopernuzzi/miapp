
import * as React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Context } from '../Context/CartContext';
const CartWidget=()=>{
//tomo la lista del carrito del contexto, estoy suscripto a lo que tenga el contexto y si cualquier componente lo modifica yo lo veo
  let {cart} = React.useContext(Context);
  
  
    return(
        <>
        <ShoppingCartOutlinedIcon style={{fontsize:"small"}}/> ({cart.length})
        </>
    )

};
export default CartWidget;