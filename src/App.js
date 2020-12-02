import React from 'react'
import { Switch, Router, Redirect} from 'react-router-dom';
import history from './utils/history';
import AppRoutes from './routes';
import CustomRoutes from './components/routes';

function App() {
  return (
    <div className="bg-gray-200">
      <Router history={history}>
        <Switch>
          {
            AppRoutes.map(({ path, component }, key) =>
              <CustomRoutes
                exact
                path={path}
                component={component}
                key={key}
              />
            )
          }
          <Redirect from="/" to="/palindrome" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
