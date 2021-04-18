import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import homePage from './UserManagement/login';
import aboutUs from './UserManagement/about_us';
import './App.css'

export default class App extends Component {

  render() {
    return (
      <div className="rootdiv">
        <Router>
          <Switch>
            <Route exact path="/" component={homePage} />
            <Route exact path="/aboutus" component={aboutUs} />
          </Switch>
        </Router>

      </div>
    )
  }
}