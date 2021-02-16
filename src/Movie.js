import React from "react";
import PropTypes from "prop-types";
import App from "./App";
import "./Movie.css";

function Movie({id,year,title,summary,poster, genres}){
    return <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie___movie">
        <h3 className="movie___title">{title}</h3>
        <h5 className="movie___year">{year}</h5>
        <ul className="genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie___summary">{summary.slice(0, 140)}...</p>
    </div>
    
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;