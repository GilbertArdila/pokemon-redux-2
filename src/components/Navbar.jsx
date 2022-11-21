import React,{useState,useEffect} from 'react';
import '../styles/Navbar.css';
import logo from '../../public/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../actions/actions';

const Navbar = () => {

  const mode = useSelector(state => state.mode);

  const dispatch = useDispatch();

 

 
  

  
  
  

  const handleMode = () => {
    mode==='light'?dispatch(setMode('dark')):dispatch(setMode('light'));
      
  }

 
 
  return (
    <nav className='Navbar'>
      <h2 className='Navbar-title'>Pokemon</h2>
      <img src={logo} alt="logo pokemon" 
      className='Navbar-logo'
      />
     
      <span onClick={handleMode}>🌗</span>
    </nav>
  )
}

export  {Navbar}