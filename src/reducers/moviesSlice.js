import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  movieDetails: {},
  searchMov: [],
  pageNumbers: [],
};

export const movieSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getAllMovies: (state, action) => {
      console.log(action);
      if (state.pageNumbers.includes(action.payload.pageNumber)) {
        // state.movies = [...state.movies];
      } else {
        state.pageNumbers = [...state.pageNumbers, action.payload.pageNumber];
        state.movies = [...state.movies, ...action.payload.response];
      }
    },
    getMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    searchMovies: (state, action) => {
      state.searchMov = action.payload;
    },
    clearMovieDetails: (state) => {
      state.movieDetails = {};
    },
  },
});

export const {
  getAllMovies,
  getMovieDetails,
  clearMovieDetails,
  searchMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
