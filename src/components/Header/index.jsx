import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import searchSvg from "../../assets/search-svgrepo-com.svg";
import homeSvg from "../../assets/home-1391-svgrepo-com.svg";
import { useDispatch } from "react-redux";
import { clearMovieDetails } from "../../reducers/moviesSlice";
import { searchMovie } from "../../actions/searchmovie";

export default function Header() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [key, setKey] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setKey(value);
    nav("/");
    dispatch(searchMovie(value, 1));
  };

  return (
    <>
      <Outlet />
      <div className="headerComponent">
        <div className="headerSearch">
          <img src={searchSvg} alt="Search icon" />
          <input
            type="text"
            name="search"
            className=""
            id="search"
            placeholder="Enter keywords..."
            onChange={handleChange}
            value={key}
          />
        </div>
        <div
          className="homeHeader"
          onClick={() => {
            dispatch(clearMovieDetails());
            nav("/");
          }}
        >
          <img src={homeSvg} alt="home icon" />
        </div>
      </div>
    </>
  );
}
