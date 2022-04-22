import * as React from "react";
import { useState, createContext } from "react";

//context tiene que estar exportado para que lo puedan usar los componentes
export const Context = createContext();

export default function CartContext({ children }) {
  const [cart, setCart] = useState([]);
 

  //Limpiar carrito
  function clear() {
    setCart([]);
  }
  //Agregar producto al carrito
  function addItem(item) {
   
    alert("Agregado al carrito");
    setCart([...cart, item]);
    
  }
  //Eliminar producto del carrito
  function removeItem(id) {
       // elimino del carrito el elemento que sea igual a mi id
    // filter => te va a devolver un array que cumpla con lo que vos pases en la condición de la función callback
    // [1,2,3,4,5].filter((number)=>number === 5)) => devolver un nuevo array [5]
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <>
    {/* Crea un contexto y wrappea a sus hijos */}
      <Context.Provider value={{ cart,setCart, clear, addItem, removeItem}}>{children}</Context.Provider>
    </>
  );
}
