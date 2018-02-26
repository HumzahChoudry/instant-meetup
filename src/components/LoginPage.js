import React from "react"
import { connect } from "react-redux";
import { updateLoginForm, login } from '../actions'
import {Redirect} from 'react-router'

class LoginPage extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  login = e => {
    e.preventDefault();
    this.props.login({
      username: this.state.username,
      password: this.state.password
    })
    this.props.history.push('/home')
  };
  render() {
    return (
      <div>
        {this.props.user.id ?
          <Redirect to="/home" />
          :
          <div className="login-form">
            <form onSubmit={this.login}>
              <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
              <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
              <input type="submit" />
            </form>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.userReducer.user}
}
export default connect(mapStateToProps, {updateLoginForm, login})(LoginPage)
