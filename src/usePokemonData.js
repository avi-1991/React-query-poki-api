import { useQuery } from "react-query";
import axios from "axios";

const fetchByPokeId = (pokeUrl) => {
  return axios.get(pokeUrl);
};

export const usePokemonData = (pokeUrl) => {
  return useQuery(["pokemon", pokeUrl], () => fetchByPokeId(pokeUrl), {
    enabled: !!pokeUrl,
  });
};
