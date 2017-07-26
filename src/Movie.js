import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function Movie(props) {
  return (
    <div className="movieInfo">
      <img
        className="movieInfo__poster"
        src={props.movieInfo.poster_path}
        alt="logo"
      />
      <p className="movieInfo__title">{props.movieInfo.title}</p>
      <p className="movieInfo__overview">{props.movieInfo.overview}</p>
      <p className="movieInfo__date">{props.movieInfo.release_date}</p>
    </div>
)};

export default Movie;
