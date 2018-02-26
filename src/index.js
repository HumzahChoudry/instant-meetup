import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import thunk from "redux-thunk"
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import { store } from './store';

ReactDOM.render((
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
), document.getElementById('root'));
registerServiceWorker();
