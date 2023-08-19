import { getAllMovies, getMovieDetails } from "../reducers/moviesSlice";

export const getMovies = (pageNumber) => async (dispatch) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_MOVIE_DB_ACCESS_TOKEN,
    },
  };

  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${pageNumber}`,
      options
    );
    const response = await data.json();
    dispatch(getAllMovies(response.results));
  } catch (err) {
    console.error(err);
  }
};

export const getMovieDetail = (movieId) => async (dispatch) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_MOVIE_DB_ACCESS_TOKEN,
    },
  };
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );
    const response = await data.json();
    dispatch(getMovieDetails(response));
    // console.log(response);
  } catch (err) {
    console.error(err);
  }
};
