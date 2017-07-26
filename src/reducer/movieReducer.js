import * as types from '../constants';
import { Map, Record } from 'immutable';


const initialState = new Map({
   foundMovie: new Map(),
});

export default function searchMovie(state = initialState, action) {

    switch (action.type) {

      case types.FETCH_SUCCESS:
        return state.set('foundMovie', action.movie);

      default:
    	  return state;
    }
  }
