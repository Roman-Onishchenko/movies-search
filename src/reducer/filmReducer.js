import * as types from "../constants";

const initialState = {};

export default function searchFilmReducer(state = initialState, action) {

    switch (action.type) {
      case types.ADD_TO_WISH:
      	return state;

      case types.FETCH_SUCCESS:
        return action.movie;

      default:
    	return state;

    }
  }
