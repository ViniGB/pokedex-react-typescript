import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPokemonDetails } from '../../interfaces/IPokemonDetails';
import { getPokemons } from '../services/api';
import './Card.css';

export const Card: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemonDetails[]>([]);

  type DetailsParams = {
    id: string;
  };

  const { id } = useParams<DetailsParams>();

  useEffect(() => {
    getPokemons('pokemon', `${id}`).then((data) => setPokemon([data]));
  }, [id]);
  
  return (
    pokemon[0] && 
    <div className='pokemon-details-section'>
      <div className='pokemon-details-img'>
        <img
          src={pokemon[0].sprites.other.home.front_default} 
          alt='card'
        />
      </div>
      <div className='pokemon-details-card'>
        <h3>{pokemon[0].name}</h3>
        <span>Types: {pokemon[0].types.map((type) => type.type.name)}</span>
        <span>Base Experience: {pokemon[0].base_experience}</span>
        <span>Height: {(pokemon[0].height)/10} m</span>
        <span>Held Items: {(pokemon[0].held_items.map((item) => item.item.name))}</span>
        <span>Weight: {(pokemon[0].weight)/10} kg</span>
        <span>Abilities: {(pokemon[0].abilities.map((ability) => ability.ability.name))}</span>
        { pokemon[0].stats.map((stat) => (
          <div>
            <span>{stat.stat.name}: {stat.base_stat}</span>
          </div>
        )) }
      </div>
    </div>
  );
}