import React from "react";
import "./Main.css";

export default function Text(props){
    return (
        <div className='textBox'>
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <p>{props.desc}</p>
            <p id="copy">©  {props.author}</p>
        </div>
    )
}