import React from "react";
import "./Main.css";

export default function Text(props){
    return (
        <div className='textBox'>
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <h4>{props.desc}</h4>
            <h4>{props.author}</h4>
        </div>
    )
}