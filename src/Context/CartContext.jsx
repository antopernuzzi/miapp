import * as React from "react";
import { useState, createContext } from "react";

//context tiene que estar exportado para que lo puedan usar los componentes
export const Context = createContext();

export default function CartContext({ children }) {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const TAX_RATE = 0.21;

  //Limpiar carrito
  function clear() {
    setCart([]);
  }
  //Agregar producto al carrito
  function addItem(item, quantity) {
    // uso findIndex porque nos va a permitir acceder a la posición del array del producto que ya existe en nuestro cart
    // para modificar la cantidad del producto
    // en caso de que el producto no esté en nuestro cart, nos devuelve -1 y ahí agregamos nuestro producto al cart

    const index = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].quantity = newCart[index].quantity + item.quantity;
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

  //Calcula la cantidad de items del carro
  function calcTotalItems() {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    setTotal(total);
  }
  //Calculo subtotal de la compra , tax y total
  function calcSubtotal() {
    let subtotalPrice = 0;
    cart.forEach((item) => {
        subtotalPrice += item.price * item.quantity;
    });
    setSubtotal(subtotalPrice);
    let taxPrice = subtotalPrice * TAX_RATE;
    setTax(taxPrice);
    setTotalPrice(subtotalPrice + taxPrice);
  }
 
  //Cada vez que cambie el carro actualiza el total de items, subtotal y precio total
  React.useEffect(() => {
    calcTotalItems();
    calcSubtotal();
   
  }, [cart]);

  return (
    <>
      {/* Crea un contexto y wrappea a sus hijos */}
      <Context.Provider
        value={{ cart, clear, addItem, removeItem, totalItems, subtotal, totalPrice,TAX_RATE, tax}}
      >
        {children}
      </Context.Provider>
    </>
  );
}
