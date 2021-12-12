

import  { useEffect, useState } from 'react'
import { getPokemons } from '../helpers/getPokemon';

export const useFetchPokemon = (pokemon) => {

   const [state, setState] = useState({
       data: [],
       loading: true,
   });

   useEffect(() => {
    getPokemons(pokemon)
    .then( poke =>{
        setState({
            data: poke,
            loading: false
        })
    })
       
   }, [pokemon]);

   return state;
   
}
