import {
  SET_POKEMONS,
  SET_LOADING,
  SET_ERROR,
  SET_FAVORITE,
  SET_MODE
} from "../types/types";

const initialState = {
  pokemons: [],
  loading: false,
  error: "",
  mode: "light",
 
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case SET_FAVORITE:
      const newPokemonList = [...state.pokemons];
      const currentPokemonIndex = newPokemonList.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });
      if (currentPokemonIndex < 0) {
        return state;
      }
      //hacemos un toggle de la propiedad favorite
      newPokemonList[currentPokemonIndex].favorite =
        !newPokemonList[currentPokemonIndex].favorite;

      return {
        ...state,
        pokemons: newPokemonList,
      };

    case SET_MODE:
      return {
        ...state,
        mode: action.payload,
      };

   
    default:
      return state;
  }
};
