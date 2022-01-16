import React, { useEffect, useReducer } from 'react';
import memeSliceReducer,{fetchDone} from './memeSlice';

/*
Because we are setting the state after every data fetch, 
the component updates and the effect runs again. It fetches the data again and again. 
That's a bug and needs to be avoided. We only want to fetch data when the component mounts. 
That's why you can provide an empty array as second argument to the effect hook to avoid activating it 
on component updates but only for the mounting of the component.
*/

//Fetching Memes
async function getMemes(url){
    try{
        let m = await fetch(url);
        let d = await m.json();
        return d.data.memes;

    }catch(err){
        console.log('error!:',err);
    }
}
function Memes(props) {

    const [state,dispatch] = useReducer(memeSliceReducer,{fetchedMemes:[]});
    
    useEffect(()=>{
        (async () => {
           
            const meme = await getMemes(props.url);
            dispatch(fetchDone(meme));       
        })();  
    },[props.url]);

    return state.fetchedMemes ? (
        <ul className="meme-container">            
           {state.fetchedMemes.map(element => {return <li key={element.id}><p><strong>{element.name}</strong></p><img alt='a wonderful meme'src={element.url}/></li> })
            }
        </ul>  
    ):<div><h2>.....Well.....<br/>Something went wrong!<br/>Coult not retrieve some awesome meme's :(</h2></div>;
}

export default Memes;
