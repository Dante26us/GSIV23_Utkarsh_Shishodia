import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  movieDetails: {},
};

export const movieSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getAllMovies: (state, action) => {
      state.movies = [...action.payload];
    },
    getMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    clearMovieDetails: (state) => {
      state.movieDetails = {};
    },
  },
});

export const { getAllMovies, getMovieDetails,clearMovieDetails } = movieSlice.actions;

export default movieSlice.reducer;
