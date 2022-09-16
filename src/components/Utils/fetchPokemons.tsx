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
  // setPokemons(arrayPokemons);
}

const fetchByPokemons = async (currIntURL: string, number: number[]) => {
  const { results } = await getPokemons(currIntURL, `?limit=${number[1]}&offset=${number[0]}`);
  // let arrayPokemons: object[] = [];
  // for (let index = number[0]; index < number[1]; index += 1) {
  //   const poke = await listPokemons(results[index].url);
  //   arrayPokemons.push(poke);
  // }
  const detailedPokemons = Promise.all(results.map((pokemon: ITypes) => {
    const poke = listPokemons(pokemon.url);
    return poke;
  }));
  return detailedPokemons;
}

const fetchByTypes = async (currIntURL: string, number: number[]) => {
  const { results } = await getPokemons(currIntURL, '');
  let arrayPokemons: object[] = [];
  for (let index = number[0]; index < number[1]; index += 1) {
    arrayPokemons.push(results[index]);
  }
  const detailedPokemons = Promise.all(arrayPokemons.map((pokemon: any) => {
    const poke = listPokemons(pokemon.url);
    return poke;
  }));
  return detailedPokemons;
}

// export const fetchLocalPokemons = (pokemons: IPokemon[], number: number[], setLocalPokemons: any) => {
//   let arrayPokemons: object[] = [];
//   for (let index = number[0]; index < number[1]; index += 1) {
//     const currPoke = pokemons.filter((pokemon) => pokemon.id === index)
//     arrayPokemons.push(...currPoke);
//   }
//   setLocalPokemons(arrayPokemons);
// }