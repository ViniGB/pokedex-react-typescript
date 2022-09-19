import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPokemonDetails } from '../../interfaces/IPokemonDetails';
import { getPokemons } from '../services/api';
import EmptyStar from '../../images/emptyStar.png';
import FilledStar from '../../images/filledStar.png';
import './Card.css';
import { getFavoritePokemons } from '../Utils/getFavoritePokemons';
import { IPokemon } from '../../interfaces/IPokemon';
import { PokeLoading } from '../PokeLoading';

export const Card: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemonDetails[]>([]);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [pokeLoading, setPokeLoading] = useState<Boolean>(true);

  type DetailsParams = {
    id: string;
  };

  const { id } = useParams<DetailsParams>();

  useEffect(() => {
    const favoritePokemons = getFavoritePokemons('favoritePokemons');
    if (favoritePokemons) {
      const checkIfFavorite = favoritePokemons
        .some((pokemon: IPokemon) => pokemon.id === Number(id))
      if (checkIfFavorite) setFavorite(true);
    }
    getPokemons('pokemon', `${id}`).then((data) => setPokemon([data]));
    if (pokemon[0]) setPokeLoading(false);
  }, [id, pokemon]);

  const handleFavClick = () => {
    const favoritePokemons = getFavoritePokemons('favoritePokemons');
    setFavorite(!favorite);
    if (favoritePokemons) {
      if (!favorite) {
        localStorage.setItem('favoritePokemons', JSON.stringify([...favoritePokemons, pokemon[0]]));
      } else {
        const filteredFavPokemons = favoritePokemons
          .filter((pokemon) => pokemon.id !== Number(id));
        localStorage.setItem('favoritePokemons', JSON.stringify(filteredFavPokemons));
      }
    };
  };
  
  return (
    <>
      { pokeLoading
        ? <PokeLoading />
        : (
          pokemon[0] && 
          <div className='pokemon-details-section'>
            <div className={`pokemon-details-img ${pokemon[0].types[0].type.name}`}>
              <img
                src={pokemon[0].sprites.other.home.front_default} 
                alt='card'
              />
            </div>
            <div className='pokemon-details-card'>
              <div>
                <img
                  src={ favorite ? FilledStar : EmptyStar }
                  alt='favorite-pokemon'
                  className='heart-icon'
                  onClick={ handleFavClick }
                />
              </div>
              <h3>{pokemon[0].name}</h3>
              <span>Types: {pokemon[0].types.map((type) => type.type.name).join(', ')}</span>
              <span>Base Experience: {pokemon[0].base_experience}</span>
              <span>Height: {(pokemon[0].height)/10} m</span>
              <span>Held Items: { pokemon[0].held_items[0]
                ? (pokemon[0].held_items.map((item) => item.item.name).join(', '))
                : 'None'
              }</span>
              <span>Weight: {(pokemon[0].weight)/10} kg</span>
              <span>Abilities: {(pokemon[0].abilities.map((ability) => ability.ability.name).join(', '))}</span>
              { pokemon[0].stats.map((stat) => (
                <div key={stat.stat.name}>
                  <span>{stat.stat.name}: {stat.base_stat}</span>
                </div>
              )) }
            </div>
          </div>
        )
      }
    </>
  );
}