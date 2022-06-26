import React from "react"

const Button = props => {
    const handleClick = () => {
        props.handleClick();
    }

    return <button className={props.className} onClick={handleClick}>{props.children}</button>
}

export default Button;