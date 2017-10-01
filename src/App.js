import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Homepage from './components/pages/Homepage'
import Login from './components/pages/Login'

export default class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
      </div>
    )
  }
}
