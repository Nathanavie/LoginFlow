import React from 'react';
import Button from './Button'
class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }


    validateForm = (e) => {
        e.preventDefault()
        if(this.state.username.length > 0 && this.state.password.length > 0) {
            this.props.submitFunction()
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState ({
            [name]: value,
        })
    }
    render() {
        return (
            <form onSubmit={this.validateForm}>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <Button buttonType="submit" wording="Login"/>
            </form>
        )
    }
}

export default Form