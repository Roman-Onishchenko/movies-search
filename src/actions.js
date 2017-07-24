import * as types from "./constants";

export function addToWish(item) {
  return {
    type: types.ADD_TO_WISH,
    item
  };
}

export function searchMovie(title) {
  return {
    type: types.SEARCH_MOVIE,
    title
  };
}

export function fetchSuccess(movie) {
  return {
    type: types.FETCH_SUCCESS,
    movie
  };
}

export function fetchFail(message) {
  return {
    type: types.FETCH_FAIL,
    message
  };
}
