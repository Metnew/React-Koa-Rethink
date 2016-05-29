import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Dashboard from './components/pages/Dashboard';
import StreamNew from './components/pages/StreamNew';
import Settings from './components/pages/Settings';

const AppRoutes = (
    <Route name="app" path="/" component={App}>
        <IndexRoute name="Dashboard" component={Dashboard}/>
        <Route name="Dashboard" path="" component={Dashboard}/>
        <Route name="StreamNew" path="stream" component={StreamNew}/>
        <Route name="Settings" path="settings" component={Settings}/>
    </Route>
)

export default AppRoutes;
