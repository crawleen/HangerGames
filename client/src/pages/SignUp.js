import React from "react";
import HeroSignUp from "../components/Hero/HeroSignUp";
import "../components/Hero/Hero.css";

const SignUp = () => (
    <div className = "container">
        <div className = "row" id = "wrapper">
        <HeroSignUp backgroundImage = "https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
            <div className = "col-md-12">
                <form>
                    <div className = "form-group">
                        <label for = "inputFirstName">First Name</label>
                        <input type = "text" className = "form-control" id = "firstNameInput" placeholder = "First Name" />
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

export default SignUp;