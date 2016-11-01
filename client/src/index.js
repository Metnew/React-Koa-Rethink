/** @jsx App */
import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router} from 'react-router';
import AppRoutes from './AppRouting';

ReactDOM.render(<Router
            history={browserHistory}>
            {AppRoutes}
        </Router>, document.getElementById('app'));


window.React = React;
