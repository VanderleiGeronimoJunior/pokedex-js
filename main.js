const pokeContainer = document.querySelector('#pokeContainer');
const pokeCount = 300;
const colors = {
    fire: '#fd7d24',
    grass: '#9bcc50',
    electric: '#eed535',
    water: '#4592c4',
    ground: '#f4e7da',
    rock: '#a38c21',
    fairy: '#fdb9e9',
    insect: '#f3ed41',
    poison: '#b97fc9',
    bug: '#f8d5a3',
    dragon: '#53a4cf',
    psychic: '#f366b9',
    flying: '#3dc7ef',
    fighting: '#d56723',
    normal: '#a4acaf',
    dark: '#40445A',
    ghost: '#7b62a3',
    ice: '#51c4e7',
    steel: '#9eb7b8'
}

const mainTypes = Object.keys(colors);

const fetchPoke = async () => {
    for (let i = 1; i <= pokeCount; i++) {
        await getPoke(i)
    }
}

const getPoke = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id} `
    const res = await fetch(url);
    const data = await res.json();
    creatPokeCard(data)
    // console.log(data);
}

const creatPokeCard = (poke) => {
    const card = document.createElement('div');
    card.classList.add('pokemon');


    const name = poke.name[0].toUpperCase() + poke.name.slice(1)
    const id = poke.id.toString().padStart(3, '0');


    const pokeTypes = poke.types.map(type => type.type.name);
    const type = mainTypes.find(type => pokeTypes.indexOf(type) > -1);
    const color = colors[type];

    card.style.backgroundColor = color;

    const abilities = poke.abilities.map((ability) => ability.ability.name).join(", ");
    const types = poke.types.map((type) => type.type.name).join(", ");
    const hp = poke.stats.find((stat) => stat.stat.name === "hp").base_stat;
    const attack = poke.stats.find((stat) => stat.stat.name === "attack").base_stat;
    const defense = poke.stats.find((stat) => stat.stat.name === "defense").base_stat;
    const speed = poke.stats.find((stat) => stat.stat.name === "speed").base_stat;
    
    const pokeInnerHTML = `
    <div class="imgContainer"></div>
            <figure class="pokemon-figure">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg" alt="${name}" ;>
            </figure>
            <div class="pokeInfo">
            <span class="number ">#${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type "><span style= "font-weight: bold;">Type:</span> <span>${types}</span></small>
            </div>
            <div class="info">
            <div class="subInfo"><span>Habilidades:</span> <span>${abilities}</span></div>
            <div class="subInfo"><span>HP:</span> <span>${hp}</span></div>
            <div class="subInfo"><span>Ataque:</span> <span>${attack}</span></div>
            <div class="subInfo"><span>Defesa:</span> <span>${defense}</span></div>
            <div class="subInfo"><span>Velocidade:</span> <span>${speed}</span></div>
            </div>
    `

                
    
    card.innerHTML = pokeInnerHTML

    pokeContainer.appendChild(card);
}


// async function searchPokemonByRegion() {
//     const regionSelect = document.getElementById("regionSelector");
//     const regionId = regionSelect.value;
//     const response = await fetch(`https://pokeapi.co/api/v2/pokedex/${regionId}`);
//     const region = await response.json();

//     if (region) {
//       const pokemonList = document.getElementById("pokeContainer");
//       pokemonList.innerHTML = ""

//       region.pokemon_entries.forEach(async function (entry) {
//           const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${entry.entry_number}`);
//           const pokemon = await pokemonResponse.json();

//           const abilities = pokemon.abilities.map((ability) => ability.ability.name).join(", ");
//           const types = pokemon.types.map((type) => type.type.name).join(", ");

//           const hp = pokemon.stats.find((stat) => stat.stat.name === "hp").base_stat;
//           const attack = pokemon.stats.find((stat) => stat.stat.name === "attack").base_stat;
//           const defense = pokemon.stats.find((stat) => stat.stat.name === "defense").base_stat;
//           const speed = pokemon.stats.find((stat) => stat.stat.name === "speed").base_stat;

//           const cardHTML = `
//           <div class="pokemon-card">
//             <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="pokemon-image">
//             <h2>${pokemon.name.toUpperCase()}</h2>
//             <p>Habilidades: ${abilities}</p>
//             <p>Tipos: ${types}</p>
//             <p>HP: ${hp}</p>
//             <p>Ataque: ${attack}</p>
//             <p>Defesa: ${defense}</p>
//             <p>Velocidade: ${speed}</p>
//           </div>
//         `;

//           pokemonList.innerHTML += cardHTML;
//       });
//     } else {
//       alert("Região não encontrada!");
//     }
//   }

//   // Adicionar evento de mudança ao seletor de região
//   const regionSelect = document.getElementById("regionSelector");
//   regionSelect.addEventListener("change", searchPokemonByRegion);

//   // Pesquisar Pokémon da região inicialmente
//   searchPokemonByRegion();
fetchPoke()
const id = 1;
const region = `https://pokeapi.co/api/v2/region/${id}/`;
const regiao = fetch(region, () => {
    console.log(region)
})
.then(res => res.json())
.then(res => console.log(res))
const pokemon = `https://pokeapi.co/api/v2/pokemon/`;
fetch(pokemon, () => {
    console.log(pokemon)
})
.then(res => res.json())
.then(res => console.log(res))

// console.log(pokemon);
