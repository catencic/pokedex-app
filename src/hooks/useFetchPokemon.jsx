

import  {  useContext, useEffect, useReducer, useState } from 'react'
import { remuveError, setError } from '../actions/iu';
import { uiContex } from '../context/iuContext';

import { getPokemons } from '../helpers/getPokemon';




 

export const useFetchPokemon = (pokemon) => {

    const {dispatch} = useContext(uiContex);

   const [state, setState] = useState({
       data: null,
       loading: true,
   });

   
   
   useEffect(() => {
    getPokemons(pokemon)
    .then( poke =>{
        setState({
            data: poke,
            loading: false
        })
    }).catch(error =>{
       
        console.error(error.message);
        dispatch(setError('No se encontraron resultados'));

    }).finally(() => {
        dispatch(remuveError());
    })

     
       
   }, [pokemon]);

   return state;
   
}
