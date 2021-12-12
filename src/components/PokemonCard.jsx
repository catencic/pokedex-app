import React, { useState } from 'react'
import { useFetchPokemon } from '../hooks/useFetchPokemon';
import { PokemonCardItem } from './PokemonCardItem';
import { SearchPokemon } from './SearchPokemon'

export const PokemonCard = () => {

    const [pokemon, setPokemon] = useState('mewtwo');
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
