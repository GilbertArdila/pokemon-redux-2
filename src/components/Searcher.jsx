import React from 'react';
import '../styles/Search.css';

const Searcher = ({value,onChange}) => {
  return (
    <input 
    className='Searcher'
    type={'text'}
    placeholder='find a pokemon...'
    value={value}
    onChange={onChange}
    />
  )
}

export { Searcher}