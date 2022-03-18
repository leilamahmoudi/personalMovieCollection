import React, { useEffect, useState } from "react";
import PageTemplate from "../pageTemplate/PageTemplate";
import MovieCard from "../movies/MovieCard";
import {
  getWatchlistMovies,
  getWatchedMovies,
  getMyCollection,
} from "../../api";
import "./movieList.css";

const MovieList = ({ type }) => {
  const [moviesItems, setMoviesItems] = useState([]);
  const [counter, setCounter] = useState(0);
  const forceUp = () => {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
  };
  useEffect(() => {
    switch (type) {
      case "my-collection":
        getMyCollection().then((res) => {
          setMoviesItems(res);
        });
        break;

      case "watch-list":
        getWatchlistMovies().then((res) => {
          setMoviesItems(res);
        });
        break;

      case "watched":
        getWatchedMovies().then((res) => {
          setMoviesItems(res);
        });
        break;

      default:
        break;
    }
  }, [type, counter]);

  return (
    <div className="MovieList">
      <PageTemplate currentPage={type}>
        <div className="movie-group">
          {moviesItems.map((movie) => {
            return (
              <MovieCard movie={movie} key={movie.movieId} forceUp={forceUp} />
            );
          })}
        </div>
      </PageTemplate>
    </div>
  );
};

export default MovieList;
