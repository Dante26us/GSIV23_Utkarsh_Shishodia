import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../../actions/movieActions";
import { getCastDetails } from "../../actions/castAction";
import CastDetails from "./CastDetails";
import { clearMovieDetails } from "../../reducers/moviesSlice";
import stockPlaceholder from "../../assets/placeholder.png";
export const colorHandle = (rating) => {
  if (rating > 7) return "#34a853";
  else if (rating > 5) return "#fbbc04";
  else return "#cf3721";
};

export default function MovieDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const movieData = useSelector((state) => state.movies);
  const castData = useSelector((state) => state.cast);
  const [imagePath, setImagePath] = useState(null);
  // console.log(movieData.movieDetails, castData);
  useEffect(() => {
    if (params.id) {
      dispatch(getMovieDetail(params.id));
      dispatch(getCastDetails(params.id));
    }
  }, [params.id]);

  useEffect(() => {
    setDetails(movieData?.movieDetails);
  }, [movieData]);

  const hourConvert = (min) => {
    const hh = "0" + Math.floor(min / 60);
    const mm = Math.floor(min % 60).toFixed(0);

    return `${hh}:${mm}`;
  };

  useEffect(() => {
    if (details.poster_path) {
      setImagePath(
        import.meta.env.VITE_MOVIE_DB_BASE_URL + details.poster_path
      );
    }
  }, [details.poster_path]);
  return (
    <>
      {details?.id ? (
        <div className="Page">
          <div className="PageInfo">
            <div
              className="DetailPageBackground"
              style={{
                backgroundImage: `url(${
                  import.meta.env.VITE_MOVIE_DB_BASE_URL
                }${details.backdrop_path})`,
              }}
            ></div>
            <div className="DetailPage">
              <div className="leftPage">
                {imagePath ? (
                  <img
                    src={`${import.meta.env.VITE_MOVIE_DB_BASE_URL}${
                      details.poster_path
                    }`}
                    alt="detail_Image"
                  />
                ) : (
                  <img className="" src={stockPlaceholder} alt="card_image" />
                )}
              </div>
              <div className="rightPage">
                <div className="title">
                  <span>{details.original_title}</span>
                  <span
                    style={{
                      backgroundColor: colorHandle(details.vote_average),
                    }}
                  >
                    {details.vote_average.toFixed(1)}
                  </span>
                </div>
                <div>
                  <span>{details.release_date.slice(0, 4)}</span> |
                  <span>{hourConvert(details.runtime)}</span>
                </div>
                <div className="detail_overview">
                  <h3>Overview</h3>
                  <span>{details.overview}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <CastDetails castDetails={castData.cast} />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
