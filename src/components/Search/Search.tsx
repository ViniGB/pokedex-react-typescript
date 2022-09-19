import React, { useContext, useEffect, useState } from 'react';
import { PokedexContext } from '../../context/pokedex';
import { ITypes } from '../../interfaces/ITypes';
import { getPokemons } from '../services/api';
import { getFavoritePokemons } from '../Utils/getFavoritePokemons';
import { fetchPokemons, searchPokemonByName } from '../Utils/fetchPokemons';
import './Search.css'
import { Loading } from '../Loading';

export const Search: React.FC = () => {
  const [number, setNumber] = useState<number[]>([0, 30]);
  const [currIntURL, setCurrIntURL] = useState<string>('pokemon');
  const [typesLoading, setTypesLoading] = useState<Boolean>(false);
  const [types, setTypes] = useState<string[]>([]);
  const [type, setType] = useState<string>('All');
  const [pokeName, setPokeName] = useState<string>('');
  const [prevButton, setPrevButton] = useState<boolean>(true);
  const [nextButton, setNextButton] = useState<boolean>(false);
  const {
    setPokemons,
    setLoading,
    pokemons,
  } = useContext(PokedexContext);

  useEffect(() => {
    const favoritePokemon = getFavoritePokemons('favoritePokemons');
    if (favoritePokemon === null) localStorage.setItem('favoritePokemons', JSON.stringify([]));
    if (type !== 'search') fetchPokemons(setPokemons, number, setLoading, currIntURL);
    getPokemons('type', '')
      .then((data) => setTypes(['All', ...data.results.slice(0, 17).map((type: ITypes) => type.name)]))
    if (types.length > 1) {
      setTypesLoading(false);
    }
    if (number[0] < 1) {
      setPrevButton(true);
    }
  }, [number, type, setType, currIntURL]);

  useEffect(() => {
    if (pokemons.length < 30) {
      setNextButton(true);
    } else {
      setNextButton(false);
    }
  }, [nextButton, pokemons])

  const handleClick = (event: any) => {
    const id = event.target.id;
    setNumber([0, 30]);
    if (id !== type) {
      setType(id);
      if (id === 'All') {
        setCurrIntURL('pokemon');
        setLoading(true);
        return fetchPokemons(setPokemons, number, setLoading, currIntURL);
      } else {
        setCurrIntURL(`type/${id}`);
        setLoading(true);
        return fetchPokemons(setPokemons, number, setLoading, currIntURL);
      }
    }
    return null;
  };

  const handleSearchClick = () => {
    setType('search');
    searchPokemonByName(setPokemons, pokeName, setLoading);
  };

  const handlePreviousClick = () => {
    setNextButton(false);
    setNumber([number[0] - 30, number[1] - 30]);
  };

  const handleNextClick = () => {
    setPrevButton(false);
    setNumber([number[0] + 30, number[1] + 30]);
  };

  return (
    typesLoading
      ? <Loading />
      : (
        <div className='pokemon-search-section'>
          <form className='pokemon-form-section'>
            <input
              type='text'
              placeholder='Pokemon Name'
              name='name'
              value={pokeName}
              className='pokemon-name-input'
              onChange={ ({ target }) => setPokeName(target.value) }
            />
            <button
              type='button'
              className='pokemon-search-button'
              onClick={ handleSearchClick }
            >
              Search
            </button>
          </form>
          <div className='type-buttons-section'>
            { types.map((type) => (
              <button
                key={ type }
                id={ type }
                className='type-button'
                onClick={ handleClick }
              >
                { type }
              </button>
            )) }
          </div>
          <div className='navigation-buttons'>
            <button
              className={ prevButton ? 'nav-buttons-disabled' : 'nav-buttons'}  
              onClick={ handlePreviousClick }
              disabled={ prevButton }
            >
              Previous
            </button>
            <button
              className={ nextButton ? 'nav-buttons-disabled' : 'nav-buttons'} 
              onClick={ handleNextClick }
              disabled={ nextButton }
            >
              Next
            </button>
          </div>
        </div>
      )
  );
}