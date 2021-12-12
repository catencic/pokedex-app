import React, {  useState } from 'react'
import { getPokemons } from '../helpers/getPokemon';

export const SearchPokemon = ({setPokemon}) => {

    const [inputValue, setInputValue] = useState('');

        const handleInputChange = (e) => {
           setInputValue(e.target.value);
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            setPokemon([inputValue]);
            setInputValue('');
        }

        

       

    return (
        <div className="search-box">
           <form onSubmit={handleSubmit}>
            <button 
            className="btn-search">
                <i className="fas fa-search"></i>
            </button>
            <input 
            type="text" 
            onChange={handleInputChange}
            value={inputValue}
            className="input-search" 
            placeholder="Search pokemon..."
            />
           </form> 
    </div>
    )
}
