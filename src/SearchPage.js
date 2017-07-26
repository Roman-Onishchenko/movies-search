import React, { Component } from 'react';
import { Appbar, Button, Container } from 'muicss/react';
import Form from 'muicss/lib/react/form';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './SearchPage.css';
import { Link } from 'react-router-dom';
import Movie from './Movie';

const Header = () => (
  <header>
    <nav>
      <ul className="header-nav">
        <li><Link to='/wishlist'>Wishlist</Link></li>
      </ul>
    </nav>
  </header>
);


class SearchPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      errInfo: true
    }
  }

  onInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  saveToStore() {
    this.setState({errInfo: false});

    if (this.state.inputValue) {
      this.props.searchMovie(this.state.inputValue);
    };
    this.filmInput.value = '';
  }

  addToWish() {
    this.props.addToWish(this.props.movieInfo);
  }

  render() {

    return (
      <div>

        <div
          className="wrapper cf"
        >
          <Header />

          <Form
            className="searchForm"
            onClick={ (event) => { event.preventDefault() } }
          >

            <legend
              className="searchForm__legend"
            >
              Название фильма:
            </legend>

            <input
              className="searchForm__input"
              ref={ (input) => { this.filmInput = input } }
              onChange={ this.onInputChange.bind(this) }
              name="searchFilm"
            />

            <Button
              color="primary"
              className="searchForm__button"
              id="addToStore"
              onClick={ this.saveToStore.bind(this) }
            >
              Найти
            </Button>

            {!this.state.errInfo && !this.props.movieInfo.id && 
              <p className="warning">Совпадений не найдено</p>}

          </Form>

            {this.props.movieInfo.id && <div>

              <Movie movieInfo={this.props.movieInfo} />

              <div className="toWish">

                <span className="toWish__text"> Add to Wish List</span>

                <Button
                  onClick={this.addToWish.bind(this)}
                  className="toWish__btn"
                  variant="fab"
                  color="danger"
                >
                  +
                </Button>
              </div>

          </div>}

        </div>

      </div>
    )
  }
}

SearchPage.propTypes = {
  movieInfo: PropTypes.object,
  searchMovie: PropTypes.func,
  addToWish: PropTypes.func
};

export default SearchPage
