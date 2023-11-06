import React from 'react'
import "./button.css"
const Buttons = (props) => {
    return (
        <button className="button-57" role="button" style={{ width: props.width , color:props.textColor ,border:props.border ,backgroundColor:props.Color}} onClick={props.onClick}><span className="text">{props.title}</span><span>{props.title}</span></button>
    )
}

export default Buttons