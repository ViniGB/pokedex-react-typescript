import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IPokemon } from '../../interfaces/IPokemon';
import { getLocalStorage } from '../Utils/fetchFavorites';
import '../Cards/Cards.css';
import './Favcards.css';

export const Favcards: React.FC = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<IPokemon[]>([]);
  const [favLoading, setFavLoading] = useState<boolean>(true);

  useEffect(() => {
    const favoritePokemons = getLocalStorage('favoritePokemons');
    if (favoritePokemons) {
      setFavoritePokemons(favoritePokemons);
      setFavLoading(false);
    }
  }, []);

  return (
    <>
      { favLoading 
        ? <h1>Loading</h1>
        : (
            <div className='card-fav-section'>
              { favoritePokemons && favoritePokemons.map((poke: IPokemon) => (
                <Link
                  to={ `/details/${poke.id}` }
                  key={poke.id}
                  className='poke-cards'
                >
                  <div className='card-image-section'>
                    <img 
                      src={poke.sprites.other.home.front_default}
                      alt={poke.name}
                      className='card-image'
                    />
                    <span id='id'>#{poke.id}</span>
                  </div>
                  <div className='card-info-section'>
                    <span id='name'>{poke.name}</span>
                    <span id='types'>{poke.types.map((type) => type.type.name).join(', ')}</span>
                  </div>
                </Link>
              ))}
            </div>
        )}
    </>
  );
}