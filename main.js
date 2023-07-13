const pokeContainer = document.querySelector('#pokeContainer');
const pokeCount = 150;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
    dark: '#40445A',
    ghost: '#40445A',
    ice: '#94befdb1',
    steel: '#DEDDDE'
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
    console.log(data);
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
    // const types = poke.types.map((type) => type.type.name).join(", ");
    const hp = poke.stats.find((stat) => stat.stat.name === "hp").base_stat;
    const attack = poke.stats.find((stat) => stat.stat.name === "attack").base_stat;
    const defense = poke.stats.find((stat) => stat.stat.name === "defense").base_stat;
    const speed = poke.stats.find((stat) => stat.stat.name === "speed").base_stat;

    const pokeInnerHTML = `
            <div class="imgContainer">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png" alt="${name}" style="width: 100px;">
                
            </div>
            <div class="info">
                <span class="number">#${id}</span>
                <h3 class="name">${name}</h3>
                <small class="type">Type: <span>${type}</span></small>
                <p>Habilidades: ${abilities}</p>
                <p>HP: ${hp}</p>
                <p>Ataque: ${attack}</p>
                <p>Defesa: ${defense}</p>
                <p>Velocidade: ${speed}</p>
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
