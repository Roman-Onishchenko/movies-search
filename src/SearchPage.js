import React, { Component } from 'react';
import { Appbar, Button, Container } from 'muicss/react';
import Form from 'muicss/lib/react/form';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './SearchPage.css';

class SearchPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    }
  }

  onInputChange (e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  saveToStore () {
    if (this.state.inputValue) {
      this.props.searchMovie(this.state.inputValue);
    };

    this.filmInput.value = '';
  }

  render() {

    return (

      <div className="wrapper">

        <Form
          className="searchForm"
          onClick={ (event) => { event.preventDefault() } }
        >

          <legend
            className="searchForm__legend">
            Название фильма:
          </legend>

          <input
            className="searchForm__input"
            ref={ (input) => { this.filmInput = input } }
            onChange={ this.onInputChange.bind(this) }
            name="searchFilm"
          />

          <Button
            className="searchForm__button"
            id="addToStore"
            onClick={ this.saveToStore.bind(this) }
          >
            Найти
          </Button>

        </Form>

        {this.props.filmInfo.title && <div>
          <p>{this.props.filmInfo.title}</p>
          <p>{this.props.filmInfo.overview}</p>
          <img src={this.props.filmInfo.poster_path} alt="logo" />
          <img src={this.props.filmInfo.backdrop_path} alt="logo" />
          <p>{this.props.filmInfo.release_date}</p>
        </div>
        }

      </div>
    )
  }
}

SearchPage.propTypes = {
  filmInfo: PropTypes.object,
  searchMovie: PropTypes.func
};

export default SearchPage
