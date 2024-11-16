import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeScreen from './HomeScreen';

export function App() {
  return (
    <Router>
      <HomeScreen />
    </Router>
  );
}

export default App;
