import React from "react";
import { Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateSignupForm, signup } from "../actions";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      current_latitude: 40.7589,
      current_longitude: -73.9851
    };
  }

  componentDidMount = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.updatePosition);
    }
  };

  updatePosition = position => {
    this.setState({
      current_latitude: position.coords.latitude,
      current_longitude: position.coords.longitude
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  signup = e => {
    e.preventDefault();
    this.props.signup(
      {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        username: this.state.username,
        password: this.state.password,
        current_latitude: this.state.current_latitude,
        current_longitude: this.state.current_longitude
      },
      this.props.history
    );
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.signup}>
          <Form.Field>
            <label>First Name</label>
            <input
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <input
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);
