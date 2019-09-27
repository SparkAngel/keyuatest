import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/HomePage';
import TrialPlan from './components/TrialPlan';
import AnnualPlan from './components/AnnualPlan';
import './App.css';

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/trial" exact component={TrialPlan} />
      <Route path="/annual" exact component={AnnualPlan} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
