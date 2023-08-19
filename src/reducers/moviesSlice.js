import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

export const movieSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getAllMovies: (state, action) => {
      state.movies = [...action.payload];
    },
  },
});

export const { getAllMovies } = movieSlice.actions;

export default movieSlice.reducer;
