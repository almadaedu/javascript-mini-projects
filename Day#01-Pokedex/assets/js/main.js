const pokemonList = document.getElementById("pokemonList");


function convertPokemon(pokemon) {
  return `
    <li class="pokemon ${pokemon.type}">
        <span class="number">#00${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type  ${type}">${type}</li>`).join(' ')}
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.photo}.png"
                alt="${pokemon.name}">
        </div>
    </li>
    `;
}

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemon).join('')
});
