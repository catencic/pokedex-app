import React, { useState } from 'react'
import { useFetchPokemon } from '../hooks/useFetchPokemon';
import { PokemonCardItem } from './PokemonCardItem';


export const PokemonCard = () => {

    const [pokemon, setPokemon] = useState('misdreavus');
    const {data , loading} = useFetchPokemon(pokemon);
    //const {name, sprites ,types , stats,base_experience} = data;

    return (
        <>
        {
         
            data &&
            (
            <PokemonCardItem data={data} setPokemon={setPokemon}/>
            )
        }
        </>
      
    )
}
