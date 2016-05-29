import React from 'react';
import ReactDOM from 'react-dom';

import {Router, browserHistory} from 'react-router';
import AppRoutes from './AppRouting';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AppLogic from './reducers';

// import io from 'socket.io-client';


let store = createStore(AppLogic)

injectTapEventPlugin();
// Render the main component into the dom
const component =
<Provider
    store={store}
    key="provider">
    <Router
        history={browserHistory}>
        {AppRoutes}
    </Router>
</Provider>

ReactDOM.render(component, document.getElementById('app'));


window.React = React;
//
// function initSocket() {
//     const socket = io('http://localhost', {path: '/ws'});
//     socket.on('news', (data) => {
//         console.log(data);
//         socket.emit('my other event', { data: data });
//     });
//     socket.on('msg', (data) => {
//         socket.emit('my other event', { data: data });
//     });
//
//     return socket;
// }
// initSocket();
