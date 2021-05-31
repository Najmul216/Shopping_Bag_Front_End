import React, { Component } from 'react';
import LoginView from './LoginView';

//import Swal from 'sweetalert2'


class LoginContainer extends Component {

    constructor(props){
        super(props)
    
        this.state = {
          email: '',
          password: ''
        }
      }


      handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
    
        this.setState({ [name]: value })
      }

      handleSubmit = (e) => {
        e.preventDefault()

        //Swal.fire("Login Successfully")
    
        console.log(this.state);
        // const user = {
        //   email: this.state.email,
        //   password: this.state.password
        // }
    
        // this.props.loginRequest(user, this.props.history)
      }
    



    render() {
        return (
            <LoginView 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            {...this.state}
            {...this.props}
            />
        )
    }
}

export default LoginContainer;
