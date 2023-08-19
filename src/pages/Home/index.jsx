import React, { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
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
  const nav=useNavigate();

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

  const selectMovieHandler = (idx) => {
    nav(`/${idx}`)
  };

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
                vote_average={i.vote_average}
                selectMovie={selectMovieHandler}
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
