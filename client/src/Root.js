import React, {Component} from 'react'
import {browserHistory, Router} from 'react-router';
import routing from './routing'

export default class Root extends Component {
  render() {
    return (
      <Router history={browserHistory} routes={routing} />
    )
  }
}
