import { IPokemon } from "../../interfaces/IPokemon";

export const getLocalStorage = (key: string): IPokemon[] | null => {
  const data: string | null = localStorage.getItem(key);
  if (data !== null) {
    return JSON.parse(data);
  }
  return null;
}