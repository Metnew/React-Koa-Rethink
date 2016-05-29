import {combineReducers} from 'redux';
import {login} from './auth'

const AppLogic = combineReducers({login})

export default AppLogic;
