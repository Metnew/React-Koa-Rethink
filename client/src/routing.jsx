import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import {App, Foo, Bar} from './containers';

const Routing = (
        <Route name="App" path="/" component={App}>
            <IndexRedirect to="bar"/>
            <Route name="Foo" path="foo" component={Foo}/>
            <Route name="Bar" path="bar" component={Bar}/>
        </Route>
)
export default Routing;
