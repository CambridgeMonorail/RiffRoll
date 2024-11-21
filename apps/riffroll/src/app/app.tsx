import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import PracticeScreen from './PracticeScreen';

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/practice" component={PracticeScreen} />
      </Switch>
    </Router>
  );
}

export default App;
