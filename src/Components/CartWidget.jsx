
import * as React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartWidget=({cant})=>{
  
    return(
        <>
        <ShoppingCartOutlinedIcon style={{fontsize:"small"}}/> ({cant})
        </>
    )

};
export default CartWidget;