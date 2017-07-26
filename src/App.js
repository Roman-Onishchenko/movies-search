import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import PropTypes from 'prop-types';
import SearchPage from './SearchPage';

class App extends Component {

  render() {
    return (
      <div>

        <SearchPage
          movieInfo={this.props.movieInfo}
          searchMovie={this.props.searchMovie}
          addToWish={this.props.addToWish}
        />
      </div>
    );
  }
}

App.propTypes = {
  movieInfo: PropTypes.object,
  addToWish:PropTypes.func,
  searchMovie: PropTypes.func
};

export default connect(
  state => ({
    movieInfo: state.searchMovie.get('foundMovie'),
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(App);
