
import * as React from 'react';
import ItemListContainer from './ItemListContainer';


export default function MainContainer (){
   const listPaintings=["abstracto","floral","paisajismo" ];
    return(
        <>
        Mi body
        <ItemListContainer listProducts={listPaintings}/>
        </>
    );

}
