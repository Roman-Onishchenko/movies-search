import * as types from '../constants';
import { List, Map } from 'immutable';

const initialState = new Map({
  wishList: new List(),
});

export default function wishList(state = initialState, action) {

    switch (action.type) {

      case types.FETCH_MOVIES_DATA:
        return state.set('wishList', action.movies);

      case types.ADD_TO_WISH:
        return state.set('wishList', state.get('wishList').push(action.movie));

      default:
    	  return state;
    }
  }
