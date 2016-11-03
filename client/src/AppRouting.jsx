import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {App, Foo, Bar} from './containers';
const AppRoutes = (
    <Route name="App" path="/" component={App}>
        <IndexRoute name="Foo" component={Foo}/>
        <Route name="Foo" path="foo" component={Foo}/>
        <Route name="Bar" path="bar" component={Bar}/>
    </Route>
)
export default AppRoutes;
