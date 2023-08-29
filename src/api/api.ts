export async function getPokemonByNumber(id: number) {
  const pokeAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    });

  return pokeAPI;
}

