import React, { useState, useEffect } from "react";
import "./movieDetail.css";

import { getMovie } from "../../../api";
import { useLocation } from "react-router";
import PageTemplate from "../../pageTemplate/PageTemplate";
import { Link } from "react-router-dom";
import { updateMovie, deleteMovie } from "../../../api";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [erorr, setErorr] = useState("");
  const [rate, setRate] = useState("");

  const [counter, setCounter] = useState(0);
  const forceUp = () => {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
  };

  const handleWatched = () => {
    updateMovie(movie.movieId, {
      isWatched: !movie.isWatched,
      rate: rate,
    });
    setRate("");
    forceUp();
  };

  const handleDelete = () => {
    deleteMovie(movie.movieId);
    setRate("");
    forceUp();
  };

  const loction = useLocation();
  const pathname = loction.pathname;
  const arr = pathname.split("/");
  const movieId = arr[arr.length - 1];

  useEffect(() => {
    getMovie(movieId)
      .then((res) => {
        setMovie(res);
        setErorr("");
      })
      .catch(setErorr("Movie not found!"));
  }, [counter]);

  return (
    <div className="MovieDetails">
      <PageTemplate>
        {erorr ? (
          <p className="card-name">{erorr}</p>
        ) : (
          <div className="movie-row">
            <figure className="img-wrap">
              <img
                className="img-movie-detail"
                src="https://d32qys9a6wm9no.cloudfront.net/images/others/not_available/poster_300x442.png?t=1642660563"
                alt=""
              />
            </figure>
            <div className="movie-column-details">
              <div className="card-content">
                <h5 className="card-title">
                  <p className="card-name">
                    <label>Name: </label>
                    {movie.name}
                  </p>
                </h5>

                <p className="text-rate">
                  <label>Category: </label>
                  {movie.category}
                </p>
                {movie.isWatched ? (
                  <p className="text-rate">{movie.rate}</p>
                ) : (
                  <div>
                    <input
                      className="movie-rate-card"
                      placeholder="Add Rate"
                      value={rate}
                      onChange={(e) => {
                        setRate(e.target.value);
                      }}
                    />
                    <button onClick={handleWatched} className="btn-mark">
                      Mark As Watched
                    </button>
                  </div>
                )}

                <button onClick={handleDelete} className="btn-delete">
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </PageTemplate>
    </div>
  );
};

export default MovieDetails;
