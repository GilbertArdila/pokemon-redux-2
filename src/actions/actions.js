import { getPokemonDetails } from "../api/api";
import { SET_POKEMONS,SET_LOADING,SET_ERROR,SET_FAVORITE,SET_MODE } from "../types/types";

export const setPokemons =  (payload) => ({
     type: SET_POKEMONS,
     payload
});

//en este actio creator llamamos al action anterior y le mandamos el detalle de cada pokemon usando redux-thunk
export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
     dispatch(setLoading(true))
    try {
     const pokemonDetailed = await Promise.all(pokemons.map(pokemon => getPokemonDetails(pokemon)));

     dispatch(setPokemons(pokemonDetailed))
     dispatch(setLoading(false))
    } catch (error) {
     console.log(error)
     dispatch(setLoading(false))
     dispatch(setError('ha ocurrido un error, intenta más tarde...'))
    }

}

export const setLoading = (payload) => ({
     type: SET_LOADING,
     payload
});

export const setError = (payload) => ({
     type: SET_ERROR,
     payload
});

export const setFavorite = (payload) => ({
     type: SET_FAVORITE,
     payload
});

 export const setMode = (payload) => ({
     type: SET_MODE,
     payload
 });