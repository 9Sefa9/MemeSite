/* A function that accepts an initial state, 
*  an object of reducer functions, and a "slice name", and automatically generates action creators 
*  and action types that correspond to the reducers and state.
*/
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    stateName = "init"
};

const memeSlice = createSlice({
    name: 'meme',
    initialState,
    reducers:{
        fetchMemes(state){
            
        }
    }
});

export const {fetchMemes} = memeSlice.actions;
export default memeSlice.reducer;