import * as types from "./constants";

export function addToWish(movie) {
  return {
    type: types.ADD_TO_WISH,
    movie
  };
}

export function searchMovie(title) {
  return {
    type: types.SEARCH_MOVIE,
    title
  };
}

export function getMovies() {
  return {
    type: types.GET_MOVIES,
  };
}

export function fetchSuccess(movie) {
  return {
    type: types.FETCH_SUCCESS,
    movie
  };
}

export function fetchMoviesData(movies) {
  return {
    type: types.FETCH_MOVIES_DATA,
    movies
  };
}

export function fetchFail(message) {
  return {
    type: types.FETCH_FAIL,
    message
  };
}
