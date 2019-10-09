import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SearchPage from './pages/searchPage';
import BookDetailPage from './pages/bookDetailPage';

const NoMatchRoute = () => <div>404 Page</div>;
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={SearchPage} />
        <Route component={NoMatchRoute} />
        <Route path='/book/:bookid' exact component={BookDetailPage} />
      </Switch>
    </Router>
  );
};

export default App;
