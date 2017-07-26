import { combineReducers } from 'redux';
import searchMovie from './movieReducer';
import wishList from './wishListReducer';

export default combineReducers({
	searchMovie,
	wishList
});
