import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import PropTypes from 'prop-types';
import './MovieById.css';

const MovieById = (props) => {

  const wishlist = props.wishList.get('wishList');
  const movieId = parseInt(props.match.params.number, 10);
  const currentMovie = wishlist.filter( (val) => val.id === movieId );
  const movieObj = currentMovie.get(0);
  return (

    props.wishList.get('wishList').size > 0 && <div className="current">
      <p className="current__title">{movieObj.title}</p>
      <img
        className="current__logo"
        src={movieObj.poster_path}
        alt="logo"
      />
      <p className="current__overview">{movieObj.overview}</p>
      <p className="current__date">{movieObj.release_date}</p>
    </div>
  )
};

MovieById.propTypes = {
  wishList: PropTypes.array,
};

export default connect(
  state => ({
    wishList: state.wishList,
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(MovieById);
