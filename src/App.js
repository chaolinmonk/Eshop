import React from 'react';
import NavBar from './Components/NavBar/NavBar.jsx';
import Tarjeta from './Components/Tarjeta/Tarjeta.jsx';
import './App.css';

function App() {
  return (
    <div>
      <NavBar texto="hola"/>
      <Tarjeta img="a.jpg"/>
      <Tarjeta img="a.jpg"/>
      <Tarjeta img="a.jpg"/>
      <Tarjeta img="a.jpg"/>
      <Tarjeta img="a.jpg"/>
      <Tarjeta img="a.jpg"/>
    </div>
  );
}

export default App;