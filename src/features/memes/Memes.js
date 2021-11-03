import React, { useEffect, useReducer } from 'react';
import memeSliceReducer,{ fetchMemes, fetchDone } from './memeSlice';
function Memes() {

    const [state,dispatch] = useReducer(memeSliceReducer,{fetchedMemes:[]});
    
    useEffect(()=>{
      
        //    dispatch(fetchMemes());
        //    dispatch(fetchDone());
        
        
    });

    return state.loaded ? (
        <ul className="meme-container">            
           {state.fetchedMemes.map(element => {return <li key={element.id}><p><strong>{element.name}</strong></p><img alt='a wonderful meme'src={element.url}/></li> })
            }
        </ul>  
    ):<div>ERROR</div>;
}

export default Memes;
