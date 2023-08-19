import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMovies } from "../../actions/movieActions";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(1));
  }, []);
  return (
    <>
      <Outlet />
      <div>Home</div>
    </>
  );
}
