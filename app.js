import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './src/components/pages/home';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </Router>
), document.getElementById('app'));
