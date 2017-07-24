import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './WishList.css';

class WishList extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {

    return (
      <div className="wish-wrapper">
        <ol className="wishList">

          <li>
            Lorem ipsum dolor
          </li>
          <li>
            sit amet, consectetur
          </li>
          <li>
            adipisicing elit, sed
          </li>
          <li>
            do eiusmod tempor incididunt
          </li>
          <li>
            ut labore et dolore magna
          </li>
          <li>
            aliqua. Ut enim ad minim veniam,
          </li>
          <li>
            quis nostrud exercitation ullamco
          </li>

        </ol>

      </div>

    )
  }
}

export default WishList
