import React from "react";

export default function CastCards({
  id,
  profile_path,
  name,
  character,
  known_for_department,
}) {
  return (
    <div className="sliderContainer">
      <img
        src={`${import.meta.env.VITE_MOVIE_DB_BASE_URL}${profile_path}`}
        alt="castImage"
      />
      <div className="castDetails">
      <div>{name}</div>
      <div>{character}</div>
      <div>{known_for_department}</div>
      </div>
    </div>
  );
}
