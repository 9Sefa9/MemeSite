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
    fetchDone: (state, action) => {
      state.fetchedMemes = action.payload;
    },
  },
});
export const getMemes = (state) => state.meme.value;
export const { fetchDone } = memeSlice.actions;
export default memeSlice.reducer;
