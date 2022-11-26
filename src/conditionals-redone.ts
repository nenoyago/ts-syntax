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

function fetchPokemon(url: string, cb: (data: IPokemonResults) => void): void;
function fetchPokemon(url: string): Promise<IPokemonResults>;
function fetchPokemon(
  url: string,
  cb?: (data: IPokemonResults) => void
): unknown {
  if (cb) {
    fetch(url)
      .then(res => res.json())
      .then(data => cb(data as IPokemonResults));

    return undefined;
  } else {
    return fetch(url).then(res => res.json());
  }
}

fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=10', data => {
  data.results.forEach(pokemon => console.log(pokemon));
});

(async function () {
  const data = await fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=10');
  data.results.forEach(pokemon => console.log(pokemon));
})();
