import React, { useEffect, useState } from "react";
import stockUserImage from "../../assets/stockuserImage.svg";
export default function CastCards({
  id,
  profile_path,
  name,
  character,
  known_for_department,
}) {
  const [imagePath, setImagePath] = useState(null);
  useEffect(() => {
    if (profile_path) {
      setImagePath(import.meta.env.VITE_MOVIE_DB_BASE_URL + profile_path);
    }
  }, [profile_path]);
  //   console.log(imagePath);
  return (
    <div className="sliderContainer">
      <div className="imageCast">
        {imagePath ? (
          <img src={`${imagePath}`} alt="castImage" />
        ) : (
          <>
            <img className="stockImage" src={stockUserImage} alt="castImage" />
          </>
        )}
      </div>
      <div className="castDetails">
        <div>{name}</div>
        <div>{character}</div>
        {/* <div>{known_for_department}</div> */}
      </div>
    </div>
  );
}
