import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import { Redirect } from "react-router";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = e => {
    e.preventDefault();
    console.log("login is a: ", this.props.login);
    this.props.login({
      username: this.state.username,
      password: this.state.password
    });
    this.props.history.push("/home");
  };
  render() {
    return (
      <div className="login-wrap">
        {this.props.user.id ? (
          <Redirect to="/home" />
        ) : (
          <div className="login-html">
            <div className="login-form">
              <form onSubmit={this.login} className="sign-in-htm">
                <div className="group">
                  <label className="label">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="input"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="group">
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="group">
                  <input type="submit" />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.userReducer.user };
};
export default connect(mapStateToProps, { login })(LoginPage);
