/* A function that accepts an initial state,
 *  an object of reducer functions, and a "slice name", and automatically generates action creators
 *  and action types that correspond to the reducers and state.
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stateName: "init",
  fetchedMemes: [],
};

const memeSlice = createSlice({
  name: "meme",
  initialState,
  reducers: {
    fetchMemes: async (state) => {
      try {
        let m = await fetch("https://api.imgflip.com/get_memes");
        let d = await m.json();
        state.fetchedMemes = d.data.memes;
        console.log(state.fetchedMemes);
      } catch (err) {
        console.log("error!:", err);
      }
    },
  },
});
export const getMemes = (state) => state.meme.value;
export const { fetchMemes } = memeSlice.actions;
export default memeSlice.reducer;
