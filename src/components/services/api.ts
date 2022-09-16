import axios from 'axios';
// import { IPokemon } from '../../interfaces/IPokemon';

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});

export async function getPokemons(intURL: string, searchTerm: string) {
  try {
    const result = await api.get(`/${intURL}/${searchTerm}`);
    return result.data;
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};

export const listApi = axios.create();

export async function listPokemons(url: string) {
  try {
    const result = await listApi.get(url);
    return result.data;
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
}