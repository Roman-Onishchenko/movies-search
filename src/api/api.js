import Movie from './records/movie.js';
import { Map, List } from 'immutable';

export default class Api {
  static posterBaseUrl = 'https://image.tmdb.org/t/p/w500';

  constructor() {
    this.url = 'https://api.themoviedb.org/3/search/movie?api_key=96772026bfff7e9901eb46359237b586';

    this.searchForMovie = this.searchForMovie.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  searchForMovie(title = '') {

    return new Promise((resolve, reject) => {
      const url = `${this.url}&query=${title}`;

      fetch(url).then((response) => {
         return response.json();
       }).then((data) => {
        const newMovie = new Movie(data.results[0]);
        resolve(newMovie);
      })
      .catch((error) => ({
        error: 'Ошибка',
      }));
    });
  }

  fetchMovies() {
    return new Promise((resolve, reject) => {
      const path = 'http://localhost:8000/wishlist';

      fetch(path).then((response) => {
         return response.json();
       }).then((data) => {
        const movies = new List(data.wishlist);
        resolve(movies);
      })
      .catch((error) => ({
        error: 'Ошибка',
      }));
    });
  }
}
