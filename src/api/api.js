import axios from 'axios';


export const getPokemon = async (offset) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=40&offset=${offset}`);
        return response.data.results;
    } catch (error) {
       
        return console.log(error);
    }
}



export const getPokemonDetails = async (pokemon) => {
    try {
        const res = await axios.get(pokemon.url);
        return res.data;
    } catch (err) {
        return console.log(err);
    }
  }