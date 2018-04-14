import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from "./SignUp";


class SignUpLogic extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state ={
      errors: {},
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    };
    this.proccessForm = this.processForm.bind(this);
  }

  processForm(event){
    event.preventDefault();
    const firstName = encodeURIComponent(this.state.user.firstName);
    const lastName = encodeURIComponent(this.state.user.lastName);
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = 'firstName=${firstName}&lastName=${lastName}&email=${email}&password=${password}';
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/signup');
    xhr.responseType = 'json';
    xhr.addEventListener('load', ()=>{
      if(xhr.status === 200){
        this.setState({
          errors: {}
        });

        localStorage.setItem('successMessage', xhr.response.message);
        this.props.history.push('/profile');
      }else{
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
    });
  }
});
  xhr.send(formData);

}

changeUser(event) {
  const field = event.target.name;
  const user = this.state.user;
  user[field] = event.target.value;

  this.setState({
    user
  });
}

render(){
  return(
    <SignUpForm
      onSubmit={this.processForm}
      onChange={this.changeUser}
      errors={this.state.errors}
      user={this.state.user}
    />
  );
}
}

SignUpLogic.contextTypes={
  router: PropTypes.object.isRequired
};

export default SignUpLogic;
