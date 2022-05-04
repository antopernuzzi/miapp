import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Item from './Components/Item';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtistListContainer from './Components/ArtistListContainer';
import ItemListContainer from './Components/ItemListContainer';
import CartContainer from './Components/CartContainer';
import CartContext from './Context/CartContext';
import Checkout from './Components/Checkout';

function App() {


  return (
    <>
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/category/artistas" element={<ArtistListContainer />} />
          <Route exact path="/cart" element={<CartContainer/>} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
      </CartContext>

    

    </>
  );
}

export default App;
