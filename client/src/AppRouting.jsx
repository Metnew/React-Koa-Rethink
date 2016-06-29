import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Dashboard from './components/Dashboard';

const AppRoutes = (
    <Route name="app" path="/" component={App}>
        <IndexRoute name="Dashboard" component={Dashboard}/>
        <Route name="Dashboard" path="" component={Dashboard}/>
        {/*<Route name="Settings" path="settings" component={Settings}/>*/}
    </Route>
)

export default AppRoutes;
