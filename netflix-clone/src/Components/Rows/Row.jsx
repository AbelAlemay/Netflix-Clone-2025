import React from "react";
import "./row.css";
import instance from "../../utils/axios";
import { useState, useEffect } from "react";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";

const baseURL = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const req = await instance.get(fetchUrl);
        setMovies(req.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  function handleClick(movie) {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  }

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="lists_wrapper">
      <h2 className="categories">{title}</h2>
      <div className="row_lists">
        <div className="row_movies">
          {movies?.map((movie, index) => (
            <img
              onClick={() => handleClick(movie)}
              key={index}
              className={`row_movie ${isLargeRow && "row_movieLarge"}`}
              src={`${baseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
        <div>{trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}</div>
      </div>
    </div>
  );
}

export default Row;
