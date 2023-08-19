import React from "react";

export default function Card({
  id,
  poster_path,
  original_title,
  release_date,
  overview,
  popularity,
}) {
  console.log(`https://image.tmdb.org/t/p/original${poster_path}`);
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt="card_image"
      />
      <div className="title">
        <span className="movie_title">{original_title}</span>
        <span>{popularity}</span>
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
