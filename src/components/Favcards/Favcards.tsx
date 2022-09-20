import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IPokemon } from '../../interfaces/IPokemon';
import { getFavoritePokemons } from '../Utils/getFavoritePokemons';
import '../Cards/Cards.css';
import './Favcards.css';
import { PokeLoading } from '../PokeLoading';

export const Favcards: React.FC = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<IPokemon[]>([]);
  const [favLoading, setFavLoading] = useState<boolean>(true);

  useEffect(() => {
    const favoritePokemons = getFavoritePokemons('favoritePokemons');
    if (favoritePokemons) {
      setFavoritePokemons(favoritePokemons);
      setFavLoading(false);
    }
  }, []);

  return (
    <>
      { favLoading 
        ? <PokeLoading />
        : (
            <div className='card-fav-section'>
              { favoritePokemons.map((poke: IPokemon) => (
                <Link
                  to={ `/details/${poke.id}` }
                  key={poke.id}
                  className='poke-cards'
                  data-testid='fav-pokemons'
                >
                  <div className={`card-image-section ${poke.types[0].type.name}`}>
                    <img 
                      src={poke.sprites.other.home.front_default}
                      alt={poke.name}
                      className='card-image'
                    />
                    <span id='id'>#{poke.id}</span>
                  </div>
                  <div className='card-info-section'>
                    <span 
                      id='name'
                      data-testid={`${poke.name}-name-span`}
                    >
                      {poke.name}
                    </span>
                    <span id='types'>{poke.types.map((type) => type.type.name).join(', ')}</span>
                  </div>
                </Link>
              ))}
            </div>
        )}
    </>
  );
}