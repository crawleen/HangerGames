import React from "react";

const SignUpForm = (
  onSubmit,
  onChange,
  errors,
  user,) => (
    <div className = "container">
        <div className = "row">
            <div className = "col-md-12">
                <form>
                    <div className = "form-group">
                        <label htmlFor = "inputFirstName">First Name</label>
                        <input type = "text" className = "form-control" id = "firstNameInput" placeholder = "First Name" />
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "inputLastName">Last Name</label>
                        <input type = "text" className = "form-control" id = "lastNameInput" placeholder = "Last Name" />
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "inputEmail">Email Address</label>
                        <input type = "email" className = "form-control" id = "emailInput" placeholder = "Email" />
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "inputPassword">Password</label>
                        <input type = "password" className = "form-control" id = "passwordInput" placeholder = "Password" />
                    </div>
                    <button type = "submit" className = "btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
);

export default SignUpForm;
