import { IPokeTypes } from "../../interfaces/IPokeTypes";
import { ITypes } from "../../interfaces/ITypes";
import { getPokemons, listPokemons } from "../services/api";

export const fetchPokemons = async (
  setPokemons: any, 
  number: number[], 
  setLoading: any, 
  currIntURL: string
) => {
  let result: object[] = [];
  if (currIntURL === 'pokemon') {
    const pokes = await fetchByPokemons(currIntURL, number);
    result = pokes;
  } 
  else {
    const pokes = await fetchByTypes(currIntURL, number);
    result = pokes
  }
  setPokemons(result);
  setLoading(false);
}

const fetchByPokemons = async (currIntURL: string, number: number[]) => {
  const { results } = await getPokemons(currIntURL, `?limit=30&offset=${number[0]}`);
  const detailedPokemons = Promise.all(results.map((pokemon: ITypes) => {
    const poke = listPokemons(pokemon.url);
    return poke;
  }));
  return detailedPokemons;
}

const fetchByTypes = async (currIntURL: string, number: number[]) => {
  const { pokemon } = await getPokemons(currIntURL, '');
  let arrayPokemons: IPokeTypes[] = [];
  for (let index = number[0]; index < number[1]; index += 1) {
    if (pokemon[index]) arrayPokemons.push(pokemon[index]);
  }
  console.log(arrayPokemons);
  const detailedPokemons = Promise.all(arrayPokemons.map((pokemon: IPokeTypes) => {
    if (pokemon !== undefined) {
      const poke = listPokemons(pokemon.pokemon.url);
      return poke;
    }
    return null;
  }));
  return detailedPokemons;
}

export const searchPokemonByName = async (
  setPokemons: any, 
  pokeName: string, 
  setLoading: any, 
) => {
  const pokemon = await getPokemons('pokemon', pokeName);
  setPokemons([pokemon]);
  setLoading(false);
}