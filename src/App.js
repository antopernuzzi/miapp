import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import MainContainer from './Components/MainContainer';
import Item from './Components/Item';
import ItemDetailContainer from './Components/ItemDetailContainer';

function App() {


  return (
    <>
    <NavBar/>
    <MainContainer/>
   <ItemDetailContainer/>
    
    </>
  );
}

export default App;
