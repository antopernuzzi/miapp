
import * as React from 'react';
import Main from './Main';


export default function MainContainer (){
   const listPaintings=["abstracto","floral","paisajismo" ];
    return(
        <>
        Main Container - mi body 
        <Main listProducts={listPaintings}/>
        </>
    );

}
