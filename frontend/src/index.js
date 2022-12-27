import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { Provider }  from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from './reducers';

import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger(); 

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware))

store.dispatch({ type: "MEH" })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


