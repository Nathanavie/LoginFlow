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

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState ({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.submitFunction()
    }
    
    render() {
        return (
            <form>
                <label>Username</label>
                <input
                    type="email"
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
                <Button buttonType="formSubmit" wording="Login" clickFunction={this.submitForm} />
            </form>
        )
    }
}

export default Form