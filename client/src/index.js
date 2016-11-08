import React from 'react';
import 'normalize.css';
import 'semantic-ui-css/semantic.css';
require('./styles/App.scss');
import {render} from 'react-dom';
import Root from './Root';

// here should be other plugins
render(<Root/>, document.getElementById('app'));
