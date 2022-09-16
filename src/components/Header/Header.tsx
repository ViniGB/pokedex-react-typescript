import React from 'react';
import './Header.css';
import Squirtle from '../../images/squirtle.png'
import Bulbasaur from '../../images/bulbasaur.png'
import Charmander from '../../images/charmander.png'
import Blastoise from '../../images/blastoise.png'
import Venusaur from '../../images/venusaur.png'
import Charizard from '../../images/charizard.png'

export const Header: React.FC = () => {
  return (
    <header className='header-section'>
      <div>
        <img
          src= { Squirtle }
          alt='squirtle'
          id='squirtle'
        />
        <img
          src={ Bulbasaur }
          alt='bulbasaur'
          id='bulbasaur'
        />
        <img
          src={ Charmander }
          alt='charmander'
          id='charmander'
        />
      </div>
      <h1>Pokemon</h1>
      <div>
        <img
          src={ Blastoise }
          alt='blastoise'
          id='blastoise'
        />
        <img
          src={ Venusaur }
          alt='venusaur'
          id='venusaur'
        />
        <img
          src={ Charizard }
          alt='charizard'
          id='charizard'
        />
      </div>
    </header>
  );
}