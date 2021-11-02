import React, { useState, useEffect } from 'react';
function Memes() {
    const [state,setState] = useState({fetchedMemes:[]});
    useEffect(()=>{
        (async function getMemes(){
            try{
                let m = await fetch('https://api.imgflip.com/get_memes');
                let d = await m.json();
                setState({fetchedMemes:d.data.memes});
        
            }catch(err){
                console.log('error!:',err);
            }
        })();
        
    },[]);

    return (
        <ul className="meme-container">            
           {state.fetchedMemes.map(element => {return <li key={element.id}><p><strong>{element.name}</strong></p><img alt='a wonderful meme'src={element.url}/></li> })
            }
        </ul>  
    );
}

export default Memes;
