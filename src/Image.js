import React from "react";
import Text from "./Text";
import "./Main.css";

export default function Image(props) {
    return(
        <div>
            <img id="apod" src={props.imgUrl}></img>
            
        </div>

    )
}