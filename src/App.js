import { BrowserRouter as Router } from 'react-router-dom';
import { IsUserRedirect, ProtectedRoutes } from './helpers';
import { Welcome } from './pages';

const App = () => (
  <Router>
    <Welcome />
  </Router>
);

export default App;
