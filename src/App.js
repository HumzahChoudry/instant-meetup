import React, { Component } from "react";
import "./App.css";
import "./css/Navbar.css";
import "./css/LoginPage.css";
import "./css/Friends.css";
import "./css/Meetups.css";
import Navbar from "./components/Navbar";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import LoginPage from "./components/LoginPage";
import MeetupPage from "./components/MeetupPage";
import { RestfulAdapter } from "./adapters";
import { connect } from "react-redux";
import { setUser, logout } from "./actions";

class App extends Component {
  componentWillMount() {
    const token = localStorage.getItem("token");
    if (token && token !== "undefined") {
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
          <Route path="/signup" component={Signup} />
          <Route
            path="/meetup/:id"
            render={routerProps => <MeetupPage {...routerProps} />}
          />
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
