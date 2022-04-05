
import * as React from 'react';
import ItemCount from './ItemCount';


export default function ItemListContainer({listProducts}){

    return(
        <>
        {JSON.stringify(listProducts)}
        <ItemCount initial={1} stock={10}/>
        </>
    );

}