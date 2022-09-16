import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Favorites } from './pages/Favorites';
import PokeAppProvider from './context';
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <PokeAppProvider>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/favorites' element={ <Favorites /> } />
          <Route path='/details/:id' element={ <Details /> } /> 
        </Routes>
      </PokeAppProvider>
    </BrowserRouter>
  )
}

export default App;