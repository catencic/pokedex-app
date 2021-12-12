
export const getPokemons = async ( pokemon = 'newtwo') =>{

    const url =`https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const resp = await fetch(url);
    const {name, sprites ,types , stats,base_experience} = await resp.json();
    
     const {front_default} = sprites;
     
     
/*     console.log(name);
    console.log(front_default);
    console.log(types[0].type.name);  // tipo 
    console.log(stats[0].base_stat);  //hp 
    console.log(stats[1].base_stat);  //ataque
    console.log(stats[2].base_stat);   //defensa */



    return {name, front_default , types , stats, base_experience};

}
