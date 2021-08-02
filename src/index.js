import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import {NotFound, routes} from './settings/routes'
import Router from './serviceRouter'

import { store } from './reducers';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => (
          <Router key={`router${index}`} Render={route.render} routes={route.routes}/>
          ))}
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('MainWrapper')
);

serviceWorker.unregister();
