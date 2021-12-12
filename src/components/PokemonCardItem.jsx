import React, { useContext } from 'react'
import { uiContex } from '../context/iuContext';
import { SearchPokemon } from './SearchPokemon'
import swal from 'sweetalert';



export const PokemonCardItem = ({data ,setPokemon}) => {

    const {reducerState} = useContext(uiContex);

    const {loading, msgError} = reducerState;
      

    const {name, front_default , types , stats, base_experience} = data;
      //TODO: corregir el error en la exepción,ajustar el state del pokemon
    return (
        <main className="flex">
      
        <article className="card">
            
            {
                msgError && swal({
                    title: "Error",
                    text: msgError,
                    icon: "error",
                    button: "Aceptar"
                }).then(resp =>{
                    if(resp){
                        console.log('si');
                        location.reload();
                    }
                })
            }
            
            <SearchPokemon setPokemon={setPokemon}/>
            <img src="../src/images/bg-pattern-card.svg" alt="imagen header card" className="card-header"/>
            <div className="card-body">
                <img src={front_default} alt="imagen de vitoko" className="card-body-img"/>
                <h1 className="card-body-title">
                    {name}
                    <span> {stats[0]?.base_stat} Hp</span>
                </h1>
                <p className="card-body-text">{types[0]?.type.name}</p>
            </div>
            <div className="card-footer">
                <div className="card-footer-social">
                    <h3>{stats[1]?.base_stat}</h3>
                    <p>Ataque</p>
                </div>
                <div className="card-footer-social">
                    <h3>{stats[2]?.base_stat}</h3>
                    <p>Defensa</p>
                </div>
                <div className="card-footer-social">
                    <h3>{base_experience}</h3>
                    <p>Exp</p>
                </div>
            </div>
        </article>
    </main>
    )
}
