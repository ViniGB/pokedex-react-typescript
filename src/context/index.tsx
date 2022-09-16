import React from 'react';
import { PokedexContextProviderProps, PokedexProvider } from './pokedex';

const PokeAppProvider = ({ children }: PokedexContextProviderProps) => (
  <>
    <PokedexProvider>
      { children }
    </PokedexProvider>
  </>
)

export default PokeAppProvider;