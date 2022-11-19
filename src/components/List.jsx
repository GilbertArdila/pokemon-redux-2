import React,{useState} from 'react';
import { Cart } from './Cart';
import '../styles/List.css';
import { useSelector } from 'react-redux';
import { Searcher } from './Searcher';

const List = () => {
const pokemons = useSelector(state => state.pokemons)
const [searchedPokemon, setSearchedPokemon] = useState('');

const pokemonSearched = pokemons.filter((pokemon) => {
  return (pokemon.name.toLowerCase().includes(searchedPokemon.toLowerCase()))
});




  return (
    <>
    <Searcher value={searchedPokemon} onChange={(e) => setSearchedPokemon(e.target.value)}/>

    <div className='List'>
      {!pokemonSearched.length ? <p>Lo sentimos tu busqueda no coinide...</p>:null}
      
        {pokemonSearched.map((pokemon) => (
            <Cart pokemon={pokemon} key={pokemon.name}/>
        ))}
      
    </div>
    </>
    
  )
}



export { List}