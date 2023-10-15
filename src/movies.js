import React from "react";
import PropTypes from "prop-types";

import movies from "./movie";
const Movies = props => (
    <ul className="movies">
      {props.movies.map(movie => (
        <li key={movie.id}>
          <Movie {...movie} />
        </li>
      ))}
    </ul>
  );
  
  movies.propTypes = {
    movies:PropTypes.arrayOf(PropTypes.object)
  };
  export default movies;