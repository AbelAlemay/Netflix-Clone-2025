import { useState, useEffect } from "react";
import requests from "../../utils/requests";
import instance from "../../utils/axios";
import "../Banner/banner.css";
import truncate from "lodash/truncate";
function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const req = await instance.get(requests.fetchNetflixOriginals);
        const results = req?.data?.results || [];
        if (results.length) {
          setMovie(results[Math.floor(Math.random() * results.length)]);
        } else {
          console.warn(
            "TMDB returned no results. Check API key and request params."
          );
        }
      } catch (err) {
        console.log("Fetch error:", err);
      }
    })();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button_1">Play</button>
          <button className="banner_button_2">My List</button>
        </div>
        <p className="banner_description">
          {truncate(movie?.overview, {
            length: 200,
          })}
        </p>
      </div>
      <div className="banner_fadeBottom"></div>
    </div>
  );
}

export default Banner;
