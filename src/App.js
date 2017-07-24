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
          filmInfo={this.props.filmInfo}
          searchMovie={this.props.searchMovie}
        />
      </div>
    );
  }
}

App.propTypes = {
  filmInfo: PropTypes.object,
  searchMovie: PropTypes.func
};

export default connect(
  state => ({
    filmInfo: state.searchFilmReducer
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(App);
