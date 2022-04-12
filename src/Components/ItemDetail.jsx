import * as React from 'react';
import ItemCount from './ItemCount';
export default function ItemDetail({prod}){
    return(
        <>
        <div>
            <img src={prod.image} alt={prod.name} />
            <div>
                <h2>{prod.name}</h2>
                <h3>${prod.price}</h3>
                <p>{prod.description}</p>
                <ItemCount initial={1} stock={prod.stock}/> 
            </div>
        </div>
        
        </>
    );
}