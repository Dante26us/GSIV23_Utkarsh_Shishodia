import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import searchSvg from "../../assets/search-svgrepo-com.svg";
import homeSvg from "../../assets/home-1391-svgrepo-com.svg";
export default function Header() {
  const [key, setKey] = useState("");
  const handleChange = (e) => {
    setKey(e.target.value);
    console.log(e.target.value);
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
        <div className="homeHeader">
          <img src={homeSvg} alt="home icon" />
        </div>
      </div>
    </>
  );
}
