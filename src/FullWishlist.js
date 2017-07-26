import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieById from './MovieById';
import WishList from './WishList'

const FullWishlist = () => (
  <Switch>
    <Route exact path='/wishlist' component={WishList}/>
    <Route path='/wishList/:number' component={MovieById}/>
  </Switch>
)


export default FullWishlist;
