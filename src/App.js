import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { Dashboard } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} exact />
      </Switch>
    </Router>
  );
}

export default App;
