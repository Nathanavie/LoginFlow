import React from 'react'

const Button = props => {
    let btnType = props.buttonType
    if(!props.buttonType) btnType = 'button'
    if(props.buttonType === "toggle") {
        return(
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        )
    } else {
        return (
            <button type={btnType}>{props.wording}</button>
        )
    }
}

export default Button