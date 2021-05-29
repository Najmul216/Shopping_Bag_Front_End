import React, { Component } from 'react';
import RegisterView from './RegisterView';


class RegisterContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            password2: '',
            email: ''
        }
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    
        // const user = {
        //   username: this.state.username,
        //   password: this.state.password,
        //   password2: this.state.password2,
        //   email: this.state.email
        // }
        
        // this.props.registerRequest(user, this.props.history)
    
        console.log(this.state)
      }

    render() {

        return (
            <RegisterView
                {...this.state}

                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                {...this.props}
            />
        )
    }
}


export default RegisterContainer;