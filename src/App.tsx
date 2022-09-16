import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Favorites } from './pages/Favorites';
import PokeAppProvider from './context';
import { Home } from './pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <PokeAppProvider>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/favorites' element={ <Favorites /> } />
        </Routes>
      </PokeAppProvider>
    </BrowserRouter>
  )
}

export default App;