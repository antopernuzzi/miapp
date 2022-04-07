
import * as React from 'react';
import ItemListContainer from './ItemListContainer';


export default function MainContainer (){
 
   const products = [
    {id: 1,name: "Product 1", description: "Este es el producto 1",stock: 10},
  
    { id: 2, name: "Product 2", description: "Este es el producto 2", stock: 20 },
  
    { id: 3, name: "Product 3", description: "Este es el producto 3", stock: 30 },
  ];
    return(
        <>
        Mi body
        <ItemListContainer listProducts={products}/>
        </>
    );

}
