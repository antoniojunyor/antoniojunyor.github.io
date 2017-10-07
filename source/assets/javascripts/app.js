import '../stylesheets/app.sass';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/home';

const container = document.querySelector('.ant-body-container');

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
    </div>
  </Router>
, container);
