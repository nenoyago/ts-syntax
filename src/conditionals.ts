import fetch from 'node-fetch';

interface IPokemonResults {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}

type FetchPokemonResult<T> = T extends undefined
  ? Promise<IPokemonResults>
  : void;

function fetchPokemon<T extends undefined | ((data: IPokemonResults) => void)>(
  url: string,
  cb?: T
): FetchPokemonResult<T> {
  if (cb) {
    fetch(url)
      .then(res => res.json())
      .then(data => cb(data as IPokemonResults));

    return undefined as FetchPokemonResult<T>;
  } else {
    return fetch(url).then(res => res.json()) as FetchPokemonResult<T>;
  }
}

// fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=10', data => {
//   data.results.forEach(pokemon => console.log(pokemon));
// });

(async function () {
  const data = <IPokemonResults>(
    await fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=10')
  );
  data.results.forEach(pokemon => console.log(pokemon));
})();
