
import * as React from 'react';
import ItemListContainer from './ItemListContainer';
import productsList from '../data/productsList';


export default function MainContainer (){
 

  const products=productsList;
    return(
        <>
        Mi body
        <ItemListContainer listProducts={products} />
        </>
    );

}
