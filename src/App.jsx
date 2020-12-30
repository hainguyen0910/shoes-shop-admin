import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import store from 'Redux/store';
import { ADMIN_ROUTER } from './routes';

import './style.scss';
import { history } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          {ADMIN_ROUTER.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
