import React, { useReducer } from 'react'
import { PokemonCard } from './components/PokemonCard'
import { uiContex } from './context/iuContext'
import { uiReducer } from './reducer/uiRedecer'

export const Pokedex = () => {

    const [reducerState, dispatch] = useReducer(uiReducer, {})

    return (
        
         <>
           <div className="banner" >
				<img className="banner" src="../src/images/pngegg.png"/>
			</div>
			<uiContex.Provider value={ {
            reducerState,
            dispatch
        }}>

     <PokemonCard />
            </uiContex.Provider>
         </>
         
        
    )
}
