import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as types from "./constants";
import Api from './api/api.js';
import { fetchSuccess } from './actions';
import { fetchFail } from './actions';


function* searchMovie(action) {
  const api = new Api();
  const base_url = Api.posterBaseUrl;

   try {
    let movie = yield call(api.searchForMovie, action.title);

    movie = movie.set('poster_path', `${base_url}${movie.get('poster_path')}`);
    movie = movie.set('backdrop_path', `${base_url}${movie.get('backdrop_path')}`);

    yield put(fetchSuccess(movie));
   } catch (e) {
     yield put(fetchFail(e.message));
   }
}

function* mySaga() {
  yield takeEvery(types.SEARCH_MOVIE, searchMovie);
}

export default mySaga;
