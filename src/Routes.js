import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Welcome, Home } from './pages';
import { theme } from './styles/theme';
import * as ROUTES from './constants/routes';

const Routes = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path={ROUTES.WELCOME}>
          <Welcome />
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default Routes;
