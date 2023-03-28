
let searchPokemon = prompt("Welke pokemon wil je zien?");
let url = "https://pokeapi.co/api/v2/pokemon/" + searchPokemon;
fetch(url)
    .then(data=>data.json())
    .then(data=>show(data));

function show(pokemon){
    console.log(pokemon);
    const h1View = document.querySelector("h1");
    const heightView = document.querySelector(".height");
    const messageView = document.querySelector(".message");
    heightView.innerHTML = `Height:   ${pokemon.height}`;
    h1View.textContent = pokemon.name;

    if(pokemon.height < 5) {
        messageView.textContent = `${pokemon.name} is een kleine pokemon`;
    }else if(pokemon.height < 10){
        messageView.textContent = `${pokemon.name} is een gemiddeld pokemon`;
    }else{
        messageView.textContent = `${pokemon.name} is een grote pokemon`;
    }

    const imgTag = document.querySelector(".pokemon-img");
    imgTag.src = pokemon.sprites.front_shiny;

    const abilitiesView = document.querySelector(".abilities")
    for (let i = 0; i < pokemon.abilities.length; i++) {
        const ability = pokemon.abilities[i];
        abilitiesView.innerHTML += `<li> ${ability.ability.name} </li>`;
        console.log(ability.ability.name);
    }


    console.log("----");
    for(const property in pokemon){
        console.log(property);
        console.log(pokemon[property]);
    }

}