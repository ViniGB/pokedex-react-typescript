import React from 'react';
import { IPokemon } from '../../interfaces/IPokemon';
// import { IPokemon } from '../../interfaces/IPokemon';

export const Card: React.FC<IPokemon> = (props: IPokemon) => {
  return (
    <div
      // key={poke.name}
    >
      {/* <p>{poke.id}</p> */}
      <h3>Card</h3>
      <img 
        alt='card'
      />
      <p>Types</p>
    </div>
  );
}