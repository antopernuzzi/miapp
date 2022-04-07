import * as React from 'react';
export default function Item({prod}){
    return(
        <>
        <h1>Item</h1>
        <div>
            <div>ID: {prod.id}</div>
            <div>
                <div>Name: {prod.name}</div>
                <div>STOCK:{prod.stock}</div>
                <div>Description:{prod.description}</div>
            </div>
        </div>
        </>
    );
}