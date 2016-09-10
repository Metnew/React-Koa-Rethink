import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Dashboard from './components/Dashboard';

const AppRoutes = (
    <Route name="app" path="/" component={App}>
        <IndexRoute offers='null' name="Dashboard" component={Dashboard}/>
        <Route name="Dashboard" path="" component={Dashboard}/>
    </Route>
)

export default AppRoutes;
