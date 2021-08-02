import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Router from './contents/Router'

import { store } from './reducers';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('MainWrapper')
);

serviceWorker.unregister();
