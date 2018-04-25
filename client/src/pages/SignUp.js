import React, {Component} from "react";
// import HeroSignUp from "../components/Hero/HeroSignUp";
// import "../components/Hero/Hero.css";
// import HeroProfile from "../components/Hero/HeroProfile";
// import Navbar from "../components/Navbar/Navbar";
import API from '../utils/API';

class Create extends Component {
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const {firstName, lastName, email, password} = this.state;
    API.register(firstName, lastName, email, password).then(result=> {
      this.props.history.push('/login');
    });
  };

  render() {
    const {firstName, lastName, email, password} = this.state;
return (
  // <div className = "container-fluid">
  // <HeroProfile backgroundImage = "https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="profileBackground">
  //     <Navbar />
              <div className="container">
                <form className="form-signin" onSubmit={this.onSubmit}>
                  <h2 className="form-signin-heading">Register</h2>
                  <label htmlFor="inputFirstName" className="sr-only">
                    First name
                  </label>
                  <input
                    type="string"
                    className="form-control"
                    placeholder="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={this.onChange}
                    required
                  />
                  <label htmlFor="inputLastName" className="sr-only">
                    Last Name
                  </label>
                  <input
                    type="string"
                    className="form-control"
                    placeholder="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={this.onChange}
                    required
                  />
                  <label htmlFor="inputEmail" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Test@example.com"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    required
                  />
                  <label htmlFor="inputPassport" className="sr-only">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    required
                  />
                  <button className="btn btn-lg btn-primary btn-block" type="submit">
                    Register
                  </button>
                </form>
              </div>
            );
          }
        }
export default Create;
