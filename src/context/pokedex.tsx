import React, { useState, createContext, Dispatch, SetStateAction } from 'react';
// import { IPokemon } from '../interfaces/IPokemon';

interface PokedexContextData {
  pokemons: [];
  loading: boolean;
  setPokemons: Dispatch<SetStateAction<[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const INITIAL_POKEMONS_VALUE: [] = [];

const POKEDEX_INITIAL_VALUES = {
  pokemons: INITIAL_POKEMONS_VALUE,
  loading: true,
  setPokemons: () => console.log('TBD'),
  setLoading: () => console.log('TBD'),
}

export type PokedexContextProviderProps = {
  children: React.ReactNode
}

const PokedexContext = createContext<PokedexContextData>(POKEDEX_INITIAL_VALUES);

const PokedexProvider = ({ children }: PokedexContextProviderProps) => {
  const [pokemons, setPokemons] = useState<[]>(INITIAL_POKEMONS_VALUE);
  const [loading, setLoading] = useState<boolean>(true);

  const providerValue = {
    pokemons,
    loading,
    setPokemons,
    setLoading
  };

  return (
    <PokedexContext.Provider value={ providerValue }>
      { children }
    </PokedexContext.Provider>
  );
}

export { PokedexContext, PokedexProvider };