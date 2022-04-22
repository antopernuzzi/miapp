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
   // uso findIndex porque nos va a permitir acceder a la posición del array del producto que ya existe en nuestro cart
    // para modificar la cantidad del producto
    // en caso de que el producto no esté en nuestro cart, nos devuelve -1 y ahí agregamos nuestro producto al cart

    const index = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].count = newCart[index].count + item.count;
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  
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
