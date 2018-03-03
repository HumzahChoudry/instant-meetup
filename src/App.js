import React, { Component } from "react";
import "./App.css";
import "./css/Navbar.css";
import "./css/Friends.css";
import "./css/Meetups.css";
import Navbar from "./components/Navbar";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import LoginPage from "./components/LoginPage";
import { RestfulAdapter } from "./adapters";
import { connect } from "react-redux";
import { setUser, logout } from "./actions";

class App extends Component {
  componentWillMount() {
    const token = localStorage.getItem("token");
    if (token && token !== "undefined") {
      console.log("about to get current user");
      this.props.setUser();
    }
  }

  removeLoggedInUser = () => {
    localStorage.removeItem("token");
    this.props.logout();
    window.history.pushState({}, null, "/login");
  };

  render() {
    return (
      <div className="App">
        <Navbar logout={this.removeLoggedInUser} user={this.props.user} />
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route path="/login" component={LoginPage} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.userReducer.user };
};
export default withRouter(connect(mapStateToProps, { setUser, logout })(App));
