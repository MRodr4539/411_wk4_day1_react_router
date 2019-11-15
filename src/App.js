import React from 'react';
import Navigation from './components/Navigation';
import Router from './Router';
import Car from './components/Car';
import { BrowserRouter } from 'react-router-dom';


import './App.css';
// Write imports for Router & BrowserRouter here //


function App() {
  return (
    <BrowserRouter>
      <Router/>
      <Navigation/>
      <Car/>
    </BrowserRouter>
  );
}

export default App;
