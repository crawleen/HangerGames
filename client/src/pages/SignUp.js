import React from "react";
import HeroSignUp from "../components/Hero/HeroSignUp";
import "../components/Hero/Hero.css";
import HeroProfile from "../components/Hero/HeroProfile";
import Navbar from "../components/Navbar/Navbar";

const SignUp = () => (
    <div className = "container-fluid" >
    <HeroProfile backgroundImage = "https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="profileBackground">
        <Navbar />
                <form className="col-md-3">
                    <div className = "form-group">
                        <label for = "inputFirstName">Sign-up</label>
                        <input type = "text" className = "form-control" id = "firstNameInput" placeholder = "First Name" />
                        </div>
                    <div className = "form-group">
                        
                        <label for = "inputLastName"></label>
                        <input type = "text" className = "form-control" id = "lastNameInput" placeholder = "Last Name" />
                    
                    </div>
                    <div className = "form-group">
                   
                        <label for = "inputEmail"></label>
                        <input type = "email" className = "form-control" id = "emailInput" placeholder = "Email" />
                    
                    </div>
                    <div className = "form-group">
                   
                        <label for = "inputPassword"></label>
                        <input type = "password" className = "form-control" id = "passwordInput" placeholder = "Password" />
                       
                    </div>
                    <button type = "submit" className = "btn btn-default">Submit</button>
                </form>
       
         </HeroProfile>
    </div>
);

export default SignUp;