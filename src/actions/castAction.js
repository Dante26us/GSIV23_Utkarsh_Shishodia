import { getAllCast } from "../reducers/castSlice";

export const getCastDetails = (movieId) => async (dispatch) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_MOVIE_DB_ACCESS_TOKEN,
    },
  };
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    );
    const response = await data.json();
    dispatch(getAllCast(response.cast));
    // console.log(response);
  } catch (err) {
    console.error(err);
  }
};
