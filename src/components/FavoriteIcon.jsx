import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

const FavoriteIcon = ({ pokemon, onClick }) => {


    const [star, setStar] = useState(emptyStar);


    useEffect(() => {
        pokemon.favorite ? setStar(faStar) : setStar(emptyStar)
    }, [pokemon.favorite])




    return (
        <div onClick={onClick}>
            <FontAwesomeIcon icon={star} className='Cart-star' />
        </div>

    )
}

export { FavoriteIcon }