import React from "react";
import { colorHandle } from "../../pages/MovieDetail";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function Card({
  id,
  poster_path,
  original_title,
  release_date,
  overview,
  vote_average,
  selectMovie,
}) {
  return (
    <div className="card" onClick={() => selectMovie(id)}>
      <img
        src={`${import.meta.env.VITE_MOVIE_DB_BASE_URL}${poster_path}`}
        alt="card_image"
      />
      <div className="title">
        <span className="movie_title">{original_title}</span>
        <span style={{ backgroundColor: colorHandle(vote_average) }}>
          {vote_average}
        </span>
      </div>
      <div className="hide">
        <div className="overview">
          <span className="content">{overview}</span>
        </div>
        {/* <div className="">
          <span>{release_date}</span>
        </div> */}
      </div>
    </div>
  );
}
