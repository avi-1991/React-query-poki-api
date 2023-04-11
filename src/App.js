import { useState } from "react";
import { usePokemonsData } from "./usePokemonsData";
import { usePokemonData } from "./usePokemonData";

const App = () => {
  const [pokeUrl, setPokeUrl] = useState();
  const { isLoading, data } = usePokemonsData();
  const { data: pokeData } = usePokemonData(pokeUrl);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <label>
        Select a Pokemon:
        <select onChange={(e) => setPokeUrl(e.target.value)}>
          {data?.data.results.map((poke) => {
            return (
              <option key={poke.url} value={poke.url}>
                {poke.name}
              </option>
            );
          })}
        </select>
      </label>
      <div>{JSON.stringify(pokeData)}</div>
    </>
  );
};

export default App;
