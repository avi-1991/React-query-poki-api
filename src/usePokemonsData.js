import { useQuery } from "react-query";
import axios from "axios";

const fetchPokemons = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon/");
};

export const usePokemonsData = () => {
  return useQuery("pokemons", fetchPokemons);
};
