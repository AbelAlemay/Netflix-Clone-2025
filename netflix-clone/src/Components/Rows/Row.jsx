import React from "react";
import "./row.css";
import instance from "../../utils/axios";
import { useState, useEffect } from "react";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";
import CloseIcon from "@mui/icons-material/Close";

const baseURL = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [trailerMessage, setTrailerMessage] = useState("");

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
      setTrailerMessage("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          try {
            const urlParams = new URLSearchParams(new URL(url).search);
            const videoId = urlParams.get("v");
            if (videoId) {
              setTrailerUrl(videoId);
              setTrailerMessage("");
            } else {
              setTrailerUrl("");
              setTrailerMessage("No trailer available");
            }
          } catch (e) {
            setTrailerUrl("");
            setTrailerMessage("No trailer available");
          }
        })
        .catch((error) => {
          console.log(error);
          setTrailerUrl("");
          setTrailerMessage("No trailer available");
        });
    }
  }

  // Auto-dismiss trailer message after a short delay
  useEffect(() => {
    if (!trailerMessage) return;
    const id = setTimeout(() => {
      setTrailerMessage("");
    }, 1000);
    return () => clearTimeout(id);
  }, [trailerMessage]);

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
          {movies?.map((movie, index) => {
            const imagePath = isLargeRow
              ? movie?.poster_path
              : movie?.backdrop_path;
            const titleText =
              movie?.title || movie?.name || movie?.original_name;

            if (imagePath) {
              return (
                <img
                  onClick={() => handleClick(movie)}
                  key={index}
                  className={`row_movie ${isLargeRow && "row_movieLarge"}`}
                  src={`${baseURL}${imagePath}`}
                  alt={titleText}
                />
              );
            }

            return (
              <div
                onClick={() => handleClick(movie)}
                key={index}
                className={`row_placeholder ${isLargeRow && "row_placeholderLarge"}`}
                title={titleText}
              >
                <span className="row_placeholder_text">
                  {titleText || "Untitled"}
                </span>
              </div>
            );
          })}
        </div>
        <div className="trailer_area">
          {trailerUrl ? (
            <div className="trailer_player_wrapper">
              <div className="trailer_controls">
                <CloseIcon
                  className="trailer_close_icon"
                  onClick={() => {
                    setTrailerUrl("");
                    setTrailerMessage("");
                  }}
                />
              </div>
              <Youtube videoId={trailerUrl} opts={opts} />
            </div>
          ) : trailerMessage ? (
            <div className="trailer_message">{trailerMessage}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Row;
