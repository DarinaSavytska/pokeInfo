export async function getPokemonByNumber(id: number) {
  const pokeAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
    res => res.json()
  );

  return pokeAPI;
}
