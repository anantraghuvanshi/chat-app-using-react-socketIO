import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Join from "./components/Join/Join";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Route path='/' component={Join} />
  </Router>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
