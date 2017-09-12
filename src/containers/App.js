import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import LoginPage from './LoginPage';

//Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//React-Router
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import AuthExample from './BasicExample';

class App extends Component {
  render() {
    return (
        <AuthExample/>
    );
  }
}

export default App;
