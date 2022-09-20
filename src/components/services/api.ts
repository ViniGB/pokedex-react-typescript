import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});

export async function getPokemons(intURL: string, searchTerm: string) {
  try {
    const { data } = await api.get(`/${intURL}/${searchTerm}`);
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const listApi = axios.create();

export async function listPokemons(url: string) {
  try {
    const { data } = await listApi.get(url);
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
}