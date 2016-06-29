import React from 'react';
import ReactDOM from 'react-dom';

import {Router, browserHistory} from 'react-router';
import AppRoutes from './AppRouting';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// class Root extends React.Component {
//   render() {
//     return (
//       <Relay.RootContainer
//         Component={ Application }
//         route={ new ExampleRoute() } />
//     );
//   }
// }
// Render the main component into the dom
const component =
    <Router
        history={browserHistory}>
        {AppRoutes}
    </Router>

ReactDOM.render(component, document.getElementById('app'));


window.React = React;
