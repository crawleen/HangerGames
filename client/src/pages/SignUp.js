import React, { Component } from "react";
import HeroSignUp from "../components/Hero/HeroSignUp";
import "../components/Hero/Hero.css";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import API from "../utils/API";


class SignUp extends Component
{
onLoad = (e) =>{
  this.saveUser();
}

saveUser = () => {
  API.saveUser({
    firstName: "Ben",
    lastName: "Petrila",
    email: "gentlegiant303@gmail.com",
    password: "1234"
  })
  .catch(err=>console.log(err));
  console.log(API)
}
render(){
  return (
    <div className = "container-fluid" style = {{ backgroundImage: `url(https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)` }}>
        <Navbar />
        <div className = "row" id = "wrapper">
        <HeroSignUp backgroundImage = "https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="signupBackground">
            <div className = "container">
                <form>
                    <div className = "form-group row">
                        <div className="col-3">
                        <label for = "inputFirstName"></label>
                        <input size="20" type = "text" className = "form-control" id = "firstNameInput" placeholder = "First Name" />
                        </div>
                    </div>
                    <div className = "form-group">
                        <label for = "inputLastName">Last Name</label>
                        <input type = "text" className = "form-control" id = "lastNameInput" placeholder = "Last Name" />
                    </div>
                    <div className = "form-group">
                        <label for = "inputEmail">Email Address</label>
                        <input type = "email" className = "form-control" id = "emailInput" placeholder = "Email" />
                    </div>
                    <div className = "form-group">
                        <label for = "inputPassword">Password</label>
                        <input type = "password" className = "form-control" id = "passwordInput" placeholder = "Password" />
                    </div>
                    <button type = "submit" className = "btn btn-primary">Submit</button>
                </form>
            </div>
        </HeroSignUp>
        </div>
    </div>
);

}
}
export default SignUp;
