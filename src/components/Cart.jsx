import React, { useState, useEffect } from 'react';
import '../styles/Cart.css';
import { FavoriteIcon } from './FavoriteIcon';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions/actions';


const Cart = ({ pokemon }) => {

  const [styles, setStyles] = useState('normal');

  const dispatch = useDispatch();


  const abilities = pokemon.abilities.map((ability) => ability.ability.name).join('-');

  const types = pokemon.types.map((types) => types.type.name).join('-')

  //chequeando los typos para poner estilos css
  useEffect(() => {
    if (types.includes('poison')) {
      setStyles('poison')
    }
    else if (types.includes('fire')) {
      setStyles('fire')
    }
    else if (types.includes('water')) {
      setStyles('water')
    } else {
      setStyles('normal')
    }
   
  }, []);

  const handleFavorites = (id) => {
    dispatch(setFavorite({ pokemonId: id }))
   
  };


  return (
    <div className='Cart'>

      <div onClick={() => handleFavorites(pokemon.id)} >
        <FavoriteIcon pokemon={pokemon} onClick={handleFavorites} />

        <h3 className='Cart-name' >{pokemon.name}</h3>
      </div>

      <img
        className={`Cart-image ${styles}`}
        src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p className={`Cart-abilities ${styles}`}>{abilities}</p>
      <p className={`Cart-type ${styles}`}>{types}</p>
    </div>
  )
}

export { Cart }