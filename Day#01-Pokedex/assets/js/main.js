const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

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

function loadPokemonCards(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemon).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonCards(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonCards(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
      loadPokemonCards(offset, limit)
    }
})






