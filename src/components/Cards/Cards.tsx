import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PokedexContext } from '../../context/pokedex';
import { IPokemon } from '../../interfaces/IPokemon';
import './Cards.css'
// import { Card } from '../Card';
// import { fetchLocalPokemons } from '../Utils/fetchPokemons';

export const Cards: React.FC = () => {
  // const [localPokemons, setLocalPokemons] = useState<object[]>([]);
  const {
    pokemons,
    loading
  } = useContext(PokedexContext)
  
  console.log(pokemons);
  
  // useEffect(() => {
  //   if (pokemons.length > 0) {
  //     fetchLocalPokemons(pokemons, number, setLocalPokemons);
  //   }
  // }, [pokemons, number]);

  return (
    <>
      { loading 
        ? <h1>Loading</h1>
        : (
            <div className='card-section'>
              { pokemons && pokemons.map((poke: IPokemon) => (
                <Link
                  to={ `/details/${poke.id}` }
                  key={poke.id}
                  className='poke-cards'
                >
                  <div className='card-image-section'>
                    <img 
                      src={poke.sprites.front_default}
                      alt={poke.name}
                      className='card-image'
                    />
                    <span id='id'>#{poke.id}</span>
                  </div>
                  <div className='card-info-section'>
                    <span>{poke.name}</span>
                    <span>{poke.types.map((type) => type.type.name)}</span>
                  </div>
                </Link>
                // <div>
                //   <Card
                //     poke={poke}
                //   />
                //   {/* <h1>{name}</h1> */}
                // </div>
              ))}
            </div>
        )}
    </>
  );
}