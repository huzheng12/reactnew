import React, { Component } from 'react';
import { HashRouter as Hash, Route, Switch } from "react-router-dom"
import Index from '../views';
class Root extends Component {
  render() {
    return <Hash basename="/">
        <Switch>
          <Route exact path="/" component={Index}></Route>
        </Switch>
    </Hash>
  }
}

export default Root;