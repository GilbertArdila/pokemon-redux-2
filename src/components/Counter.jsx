import React from 'react';
import '../styles/Counter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';


const Counter = ({offset,setOffset}) => {

  const handleIncrease = () => {
   
    setOffset(offset + 40)
   
    if(offset > 1080){
        setOffset(0)
    }
   
  }

  const handleDecrease = () => {
    
    setOffset(offset - 40)
    if(offset<1){
        setOffset(1080)
    }
   
  }
  return (
    <div className='Counter'>
        <span className='Counter-increase' onClick={handleIncrease}>next{' '}<FontAwesomeIcon icon={faForward}/></span>
        <span  className='Counter-decrease' onClick={handleDecrease}><FontAwesomeIcon icon={faBackward}/>{' '}previous</span>



    </div>
  )
}

export  {Counter}