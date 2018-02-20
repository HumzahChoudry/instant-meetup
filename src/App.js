import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/Navbar.css';
import Navbar from './components/Navbar'
import {Route, Switch} from 'react-router-dom';


class App extends Component {


  render() {
    const loginRender = () => {
      return (<h1>Login page</h1>)
    }
    const catchAllRender = () => {
      return (<h1>Catch all page</h1>)
    }
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/login" component={loginRender} />

          <Route path="/" component={catchAllRender} />

        </Switch>

      </div>
    );
  }
}

export default App;
