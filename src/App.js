import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Item from './Components/Item';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtistListContainer from './Components/ArtistListContainer';
import ItemListContainer from './Components/ItemListContainer';

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/category/artistas" element={<ArtistListContainer />} />
        </Routes>
      </BrowserRouter>
      

    

    </>
  );
}

export default App;
