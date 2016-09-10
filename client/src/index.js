import React from 'react';
import Relay from 'react-relay';
import ReactDOM from 'react-dom';
import useRelay from 'react-router-relay'
import {browserHistory, Router, applyRouterMiddleware} from 'react-router';
import AppRoutes from './AppRouting';
// import injectTapEventPlugin from 'react-tap-event-plugin';

// injectTapEventPlugin();

// Render the main component into the dom
(<Router history={browserHistory}
            render={applyRouterMiddleware(useRelay)}
            environment={Relay.Store}>
            {AppRoutes}
        </Router>)

ReactDOM.render(<Router
            history={browserHistory}
            render={applyRouterMiddleware(useRelay)}
            environment={Relay.Store}>
            {AppRoutes}
        </Router>, document.getElementById('app'));


window.React = React;
