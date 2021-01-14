import React from 'react'

const Button = props => {
    if(props.buttonType === "toggle") {
        return(
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        )
    } else if(props.buttonType === "formSubmit") {
        return (
            <button type="button" onClick={(e) => props.clickFunction()}>{props.wording}</button>
        )
    } else {
        return (
            <button>Default button</button>
        )
    }
}

export default Button