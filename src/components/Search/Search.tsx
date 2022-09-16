import React, { useContext, useEffect, useState } from 'react';
import { PokedexContext } from '../../context/pokedex';
import { ITypes } from '../../interfaces/ITypes';
import { getPokemons } from '../services/api';
import { fetchPokemons } from '../Utils/fetchPokemons';
import './Search.css'

export const Search: React.FC = () => {
  const [number, setNumber] = useState<number[]>([0, 30]);
  const [currIntURL, setCurrIntURL] = useState<string>('pokemon');
  const [typesLoading, setTypesLoading] = useState<Boolean>(false);
  const [types, setTypes] = useState<string[]>([]);
  const {
    setPokemons,
    setLoading,
  } = useContext(PokedexContext);

  useEffect(() => {
    fetchPokemons(setPokemons, number, setLoading, currIntURL);
    getPokemons('type', '').then((data) => setTypes(['All', ...data.results.map((type: ITypes) => type.name)]))
    if (types.length > 1) {
      setTypesLoading(false);
    }
  }, [number]);

  return (
    typesLoading
      ? <h1>Loading</h1>
      : (
        <div className='pokemon-search-section'>
          <form className='pokemon-form-section'>
            <input
              type='text'
              placeholder='Pokemon Name'
              name='name'
              className='pokemon-name-input'
            />
            <button
              type='button'
              className='pokemon-search-button'
            >
              Search
            </button>
          </form>
          <div className='type-buttons-section'>
            { types.map((type) => (
              <button
                key={ type }
                className='type-button'
              >
                { type }
              </button>
            )) }
          </div>
        </div>
      )
  );
}