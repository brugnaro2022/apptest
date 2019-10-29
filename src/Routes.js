import React, { Component } from 'react'
import { PrivateRoute } from './components'
import { history } from './helpers'
import { Router, Route } from 'react-router-dom'

import Dashboard from './view/Dashboard/Dashboard'
import Signin from './view/Login/Signin'
import Signup from './view/Login/Signup'

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Router>
    )
  }
}

export default Routes
