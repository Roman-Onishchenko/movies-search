import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import PropTypes from 'prop-types';
import { Button } from 'muicss/react';
import './WishList.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul className="header-nav">
        <li><Link to='/'>SearchPage</Link></li>
      </ul>
    </nav>
  </header>
);


class WishList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.getMovies();
  }

  render() {

    const wishlist = this.props.wishList.get('wishList');

    return (

     <div className="wish-wrapper">
        <Header />
        <ol className="wishList">

          {wishlist && wishlist.map((val, index) =>
            <li key={index}>

              <div className="poster">
                <img
                  src={val.poster_path}
                  alt="logo"
                />
            </div>

              <p className="title">{val.title} </p>

              <p className="overview">{val.overview} </p>

              <p className="date">{val.release_date} </p>

              <span><Link to={"/wishlist/"+ val.id}>Открыть в отдельном окне</Link> </span>

            </li>
          )}

        </ol>
      </div>
    )
  }
}

WishList.propTypes = {
  wishlist: PropTypes.array,
};

export default connect(
  state => ({
    wishList: state.wishList,
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(WishList);
