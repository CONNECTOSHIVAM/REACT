import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./PokemonList.css"
import Pokemon from '../Pokemon/Pokemon';

const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function downloadPokemons(){
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        const pokemonResults = response.data.results;
        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonResultPromise); 
        const finalData = pokemonData.map((pokdata) => {
            const pokemon = pokdata.data;
            return {
                   id: pokemon.id,
                   name: pokemon.name,
                   image: pokemon.sprites.other.dream_world.front_default,
                   types: pokemon.types,
                }
        });
        console.log(finalData);
        
        setPokemonList(finalData);    
        setIsLoading(false);
        
    }

    useEffect(()=>{
        downloadPokemons();
    }, [])

    


  return (
    <div className='pokemon-list-wrapper'>
      <div>Pokemon List</div> {isLoading ? "Loading..." : pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id}/>)}
    </div>
  )
}

export default PokemonList
