import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { ConnectedRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import mySaga from './sagas';
import './index.css';
import App from './App';
import FullWishlist from './FullWishlist';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  connectRouter(history)(reducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    ),
  ),
)

sagaMiddleware.run(mySaga);

ReactDOM.render(

  	<Provider store={store}>
      <ConnectedRouter history={history}>
        <BrowserRouter>
           <Switch>
              <Route exact path='/' component={App} />
              <Route path='/wishlist' component={FullWishlist} />
            </Switch>
         </BrowserRouter>
      </ConnectedRouter>
  	</Provider>,
    document.getElementById('root')
);

registerServiceWorker();
