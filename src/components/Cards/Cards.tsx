import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PokedexContext } from '../../context/pokedex';
import { IPokemon } from '../../interfaces/IPokemon';
import { PokeLoading } from '../PokeLoading';
import './Cards.css'

export const Cards: React.FC = () => {
  const {
    pokemons,
    loading
  } = useContext(PokedexContext)

  return (
    <>
      { loading 
        ? <PokeLoading />
        : (
            <div className='card-section'>
              { pokemons && pokemons.map((poke: IPokemon) => (
                <Link
                  to={ `/details/${poke.id}` }
                  key={poke.id}
                  className='poke-cards'
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