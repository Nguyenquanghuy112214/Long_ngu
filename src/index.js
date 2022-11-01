import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import store from '~/app/store.js';
import { Provider } from 'react-redux';
import GlobalStyles from './components/GlobalStyles/index';
import {
  BrowserRouter as Router,
} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Router>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </Router>
  </Provider>
);


