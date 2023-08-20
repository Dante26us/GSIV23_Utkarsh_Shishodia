import { searchMovies } from "../reducers/moviesSlice";

let abortController = null;

export const searchMovie = (query, page) => async (dispatch) => {
  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_MOVIE_DB_ACCESS_TOKEN,
    },
    signal: abortController.signal,
  };

  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
      options
    );
    const response = await data.json();
    dispatch(searchMovies(response.results));
  } catch (err) {
    console.error(err);
  }
};
