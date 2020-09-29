import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Ex_1_2 from '../pages/Ex_1_2';
import Ex_3_4 from '../pages/Ex_3_4';
import Ex_5 from '../pages/Ex_5';
import Ex_6_7 from '../pages/Ex_6_7';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/Ex_1_2" exact component={Ex_1_2} />
    <Route path="/Ex_3_4" exact component={Ex_3_4} />
    <Route path="/Ex_5" exact component={Ex_5} />
    <Route path="/Ex_6_7" exact component={Ex_6_7} />
  </Switch>
);

export default Routes;
