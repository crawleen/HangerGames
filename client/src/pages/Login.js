import React, { Component } from 'react';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";

class Login extends Component {

  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

  const {email, password} = this.state;

    API.login(email, password)
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        this.setState({ message: '' });
        this.props.history.push('/')
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. email or password not match' });
        }
      });
  }

  render() {
    const {email, password, message } = this.state;
    return (
      <div className="container">
      <Navbar />
        <form className="col-md-4 col-md-offset-4" onSubmit={this.onSubmit}>
          <h2 className="form-signin-heading">Please sign in</h2>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input type="email" className="form-control" placeholder="Email address" name="email" value={email} onChange={this.onChange} required/>
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <button className="btn btn-default" type="submit">Login</button>
          <p>
            Need to Sign Up? <Link to="/SignUp"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
