import React from 'react';
import ClosedPokeball from '../../images/closedpokeball.png';
import OpenedPokeball from '../../images/openedpokeball.png';
import './PokeLoading.css';

export const PokeLoading: React.FC = () => {
  return (
    <section>
      <img 
        src={ OpenedPokeball }
        alt='opened-pokeball'
        className='opened-pokeball'
      />
      <img 
        src={ ClosedPokeball }
        alt='closed-pokeball'
        className='closed-pokeball'
      />
    </section>
  );
}