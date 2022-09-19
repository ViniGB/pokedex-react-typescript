import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

export const Nav: React.FC = () => {
  const { pathname } = useLocation();

  const pokedexLink = pathname === '/'
    ? 'pokedex-link'
    : 'default-link'

  const favoritesLink = pathname === '/favorites'
    ? 'favorites-link'
    : 'default-link'

  return (
    <nav className='nav-section'>
      <Link
        to='/'
        className={ pokedexLink }
      >
        Pokedéx
      </Link>
      <Link
        to='/favorites'
        className={ favoritesLink }
      >
        Favorites
      </Link>
    </nav>
  );
}