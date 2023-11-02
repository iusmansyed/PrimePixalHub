import React from 'react'
import "./button.css"
const Buttons = (props) => {
    return (
        <button className="button-57" role="button" style={{ width: props.width , color:"black" }} ><span className="text">{props.title}</span><span>{props.title}</span></button>
    )
}

export default Buttons