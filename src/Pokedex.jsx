import React from 'react'

export const Pokedex = () => {
    return (
         

         
        <main className="flex">
      
        <article className="card">
            <div className="search-box">
                <button className="btn-search"><i className="fas fa-search"></i></button>
                <input type="text" className="input-search" placeholder="Type to Search..."/>
            </div>
            <img src="../src/images/bg-pattern-card.svg" alt="imagen header card" className="card-header"/>
            <div className="card-body">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" alt="imagen de vitoko" className="card-body-img"/>
                <h1 className="card-body-title">
                    Blastoise
                    <span> 26 hp</span>
                </h1>
                <p className="card-body-text">Agua</p>
            </div>
            <div className="card-footer">
                <div className="card-footer-social">
                    <h3>11k</h3>
                    <p>Ataque</p>
                </div>
                <div className="card-footer-social">
                    <h3>8k</h3>
                    <p>Defensa</p>
                </div>
                <div className="card-footer-social">
                    <h3>120</h3>
                    <p>Exp</p>
                </div>
            </div>
        </article>
    </main>
    )
}
