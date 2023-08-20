import React, { useEffect, useState } from "react";
import { colorHandle } from "../../pages/MovieDetail";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import stockPlaceholder from "../../assets/placeholder.png";

export default function Card({
  id,
  poster_path,
  original_title,
  release_date,
  overview,
  vote_average,
  selectMovie,
}) {
  const [imagePath, setImagePath] = useState(null);
  useEffect(() => {
    if (poster_path) {
      setImagePath(import.meta.env.VITE_MOVIE_DB_BASE_URL + poster_path);
    }
  }, [poster_path]);
  // console.log(imagePath);
  return (
    <div className="card" onClick={() => selectMovie(id)}>     
      {imagePath ? (
        <img src={`${imagePath}`} alt="card_image" />
      ) : (
        <>
          <img className="" src={stockPlaceholder} alt="card_image" />
        </>
      )}
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
      </div>
    </div>
  );
}
