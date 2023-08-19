import { getAllMovies } from "../reducers/moviesSlice";

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
    console.log(response);
    dispatch(getAllMovies(response.results));
  } catch (err) {
    console.error(err);
  }
};
