import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../actions/movieActions";
import Card from "../../components/Card";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [page, setPage] = useState(0);
  const movieData = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const ref = useRef(null);

  useEffect(() => {
    if (movieData) {
      setMovies([...movies, ...movieData?.movies]);
    }
  }, [movieData]);

  useEffect(() => {
    if (isIntersecting) {
      setPage(page + 1);
      dispatch(getMovies(page + 1));
    }
  }, [isIntersecting]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);
  }, []);

  return (
    <>
      <Outlet />
      <div className="Page">
        <div className="movies">
          {movies?.length > 0 ? (
            movies.map((i) => (
              <Card
                id={i.id}
                poster_path={i.poster_path}
                original_title={i.original_title}
                release_date={i.release_date}
                overview={i.overview}
                popularity={i.popularity}
              />
            ))
          ) : (
            <></>
          )}
        </div>
        <div ref={ref} id="footer" className="footer"></div>
      </div>
    </>
  );
}
