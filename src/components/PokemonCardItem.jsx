import React from 'react'
import { SearchPokemon } from './SearchPokemon'



export const PokemonCardItem = ({data ,setPokemon}) => {


    const {name, front_default , types , stats, base_experience} = data;

    return (
        <main className="flex">
      
        <article className="card">
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
